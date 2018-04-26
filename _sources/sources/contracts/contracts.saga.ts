import {call, put, take, takeEvery, takeLatest, select} from 'redux-saga/effects';

import {SagaIterator, eventChannel, END} from "redux-saga";
import {Unsubscribe} from "redux";
import {State} from "../stateInterface";
import {FeedNewContract, FeedNewTransaction, FeedNewTransactionAction} from "../feed/feed.actions";
import {Web3LoadedAction, Web3LoadError, Web3NetworkError} from "../web3/web3.actions";
import {VortexContract} from "./VortexContract";
import {
    ContractCallAction, ContractError, ContractLoaded, ContractLoading, ContractSendAction,
    ContractVarErrorReceived, ContractVarForceRefresh,
    ContractVarReceived
} from "./contracts.actions";
import {
    TxBroadcasted,
    TxBroadcastedAction,
    TxConfirmed,
    TxError,
    TxReceipt
} from "../tx/tx.actions";

export function runForceRefreshRoundOn(state: State, emit: (arg?: any) => void, contractName: string, instance_address: string): void {
    Object.keys(state.contracts[contractName][instance_address].instance.methods).forEach((methodName: string): void => {
        if (state.contracts[contractName][instance_address].instance.methods[methodName].vortexCache) {
            Object.keys(state.contracts[contractName][instance_address].instance.methods[methodName].vortexCache).forEach((signature: string): void => {
                if (state.contracts[contractName][instance_address].instance.methods[methodName].vortexCache[signature].synced) {
                    emit(ContractVarForceRefresh(contractName, instance_address, methodName, signature));
                }
            })
        }
    })
}

export function runForceRefreshRound(state: State, emit: (arg?: any) => void): void {
    Object.keys(state.contracts).forEach((contractName: string): void => {
        Object.keys(state.contracts[contractName]).forEach((instance_address: string): void => {
            if (instance_address !== 'artifact' && state.contracts[contractName][instance_address].instance) {
                runForceRefreshRoundOn(state, emit, contractName, instance_address);
            }
        })
    });
}

function *backgroundContractLoad(state: State): SagaIterator {


    return eventChannel((emit: (arg?: any) => void): Unsubscribe => {
        const interval_id = setInterval((): void => {
            runForceRefreshRound(state, emit);
        }, 1000);

        return ((): void => { clearInterval(interval_id) });
    });
}

function *onLoadContractInitialize(action: Web3LoadedAction): SagaIterator {
    const contracts = (yield select()).contracts;
    const contractNames = Object.keys(contracts);
    try {
        for (let idx = 0; idx < contractNames.length; ++idx) {
            if (contracts[contractNames[idx]].artifact.networks) {
                if (contracts[contractNames[idx]].artifact.networks[action.networkId] === undefined) {
                    yield put(Web3NetworkError(action.networkId));
                    break ;
                }
                yield put(ContractLoading(contractNames[idx], contracts[contractNames[idx]].artifact.networks[action.networkId].address));
                let vortex_contract: any;
                try {
                    vortex_contract = new VortexContract(contracts[contractNames[idx]].artifact, contracts[contractNames[idx]].artifact.networks[action.networkId].address, action.coinbase, action._);
                } catch (e) {
                    yield put(ContractError(contractNames[idx], contracts[contractNames[idx]].artifact.networks[action.networkId].address, e));
                    throw (e);
                }
                yield put(ContractLoaded(contractNames[idx], contracts[contractNames[idx]].artifact.networks[action.networkId].address, vortex_contract));
                yield put(FeedNewContract(contractNames[idx], contracts[contractNames[idx]].artifact.networks[action.networkId].address));
            }
        }
    } catch (e) {
        yield put(Web3LoadError(e))
    }

    const state = yield select();
    const auto_refresh = yield call(backgroundContractLoad, state);
    try {
        while (true) {
            const time_to_update = yield take(auto_refresh);
            yield put(time_to_update);
        }
    } finally {
        auto_refresh.close();
    }
}

function* contractCall(action: ContractCallAction, tx: any, arg_signature: string): SagaIterator {

    return eventChannel((emit: (arg?: any) => void): Unsubscribe => {
        tx.call(action.transactionArgs).then((result: any) => {
            emit(ContractVarReceived(action.contractName, action.contractAddress, action.methodName, arg_signature, result));
            if (action.resolvers)
                action.resolvers.success(result);
        }).catch((error: any) => {
            emit(ContractVarErrorReceived(action.contractName, action.contractAddress, action.methodName, arg_signature, error));
            if (action.resolvers)
                action.resolvers.error(error);
        });

        return ((): void => {});
    });

}

function* onContractCall(action: ContractCallAction): SagaIterator {
    action.contractAddress = action.contractAddress.toLowerCase();
    const contracts = (yield select()).contracts;
    const current_contract = contracts[action.contractName][action.contractAddress].instance;
    const arg_signature = VortexContract.callSignature(...action.methodArgs);

    if (!current_contract.methods[action.methodName].vortexCache[arg_signature].synced) {
        const ctcall = yield call(contractCall, action, current_contract.methods[action.methodName](...action.methodArgs), arg_signature);
        try {
            while (true) {
                const resolution = yield take(ctcall);
                yield put(resolution);
            }
        } finally {
            ctcall.close();
        }
    }
}

function* contractSend(action: ContractSendAction, tx: any): SagaIterator {

    let transaction_hash: string;
    let state: State = yield select();

    return eventChannel((emit: (arg?: any) => void): Unsubscribe => {

        const tx_events = tx.send(action.transactionArgs)
            .on('transactionHash', (_transaction_hash: string): void => {
                transaction_hash = _transaction_hash;
                if (action.resolvers) {
                    action.resolvers.success(_transaction_hash);
                    action.resolvers = undefined;
                }
                emit(FeedNewTransaction(_transaction_hash));
                emit(TxBroadcasted(_transaction_hash));
            })
            .on('confirmation', (_amount: number, _receipt: any): void => {
                emit(TxConfirmed(transaction_hash, _receipt, _amount));
            })
            .on('receipt', (_receipt: any): void => {
                runForceRefreshRoundOn(state, emit, action.contractName, action.contractAddress);
                emit(TxReceipt(transaction_hash, _receipt));
                emit(END);
            })
            .on('error', (_error: any): void => {
                if (transaction_hash === undefined) {
                    transaction_hash = 'last';
                }
                if (action.resolvers) {
                    action.resolvers.error(transaction_hash);
                    action.resolvers = undefined;
                }
                emit(TxError(transaction_hash, _error));
                emit(END);
            });

        return ((): void => {tx_events.off()})
    });

}

function* onContractSend(action: ContractSendAction): SagaIterator {
    action.contractAddress = action.contractAddress.toLowerCase();
    const contracts = (yield select()).contracts;
    const current_contract = contracts[action.contractName][action.contractAddress].instance;

    const ctsend = yield call(contractSend, action, current_contract.methods[action.methodName](...action.methodArgs));
    try {
        while (true) {
            const resolution = yield take(ctsend);
            yield put(resolution);
        }
    } finally {
        ctsend.close();
    }
}

export function* ContractSagas(): any {
    yield takeLatest('LOADED_WEB3', onLoadContractInitialize);
    yield takeEvery('CONTRACT_CALL', onContractCall);
    yield takeEvery('CONTRACT_SEND', onContractSend);
}
