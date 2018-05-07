import {call, put, take, takeEvery, takeLatest, select} from 'redux-saga/effects';

import {SagaIterator, eventChannel, END} from "redux-saga";
import {Unsubscribe} from "redux";
import {State, Web3LoadedState} from "../stateInterface";
import {FeedNewContract, FeedNewError, FeedNewTransaction} from "../feed/feed.actions";
import {Web3LoadedAction, Web3LoadError} from "../web3/web3.actions";
import {VortexContract} from "./VortexContract";
import {
    ContractCallAction, ContractError, ContractLoadAction, ContractLoaded, ContractLoading, ContractSendAction,
    ContractVarErrorReceived, ContractVarForceRefresh,
    ContractVarReceived
} from "./contracts.actions";
import {
    TxBroadcasted,
    TxConfirmed,
    TxError,
    TxReceipt
} from "../tx/tx.actions";
import {Vortex} from "../vortex";
import {AccountUpdateRequest} from "../accounts/accounts.actions";

export function runForceRefreshRoundOn(state: State, emit: (arg?: any) => void, contractName: string, instance_address: string): void {
    Object.keys(state.contracts[contractName][instance_address].instance.vortex).forEach((methodName: string): void => {
        if (state.contracts[contractName][instance_address].instance.vortex[methodName].vortexCache) {
            Object.keys(state.contracts[contractName][instance_address].instance.vortex[methodName].vortexCache).forEach((signature: string): void => {
                if (state.contracts[contractName][instance_address].instance.vortex[methodName].vortexCache[signature].synced) {
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

function *backgroundContractLoad(): SagaIterator {


    return eventChannel((emit: (arg?: any) => void): Unsubscribe => {
        const interval_id = setInterval((): void => {
            const state = Vortex.get().Store.getState();
            runForceRefreshRound(state, emit);
        }, 15000);

        return ((): void => { clearInterval(interval_id) });
    });
}

function* loadContract(contractName: string, contractAddress: string, userAddress: string, web3: any): SagaIterator {
    const contracts = (yield select()).contracts;
    const artifact = contracts[contractName] ? contracts[contractName].artifact : undefined;
    if (!artifact) {
        const error = new Error("Unable to recover artifact for contract " + contractName + ":" + contractAddress);
        yield put(ContractError(contractName, contractAddress, error));
        yield put(FeedNewError(error, error.message, "[contracts.saga.ts][loadContract] Trying to load artifact."));
        return ;
    }
    if (contracts[contractName][contractAddress]) {
        console.warn("Contract already in store");
        return ;
    }
    yield put(ContractLoading(contractName, contractAddress));
    let vortex_contract: any;
    try {
        vortex_contract = new VortexContract(artifact, contractAddress, userAddress, web3);
    } catch (e) {
        yield put(ContractError(contractName, contractAddress, e));
        yield put(FeedNewError(e, e.message, "[contracts.saga.ts][loadContract] Trying to instantiate VortexContract."));
        throw (e);
    }
    yield put(ContractLoaded(contractName, contractAddress, vortex_contract));
    yield put(FeedNewContract(contractName, contractAddress));
}

function *onLoadContractInitialize(action: Web3LoadedAction): SagaIterator {
    const contracts = (yield select()).contracts;
    const contractNames = Object.keys(contracts);
    try {
        for (let idx = 0; idx < contractNames.length; ++idx) {
            if (contracts[contractNames[idx]].artifact.networks) {
                if (contracts[contractNames[idx]].artifact.networks[action.networkId] === undefined) {
                    console.warn("Contract " + contractNames[idx] + " has no instance on current network");
                    break ;
                }
                yield* loadContract(contractNames[idx], contracts[contractNames[idx]].artifact.networks[action.networkId].address.toLowerCase(), action.coinbase, action._);
            }
        }
    } catch (e) {
        yield put(Web3LoadError(e))
    }

    const auto_refresh = yield call(backgroundContractLoad);
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
            emit(FeedNewError(error, error.message, "[contracts.saga.ts][contractCall] Trying to recover constant call result."));
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

    if (!current_contract.vortex[action.methodName].vortexCache[arg_signature].synced) {
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
        let tx_events = undefined;
        try {
            tx_events = tx.send(action.transactionArgs)
                .on('transactionHash', (_transaction_hash: string): void => {
                    transaction_hash = _transaction_hash;
                    if (action.resolvers) {
                        action.resolvers.success(_transaction_hash);
                        action.resolvers = undefined;
                    }
                    emit(FeedNewTransaction(_transaction_hash));
                    emit(TxBroadcasted(_transaction_hash, action.transactionArgs));
                })
                .on('confirmation', (_amount: number, _receipt: any): void => {
                    emit(TxConfirmed(transaction_hash, _receipt, _amount));
                    if (!(_amount % 5) || _amount < 5) {
                        runForceRefreshRoundOn(state, emit, action.contractName, action.contractAddress);
                        if (action.transactionArgs.from)
                            emit(AccountUpdateRequest(action.transactionArgs.from));
                        if (action.transactionArgs.to)
                            emit(AccountUpdateRequest(action.transactionArgs.to));
                    }
                    if (_amount >= 24)
                        emit(END);
                })
                .on('receipt', (_receipt: any): void => {
                    emit(TxReceipt(transaction_hash, _receipt));
                })
                .on('error', (_error: any): void => {
                    if (transaction_hash === undefined) {
                        transaction_hash = 'last';
                    }
                    emit(TxError(transaction_hash, _error));
                    emit(FeedNewError(_error, _error.message, "[contracts.sagas.ts][contractSend.error] Trying to send method call."));
                    if (action.resolvers) {
                        action.resolvers.error(transaction_hash);
                        action.resolvers = undefined;
                    }
                    emit(END);
                });
        } catch (reason) {
            if (transaction_hash === undefined) {
                transaction_hash = 'last';
            }
            Vortex.get().Store.dispatch(TxError(transaction_hash, reason));
            Vortex.get().Store.dispatch(FeedNewError(reason, reason.message, "[contracts.sagas.ts][contractSend.catch] Trying to send method call."));
            if (action.resolvers) {
                action.resolvers.error(transaction_hash);
                action.resolvers = undefined;
            }
            emit(END);
        }

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

function* onContractLoad(action: ContractLoadAction): SagaIterator {
    const {coinbase, _}: Web3LoadedState = (yield select()).web3;
    yield* loadContract(action.contractName, action.contractAddress, coinbase, _);
}

export function* ContractSagas(): any {
    yield takeLatest('LOADED_WEB3', onLoadContractInitialize);
    yield takeEvery('CONTRACT_LOAD', onContractLoad);
    yield takeEvery('CONTRACT_CALL', onContractCall);
    yield takeEvery('CONTRACT_SEND', onContractSend);
}
