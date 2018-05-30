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
    AccountStoreState, ContractArtifactState,
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

export interface Contracts {
    type: string;
}

export interface EmbarkContracts extends Contracts {
    chains: any,
    contracts: any,
    preloaded_contracts: string[]
}

export interface TruffleContracts extends Contracts {
    contracts: any[]
    preloaded_contracts: string[]
}

export function forge<T extends State = State>(contracts: EmbarkContracts | TruffleContracts, config: GeneratorConfig<T> = undefined): Store {

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

    switch (contracts.type) {
        case 'truffle':
            const truffle_contracts: TruffleContracts = <TruffleContracts>contracts;
            for (let idx in truffle_contracts.contracts) {
                ((<ContractArtifactState>(<any>initialState).contracts)[truffle_contracts.contracts[idx].contractName]) = {
                    artifact: {
                        abi: truffle_contracts.contracts[idx].abi,
                        bytecode: truffle_contracts.contracts[idx].deployedBytecode,
                        name: truffle_contracts.contracts[idx].contractName
                    }
                };
            }

            ((<any>initialState).contracts).config = {
                type: "truffle",
                config: {
                    preloaded_contracts: truffle_contracts.preloaded_contracts,
                    contracts: truffle_contracts.contracts
                }
            };

            break ;
        case 'embark':
            const embark_contracts: EmbarkContracts = <EmbarkContracts>contracts;
            for (let idx in Object.keys(embark_contracts.contracts)) {
                ((<ContractArtifactState>(<any>initialState).contracts)[Object.keys(embark_contracts.contracts)[idx]]) = {
                    artifact: {
                        abi: embark_contracts.contracts[Object.keys(embark_contracts.contracts)[idx]].options.jsonInterface,
                        bytecode: embark_contracts.contracts[Object.keys(embark_contracts.contracts)[idx]].options.data,
                        name: Object.keys(embark_contracts.contracts)[idx]
                    }
                };
            }

            ((<any>initialState).contracts).config = {
                type: "embark",
                config: {
                    preloaded_contracts: embark_contracts.preloaded_contracts,
                    chains: embark_contracts.chains
                }
            };

            break ;
        default:
            throw new Error("Unknown Ethereum Framework");
    }

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
