"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const web3_actions_1 = require("./web3.actions");
const redux_saga_1 = require("redux-saga");
const tx_actions_1 = require("../tx/tx.actions");
const vortex_1 = require("../vortex");
function* resolveWeb3(action) {
    const config = (yield effects_1.select()).contracts.config;
    return redux_saga_1.eventChannel((emit) => {
        action.loader.then((web3) => {
            web3.eth.vortexSendRawTransaction = (signedTx) => {
                let resolvers = {};
                let differed_return = new Promise((ok, ko) => {
                    resolvers.success = ok;
                    resolvers.error = ko;
                });
                vortex_1.Vortex.get().Store.dispatch(tx_actions_1.TxSendRaw(signedTx, web3, resolvers));
                return differed_return;
            };
            web3.eth.vortexSendTransaction = (txArgs) => {
                let resolvers = {};
                let differed_return = new Promise((ok, ko) => {
                    resolvers.success = ok;
                    resolvers.error = ko;
                });
                vortex_1.Vortex.get().Store.dispatch(tx_actions_1.TxSend(txArgs, web3, resolvers));
                return differed_return;
            };
            switch (config.type) {
                case 'manual':
                case 'truffle':
                    web3.eth.getCoinbase().then((coinbase) => {
                        if (!coinbase || coinbase === "") {
                            emit(web3_actions_1.Web3Locked());
                            emit(redux_saga_1.END);
                        }
                        else {
                            web3.eth.net.getId().then((network_id) => {
                                if ((action.networks) && (action.networks.length) && (action.networks.indexOf(network_id) === -1)) {
                                    emit(web3_actions_1.Web3NetworkError(network_id));
                                    emit(redux_saga_1.END);
                                }
                                else {
                                    emit(web3_actions_1.Web3Loaded(web3, network_id, coinbase));
                                    emit(redux_saga_1.END);
                                }
                            }).catch((reason) => {
                                emit(web3_actions_1.Web3LoadError(reason));
                                emit(redux_saga_1.END);
                            });
                        }
                    }).catch((reason) => {
                        emit(web3_actions_1.Web3LoadError(reason));
                        emit(redux_saga_1.END);
                    });
                    break;
                case 'embark':
                    web3.eth.getCoinbase().then((coinbase) => {
                        if (!coinbase || coinbase === "") {
                            emit(web3_actions_1.Web3Locked());
                            emit(redux_saga_1.END);
                        }
                        else {
                            web3.eth.getBlock(0).then((zero) => {
                                if (!config.config.chains[zero.hash]) {
                                    emit(web3_actions_1.Web3NetworkError(zero.hash));
                                    emit(redux_saga_1.END);
                                }
                                else {
                                    emit(web3_actions_1.Web3Loaded(web3, zero.hash, coinbase));
                                    emit(redux_saga_1.END);
                                }
                            }).catch((reason) => {
                                emit(web3_actions_1.Web3LoadError(reason));
                                emit(redux_saga_1.END);
                            });
                        }
                    }).catch((reason) => {
                        emit(web3_actions_1.Web3LoadError(reason));
                        emit(redux_saga_1.END);
                    });
                    break;
            }
        }).catch((reason) => {
            emit(web3_actions_1.Web3LoadError(reason));
            emit(redux_saga_1.END);
        });
        return (() => { });
    });
}
function* callResolveWeb3(action) {
    const web3 = yield effects_1.call(resolveWeb3, action);
    try {
        while (true) {
            const event = yield effects_1.take(web3);
            yield effects_1.put(event);
        }
    }
    finally {
        web3.close();
    }
}
function* Web3Sagas() {
    yield effects_1.takeLatest('LOAD_WEB3', callResolveWeb3);
}
exports.Web3Sagas = Web3Sagas;
