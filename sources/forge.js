"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_saga_1 = require("redux-saga");
const reducers_1 = require("./reducers");
const sagas_1 = require("./sagas");
function forge(contracts, config = undefined) {
    let composer = redux_1.compose;
    if (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    let initialState = {
        contracts: {},
        tx: {},
        web3: {},
        accounts: {},
        ipfs: {},
        backlink: {}
    };
    initialState.web3 = {
        status: 'LOADING'
    };
    initialState.accounts.configuration = {
        refresh_rate: config ? (config.account_refresh_rate || 5000) : 5000
    };
    initialState.feed = [];
    if (config && config.backlink_config) {
        initialState.backlink = {
            config: config.backlink_config,
            status: 'LOADING',
            hooks: {}
        };
    }
    else {
        initialState.backlink = {
            status: 'DISABLED'
        };
    }
    initialState.ipfs.config = {
        config: config ? (config.ipfs_config || undefined) : undefined,
        active: false
    };
    switch (contracts.type) {
        case 'truffle':
            const truffle_contracts = contracts;
            for (let idx in truffle_contracts.truffle_contracts) {
                (initialState.contracts[truffle_contracts.truffle_contracts[idx].contractName]) = {
                    artifact: {
                        abi: truffle_contracts.truffle_contracts[idx].abi,
                        bytecode: truffle_contracts.truffle_contracts[idx].deployedBytecode,
                        name: truffle_contracts.truffle_contracts[idx].contractName
                    }
                };
            }
            (initialState.contracts).config = {
                type: "truffle",
                config: {
                    preloaded_contracts: truffle_contracts.preloaded_contracts,
                    contracts: truffle_contracts.truffle_contracts
                }
            };
            break;
        case 'embark':
            const embark_contracts = contracts;
            for (let idx in Object.keys(embark_contracts.embark_contracts)) {
                (initialState.contracts[Object.keys(embark_contracts.embark_contracts)[idx]]) = {
                    artifact: {
                        abi: embark_contracts.embark_contracts[Object.keys(embark_contracts.embark_contracts)[idx]].options.jsonInterface,
                        bytecode: embark_contracts.embark_contracts[Object.keys(embark_contracts.embark_contracts)[idx]].options.data,
                        name: Object.keys(embark_contracts.embark_contracts)[idx]
                    }
                };
            }
            (initialState.contracts).config = {
                type: "embark",
                config: {
                    preloaded_contracts: embark_contracts.preloaded_contracts,
                    chains: embark_contracts.chains
                }
            };
            break;
        case 'manual':
            const manual_contract = contracts;
            for (let idx in Object.keys(manual_contract.manual_contracts)) {
                (initialState.contracts[Object.keys(manual_contract.manual_contracts)[idx]]) = {
                    artifact: {
                        abi: manual_contract.manual_contracts[Object.keys(manual_contract.manual_contracts)[idx]].abi,
                        bytecode: manual_contract.manual_contracts[Object.keys(manual_contract.manual_contracts)[idx]].deployed_bytecode,
                        name: Object.keys(manual_contract.manual_contracts)[idx]
                    }
                };
            }
            (initialState.contracts).config = {
                type: 'manual',
                config: {
                    contracts: manual_contract.manual_contracts
                }
            };
            break;
        default:
            throw new Error("Unknown Ethereum Framework");
    }
    let combinedInitialState = Object.assign({}, (config ? config.custom_state : {}), initialState);
    let combinedReducer;
    if (config && config.reducer) {
        config.reducer = Object.assign({}, config.reducer, reducers_1.reducers);
    }
    else {
        if (!config)
            config = {};
        config.reducer = reducers_1.reducers;
    }
    combinedReducer = redux_1.combineReducers(config.reducer);
    const sagaMiddleware = redux_saga_1.default();
    const store = redux_1.createStore(combinedReducer, combinedInitialState, composer(redux_1.applyMiddleware(sagaMiddleware)));
    if (config && config.custom_sagas)
        sagaMiddleware.run(sagas_1.rootSagaBuilder(...config.custom_sagas), store.dispatch);
    else
        sagaMiddleware.run(sagas_1.rootSagaBuilder(), store.dispatch);
    return (store);
}
exports.forge = forge;
