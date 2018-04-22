declare var window: any;

import {Reducer, Store, compose, createStore, applyMiddleware, DeepPartial} from "redux";
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga';
import {State, Web3State} from './stateInterface';

export function generateStore<T extends State = State>(contracts: any[], reducer: Reducer<T> = undefined, customState: DeepPartial<T> = undefined): Store {

    let composer = compose;
    if (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }

    let initialState = {
        contracts: {},
        web3: {}
    } as DeepPartial<T>;

    (<any>initialState.web3).initialized = false;

    for (let idx in contracts) {
        (<any>initialState.contracts[contracts[idx].contractName]) = {
            artifact: contracts[idx]
        };
    }

    let combinedInitialState = {
        ...(<object>customState),
        ...(<object>initialState)
    } as DeepPartial<T>;

    //const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware<any>();

    const store: Store = createStore<T, any, any, any>(reducer, combinedInitialState);

    return (store);
}