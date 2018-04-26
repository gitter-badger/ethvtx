"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const redux_saga_1 = require("redux-saga");
const feed_actions_1 = require("../feed/feed.actions");
const web3_actions_1 = require("../web3/web3.actions");
const VortexContract_1 = require("./VortexContract");
const contracts_actions_1 = require("./contracts.actions");
const tx_actions_1 = require("../tx/tx.actions");
function runForceRefreshRoundOn(state, emit, contractName, instance_address) {
    Object.keys(state.contracts[contractName][instance_address].instance.methods).forEach((methodName) => {
        if (state.contracts[contractName][instance_address].instance.methods[methodName].vortexCache) {
            Object.keys(state.contracts[contractName][instance_address].instance.methods[methodName].vortexCache).forEach((signature) => {
                if (state.contracts[contractName][instance_address].instance.methods[methodName].vortexCache[signature].synced) {
                    emit(contracts_actions_1.ContractVarForceRefresh(contractName, instance_address, methodName, signature));
                }
            });
        }
    });
}
exports.runForceRefreshRoundOn = runForceRefreshRoundOn;
function runForceRefreshRound(state, emit) {
    Object.keys(state.contracts).forEach((contractName) => {
        Object.keys(state.contracts[contractName]).forEach((instance_address) => {
            if (instance_address !== 'artifact' && state.contracts[contractName][instance_address].instance) {
                runForceRefreshRoundOn(state, emit, contractName, instance_address);
            }
        });
    });
}
exports.runForceRefreshRound = runForceRefreshRound;
function* backgroundContractLoad(state) {
    return redux_saga_1.eventChannel((emit) => {
        const interval_id = setInterval(() => {
            runForceRefreshRound(state, emit);
        }, 1000);
        return (() => { clearInterval(interval_id); });
    });
}
function* onLoadContractInitialize(action) {
    const contracts = (yield effects_1.select()).contracts;
    const contractNames = Object.keys(contracts);
    try {
        for (let idx = 0; idx < contractNames.length; ++idx) {
            if (contracts[contractNames[idx]].artifact.networks) {
                if (contracts[contractNames[idx]].artifact.networks[action.networkId] === undefined) {
                    yield effects_1.put(web3_actions_1.Web3NetworkError(action.networkId));
                    break;
                }
                yield effects_1.put(contracts_actions_1.ContractLoading(contractNames[idx], contracts[contractNames[idx]].artifact.networks[action.networkId].address));
                let vortex_contract;
                try {
                    vortex_contract = new VortexContract_1.VortexContract(contracts[contractNames[idx]].artifact, contracts[contractNames[idx]].artifact.networks[action.networkId].address, action.coinbase, action._);
                }
                catch (e) {
                    yield effects_1.put(contracts_actions_1.ContractError(contractNames[idx], contracts[contractNames[idx]].artifact.networks[action.networkId].address, e));
                    throw (e);
                }
                yield effects_1.put(contracts_actions_1.ContractLoaded(contractNames[idx], contracts[contractNames[idx]].artifact.networks[action.networkId].address, vortex_contract));
                yield effects_1.put(feed_actions_1.FeedNewContract(contractNames[idx], contracts[contractNames[idx]].artifact.networks[action.networkId].address));
            }
        }
    }
    catch (e) {
        yield effects_1.put(web3_actions_1.Web3LoadError(e));
    }
    const state = yield effects_1.select();
    const auto_refresh = yield effects_1.call(backgroundContractLoad, state);
    try {
        while (true) {
            const time_to_update = yield effects_1.take(auto_refresh);
            yield effects_1.put(time_to_update);
        }
    }
    finally {
        auto_refresh.close();
    }
}
function* contractCall(action, tx, arg_signature) {
    return redux_saga_1.eventChannel((emit) => {
        tx.call(action.transactionArgs).then((result) => {
            emit(contracts_actions_1.ContractVarReceived(action.contractName, action.contractAddress, action.methodName, arg_signature, result));
            if (action.resolvers)
                action.resolvers.success(result);
        }).catch((error) => {
            emit(contracts_actions_1.ContractVarErrorReceived(action.contractName, action.contractAddress, action.methodName, arg_signature, error));
            if (action.resolvers)
                action.resolvers.error(error);
        });
        return (() => { });
    });
}
function* onContractCall(action) {
    action.contractAddress = action.contractAddress.toLowerCase();
    const contracts = (yield effects_1.select()).contracts;
    const current_contract = contracts[action.contractName][action.contractAddress].instance;
    const arg_signature = VortexContract_1.VortexContract.callSignature(...action.methodArgs);
    if (!current_contract.methods[action.methodName].vortexCache[arg_signature].synced) {
        const ctcall = yield effects_1.call(contractCall, action, current_contract.methods[action.methodName](...action.methodArgs), arg_signature);
        try {
            while (true) {
                const resolution = yield effects_1.take(ctcall);
                yield effects_1.put(resolution);
            }
        }
        finally {
            ctcall.close();
        }
    }
}
function* contractSend(action, tx) {
    let transaction_hash;
    let state = yield effects_1.select();
    return redux_saga_1.eventChannel((emit) => {
        const tx_events = tx.send(action.transactionArgs)
            .on('transactionHash', (_transaction_hash) => {
            transaction_hash = _transaction_hash;
            if (action.resolvers) {
                action.resolvers.success(_transaction_hash);
                action.resolvers = undefined;
            }
            emit(feed_actions_1.FeedNewTransaction(_transaction_hash));
            emit(tx_actions_1.TxBroadcasted(_transaction_hash));
        })
            .on('confirmation', (_amount, _receipt) => {
            emit(tx_actions_1.TxConfirmed(transaction_hash, _receipt, _amount));
        })
            .on('receipt', (_receipt) => {
            runForceRefreshRoundOn(state, emit, action.contractName, action.contractAddress);
            emit(tx_actions_1.TxReceipt(transaction_hash, _receipt));
            emit(redux_saga_1.END);
        })
            .on('error', (_error) => {
            if (transaction_hash === undefined) {
                transaction_hash = 'last';
            }
            if (action.resolvers) {
                action.resolvers.error(transaction_hash);
                action.resolvers = undefined;
            }
            emit(tx_actions_1.TxError(transaction_hash, _error));
            emit(redux_saga_1.END);
        });
        return (() => { tx_events.off(); });
    });
}
function* onContractSend(action) {
    action.contractAddress = action.contractAddress.toLowerCase();
    const contracts = (yield effects_1.select()).contracts;
    const current_contract = contracts[action.contractName][action.contractAddress].instance;
    const ctsend = yield effects_1.call(contractSend, action, current_contract.methods[action.methodName](...action.methodArgs));
    try {
        while (true) {
            const resolution = yield effects_1.take(ctsend);
            yield effects_1.put(resolution);
        }
    }
    finally {
        ctsend.close();
    }
}
function* ContractSagas() {
    yield effects_1.takeLatest('LOADED_WEB3', onLoadContractInitialize);
    yield effects_1.takeEvery('CONTRACT_CALL', onContractCall);
    yield effects_1.takeEvery('CONTRACT_SEND', onContractSend);
}
exports.ContractSagas = ContractSagas;
