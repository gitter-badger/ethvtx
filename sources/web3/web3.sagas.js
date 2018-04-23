"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const redux_saga_1 = require("redux-saga");
// TODO check network id
// TODO take network id as arg in action
function* resolveWeb3(action) {
    return redux_saga_1.eventChannel((emit) => {
        action.loader.then((web3) => {
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
function* web3Sagas() {
    yield effects_1.takeLatest('LOAD_WEB3', callResolveWeb3);
}
exports.web3Sagas = web3Sagas;
