"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
function generateStore(contracts, reducer = undefined, customState = undefined) {
    let composer = redux_1.compose;
    if (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    let initialState = {
        contracts: {},
        web3: {}
    };
    initialState.web3.initialized = false;
    for (let idx in contracts) {
        initialState.contracts[contracts[idx].contractName] = {
            artifact: contracts[idx]
        };
    }
    let combinedInitialState = Object.assign({}, customState, initialState);
    //const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware<any>();
    const store = redux_1.createStore(reducer, combinedInitialState);
    return (store);
}
exports.generateStore = generateStore;
