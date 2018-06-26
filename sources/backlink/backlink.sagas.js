"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const redux_saga_1 = require("redux-saga");
const __1 = require("../..");
const Web3 = require("web3");
const backlink_actions_1 = require("./backlink.actions");
const contracts_actions_1 = require("../contracts/contracts.actions");
const networkNames = {
    1: 'mainnet',
    3: 'ropsten',
    42: 'kovan',
    4: 'rinkeby'
};
function* updateManager(action, backlink) {
    return redux_saga_1.eventChannel((emit) => {
        let instance;
        action._.eth.net.getId().then((id) => {
            let url;
            url = backlink.config.url[id] || backlink.config.url[networkNames[id]];
            if (!url && backlink.config.url["default"]) {
                url = backlink.config.url["default"];
            }
            instance = new Web3(new Web3.providers.WebsocketProvider(url));
            emit(backlink_actions_1.BacklinkConnected(instance, url));
            try {
                instance.eth.subscribe('newBlockHeaders', (error, result) => {
                    if (error) {
                        emit(backlink_actions_1.BacklinkError(error));
                        emit(__1.FeedNewError(error, error.message, "[backlink.sagas.ts][updateManager] Error during run"));
                        emit(redux_saga_1.END);
                    }
                    else {
                        emit(backlink_actions_1.BacklinkNewBlockEvent(result));
                    }
                });
            }
            catch (e) {
                emit(backlink_actions_1.BacklinkError(e));
                emit(__1.FeedNewError(e, e.message, "[backlink.sagas.ts][updateManager] Error during run"));
                emit(redux_saga_1.END);
            }
        }).catch((e) => {
            emit(backlink_actions_1.BacklinkError(e));
            emit(__1.FeedNewError(e, e.message, "[backlink.sagas.ts][networkCheckLoading] Trying to initialize backlink"));
            emit(redux_saga_1.END);
        });
        return (() => {
            if (instance) {
                instance.eth.clearSubscriptions();
            }
        });
    });
}
function* onBacklinkInit(action) {
    const backlink = (yield effects_1.select()).backlink;
    switch (backlink.status) {
        default:
        case 'LOADING':
            try {
                const networkCheckChannel = yield effects_1.call(updateManager, action, backlink);
                try {
                    while (true) {
                        const event = yield effects_1.take(networkCheckChannel);
                        yield effects_1.put(event);
                    }
                }
                finally {
                    networkCheckChannel.close();
                }
            }
            catch (e) {
                console.error(e);
                yield effects_1.put(__1.FeedNewError(e, e.message, "[backlink.sagas.ts][onBacklinkInit] Trying to initialize backlink"));
            }
            break;
        case 'DISABLED':
            console.warn("[backlink.sagas.ts][onBacklinkInit] Disabled status for Backlink");
            return;
    }
}
function* onNewContract(action) {
    yield effects_1.put(backlink_actions_1.BacklinkCreateHook(action.contractAddress, false, true, (arg, dispatch) => {
        dispatch(contracts_actions_1.ContractCompleteRefresh(action.contractName, action.contractAddress));
    }));
}
function* onNewAccount(action) {
    yield effects_1.put(backlink_actions_1.BacklinkCreateHook(action.address, true, true, (arg, dispatch) => {
        dispatch(__1.AccountUpdateRequest(action.address));
    }));
}
function recursiveBackwardFetcher(web3, block, height, depth, emit, hooks, dispatch) {
    if (!Object.keys(hooks).length) {
        emit(redux_saga_1.END);
    }
    else if (!block) {
        web3.eth.getBlock(height, true)
            .then((_block) => {
            if (_block && _block.transactions) {
                recursiveBackwardFetcher(web3, _block, height, depth, emit, hooks, dispatch);
            }
            else if (depth && height >= 1) {
                recursiveBackwardFetcher(web3, null, height - 1, depth - 1, emit, hooks, dispatch);
            }
            else {
                const msg = "Unable to fetch Block";
                emit(__1.FeedNewError(new Error(msg), msg, "[backlink.sagas.ts][recursiveBackwardFetcher] Trying to fetch block"));
                emit(redux_saga_1.END);
            }
        })
            .catch((_error) => {
            if (depth && height >= 1) {
                recursiveBackwardFetcher(web3, null, height - 1, depth - 1, emit, hooks, dispatch);
            }
            else {
                emit(__1.FeedNewError(_error, _error.message, "[backlink.sagas.ts][recursiveBackwardFetcher] Trying to fetch block"));
                emit(redux_saga_1.END);
            }
        });
    }
    else {
        for (let tx_idx = 0; tx_idx < block.transactions.length; ++tx_idx) {
            let { from, to } = block.transactions[tx_idx];
            from = from.toLowerCase();
            to = to.toLowerCase();
            if (hooks[from] && hooks[from].length) {
                for (let from_idx = 0; from_idx < hooks[from].length; ++from_idx) {
                    if (hooks[from][from_idx].from) {
                        hooks[from][from_idx].trigger(block.transactions[tx_idx], dispatch);
                    }
                }
            }
            if (hooks[to] && hooks[to].length) {
                for (let to_idx = 0; to_idx < hooks[to].length; ++to_idx) {
                    if (hooks[to][to_idx].to) {
                        hooks[to][to_idx].trigger(block.transactions[tx_idx], dispatch);
                    }
                }
            }
        }
        emit(redux_saga_1.END);
    }
}
function* fetchBlockCallTriggers(height, dispatch) {
    const state = (yield effects_1.select());
    if (state.backlink.status === 'CONNECTED') {
        const instance = state.backlink.instance;
        return redux_saga_1.eventChannel((emit) => {
            recursiveBackwardFetcher(instance, null, height, 5, emit, state.backlink.hooks, dispatch);
            return (() => {
            });
        });
    }
    else {
        return undefined;
    }
}
function* onNewBlock(dispatch, action) {
    if (action.block.number) {
        const fetcher = yield effects_1.call(fetchBlockCallTriggers, action.block.number, dispatch);
        if (fetcher) {
            try {
                while (true) {
                    const event = yield effects_1.take(fetcher);
                    yield effects_1.put(event);
                }
            }
            finally {
                fetcher.close();
            }
        }
    }
}
function* BacklinkSagas(dispatch) {
    yield effects_1.takeLatest('LOADED_WEB3', onBacklinkInit);
    yield effects_1.takeEvery('CONTRACT_LOADED', onNewContract);
    yield effects_1.takeEvery('ACCOUNT_ADD', onNewAccount);
    const boundOnNewBlock = onNewBlock.bind(null, dispatch);
    yield effects_1.takeEvery('BACKLINK_NEW_BLOCK_EVENT', boundOnNewBlock);
}
exports.BacklinkSagas = BacklinkSagas;
