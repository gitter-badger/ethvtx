"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_saga_1 = require("redux-saga");
const reducers_1 = require("./reducers");
const sagas_1 = require("./sagas");
function generateStore(contracts, reducer = undefined, customState = undefined) {
    let composer = redux_1.compose;
    if (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    let initialState = {
        contracts: {},
        tx: {},
        web3: {}
    };
    initialState.web3 = {
        status: 'LOADING'
    };
    initialState.feed = [];
    for (let idx in contracts) {
        initialState.contracts[contracts[idx].contractName] = {
            artifact: contracts[idx]
        };
    }
    let combinedInitialState = Object.assign({}, customState, initialState);
    let combinedReducer;
    if (reducer) {
        reducer = Object.assign({}, reducer, reducers_1.reducers);
    }
    else {
        reducer = reducers_1.reducers;
    }
    combinedReducer = redux_1.combineReducers(reducer);
    const sagaMiddleware = redux_saga_1.default();
    const store = redux_1.createStore(combinedReducer, combinedInitialState, composer(redux_1.applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(sagas_1.default);
    return (store);
}
exports.generateStore = generateStore;
