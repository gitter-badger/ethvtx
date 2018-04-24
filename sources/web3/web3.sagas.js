"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const redux_saga_1 = require("redux-saga");
const vortex_1 = require("../vortex");
// TODO check network id
// TODO take network id as arg in action
function* resolveWeb3(action) {
    return redux_saga_1.eventChannel((emit) => {
        action.loader.then((web3) => {
            web3.eth.vortexSendTransaction = (txArgs) => {
                let resolvers = {};
                let differed_return = new Promise((ok, ko) => {
                    resolvers.success = ok;
                    resolvers.error = ko;
                });
                vortex_1.Vortex.get().Store.dispatch({
                    type: 'TX_SEND',
                    txArgs,
                    web3,
                    resolvers
                });
                return differed_return;
            };
            emit({ type: 'LOADED_WEB3',
                _: web3,
                networkId: 0 });
            emit(redux_saga_1.END);
        }).catch((reason) => {
            emit({ type: 'LOAD_ERROR_WEB3',
                error: reason });
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
