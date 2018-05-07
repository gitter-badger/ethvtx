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
import {
    AccountConfigState,
    AccountStoreState,
    ContractStoreState,
    FeedState,
    State,
    Web3LoadingState
} from './stateInterface';
import {reducers} from "./reducers";
import rootSaga from './sagas';

export interface GeneratorConfig<T> {
    reducer?: ReducersMapObject<T>,
    custom_state?: DeepPartial<T>,
    account_refresh_rate?: number
}

export function generateStore<T extends State = State>(contracts: any[], config: GeneratorConfig<T> = undefined): Store {

    let composer = compose;
    if (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }

    let initialState = {
        contracts: {},
        tx: {},
        web3: {},
        accounts: {}
    } as DeepPartial<T>;

    (<Web3LoadingState>(<any>initialState).web3) = {
        status: 'LOADING'
    };

    (<AccountConfigState>(<AccountStoreState>(<any>initialState).accounts).configuration) = {
        refresh_rate: config ? (config.account_refresh_rate || 5000) : 5000
    };

    (<FeedState[]>(<any>initialState).feed) = [] as FeedState[];

    for (let idx in contracts) {
        ((<ContractStoreState>(<any>initialState).contracts)[contracts[idx].contractName]) = {
            artifact: contracts[idx]
        };
    }

    let combinedInitialState = {
        ...(<object>(config ? config.custom_state : {})),
        ...(<object>initialState)
    } as DeepPartial<T>;

    let combinedReducer: Reducer<T>;
    if (config && config.reducer) {
        config.reducer = {
            ...(<object>config.reducer),
            ...(<object>reducers)
        } as ReducersMapObject<T>;
    } else {
        if (!config)
            config = {};
        config.reducer = reducers as ReducersMapObject<T>;
    }
    combinedReducer = combineReducers<T>(config.reducer);

    const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware<any>();

    const store: Store<T> = createStore<T, any, any, any>(combinedReducer, combinedInitialState, composer(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga);

    return (store);
}
