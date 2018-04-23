declare var window: any;

import {
    Reducer,
    Store,
    compose,
    createStore,
    applyMiddleware,
    DeepPartial,
    combineReducers,
    ReducersMapObject
} from "redux";
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga';
import {FeedState, State} from './stateInterface';
import {reducers} from "./reducers";
import rootSaga from './sagas';

export function generateStore<T extends State = State>(contracts: any[], reducer: ReducersMapObject<T> = undefined, customState: DeepPartial<T> = undefined): Store {

    let composer = compose;
    if (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }

    let initialState = {
        contracts: {},
        tx: {},
        web3: {}
    } as DeepPartial<T>;

    (<any>initialState.web3) = {
        status: 'LOADING'
    };
    (<any>initialState.feed) = [] as FeedState[];

    for (let idx in contracts) {
        (<any>initialState.contracts[contracts[idx].contractName]) = {
            artifact: contracts[idx]
        };
    }

    let combinedInitialState = {
        ...(<object>customState),
        ...(<object>initialState)
    } as DeepPartial<T>;

    let combinedReducer: Reducer<T>;
    if (reducer) {
        reducer = {
            ...(<object>reducer),
            ...(<object>reducers)
        } as ReducersMapObject<T>;
    } else {
        reducer = reducers as ReducersMapObject<T>;
    }
    combinedReducer = combineReducers<T>(reducer);

    const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware<any>();

    const store: Store = createStore<T, any, any, any>(combinedReducer, combinedInitialState, composer(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga);

    return (store);
}