"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const redux_saga_1 = require("redux-saga");
const accounts_actions_1 = require("./accounts.actions");
const feed_actions_1 = require("../feed/feed.actions");
const vortex_1 = require("../vortex");
let running = false;
function fetchAccount(address, coinbase, emit) {
    return new Promise((ok, ko) => {
        vortex_1.Vortex.get().Store.getState().web3._.eth.getBalance(address).then((balance) => {
            emit(accounts_actions_1.AccountUpdate(address, balance, coinbase));
            ok();
        }).catch((e) => {
            ko(e);
        });
    });
}
function loopOnAccounts(emit) {
    return new Promise((ok, ko) => {
        const refresh_rate = vortex_1.Vortex.get().Store.getState().accounts.configuration.refresh_rate;
        const accounts = vortex_1.Vortex.get().Store.getState().accounts;
        setTimeout(() => {
            Object.keys(accounts).filter((elem) => (elem !== 'coinbase' && elem !== 'configuration')).forEach((address) => {
                fetchAccount(address, !!accounts[address].coinbase, emit)
                    .then(() => {
                })
                    .catch((e) => {
                    emit(accounts_actions_1.AccountError(address, e));
                    emit(feed_actions_1.FeedNewError(e, e.message, "[accounts.sagas.ts][loopOnAccounts] Trying to fetch accounts.md informations."));
                    ko(e);
                });
            });
            if (running)
                loopOnAccounts(emit).catch((e) => {
                    emit(feed_actions_1.FeedNewError(e, e.message, "[accounts.sagas.ts][loopOnAccounts] Trying to fetch accounts.md informations."));
                    ko(e);
                });
        }, refresh_rate);
    });
}
function* refreshLoop() {
    return redux_saga_1.eventChannel((emit) => {
        running = true;
        loopOnAccounts(emit).catch((e) => {
            emit(feed_actions_1.FeedNewError(e, e.message, "[accounts.sagas.ts][loopOnAccounts] Trying to fetch accounts.md informations."));
            emit(redux_saga_1.END);
        });
        return (() => {
            running = false;
        });
    });
}
function* onAccountInit() {
    const coinbase = (yield effects_1.select()).web3.coinbase;
    yield effects_1.put(accounts_actions_1.AccountAdd(coinbase, true));
    const refresh_loop = yield effects_1.call(refreshLoop);
    try {
        while (true) {
            const event = yield effects_1.take(refresh_loop);
            yield effects_1.put(event);
        }
    }
    finally {
        refresh_loop.close();
    }
}
function* singleFetch(action, new_address, coinbase) {
    return redux_saga_1.eventChannel((emit) => {
        fetchAccount(action.address, coinbase, emit).then(() => {
            if (new_address) {
                emit(feed_actions_1.FeedNewAccount(action.address, coinbase));
            }
            emit(redux_saga_1.END);
        }).catch((e) => {
            emit(accounts_actions_1.AccountError(action.address, e));
            emit(feed_actions_1.FeedNewError(e, e.message, "[accounts.sagas.ts][singleFetch] Trying to fetch accounts.md informations."));
            emit(redux_saga_1.END);
        });
        return (() => {
        });
    });
}
function* onAccountAdd(action) {
    const add = yield effects_1.call(singleFetch, action, true, action.coinbase);
    try {
        while (true) {
            const event = yield effects_1.take(add);
            yield effects_1.put(event);
        }
    }
    finally {
        add.close();
    }
}
function* onUpdateRequest(action) {
    const accounts = (yield effects_1.select()).accounts;
    if (accounts[action.address]) {
        const add = yield effects_1.call(singleFetch, action, false, !!accounts[action.address].coinbase);
        try {
            while (true) {
                const event = yield effects_1.take(add);
                yield effects_1.put(event);
            }
        }
        finally {
            add.close();
        }
    }
}
function* AccountSagas() {
    yield effects_1.takeLatest('LOADED_WEB3', onAccountInit);
    yield effects_1.takeEvery('ACCOUNT_ADD', onAccountAdd);
    yield effects_1.takeEvery('ACCOUNT_UPDATE_REQUEST', onUpdateRequest);
}
exports.AccountSagas = AccountSagas;
