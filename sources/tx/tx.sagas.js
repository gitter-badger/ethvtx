"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const tx_actions_1 = require("./tx.actions");
const vortex_1 = require("../vortex");
const redux_saga_1 = require("redux-saga");
const feed_actions_1 = require("../feed/feed.actions");
function* sendTransaction(action) {
    let transaction_hash;
    return redux_saga_1.eventChannel((emit) => {
        let _transactionEvents = undefined;
        try {
            _transactionEvents = action.web3.eth.sendTransaction(action.txArgs)
                .on('transactionHash', (_transaction_hash) => {
                transaction_hash = _transaction_hash;
                if (action.resolvers) {
                    action.resolvers.success(_transaction_hash);
                    action.resolvers = undefined;
                }
                emit(feed_actions_1.FeedNewTransaction(_transaction_hash));
                emit(tx_actions_1.TxBroadcasted(_transaction_hash, action.txArgs));
            })
                .on('confirmation', (_amount, _receipt) => {
                emit(tx_actions_1.TxConfirmed(transaction_hash, _receipt, _amount));
            })
                .on('receipt', (_receipt) => {
                emit(tx_actions_1.TxReceipt(transaction_hash, _receipt));
                emit(redux_saga_1.END);
            })
                .on('error', (_error) => {
                if (transaction_hash === undefined) {
                    transaction_hash = 'last';
                }
                emit(tx_actions_1.TxError(transaction_hash, _error));
                emit(feed_actions_1.FeedNewError(_error, _error.message, "[tx.sagas.ts][sendTransaction] Trying to send a transaction."));
                if (action.resolvers) {
                    action.resolvers.success(transaction_hash);
                    action.resolvers = undefined;
                }
                emit(redux_saga_1.END);
            });
        }
        catch (reason) {
            if (transaction_hash === undefined) {
                transaction_hash = 'last';
            }
            vortex_1.Vortex.get().Store.dispatch(tx_actions_1.TxError(transaction_hash, reason));
            vortex_1.Vortex.get().Store.dispatch(feed_actions_1.FeedNewError(reason, reason.message, "[tx.sagas.ts][sendTransaction] Trying to send a transaction."));
            if (action.resolvers) {
                action.resolvers.error(transaction_hash);
                action.resolvers = undefined;
            }
            emit(redux_saga_1.END);
        }
        return () => {
            if (_transactionEvents)
                _transactionEvents.off();
        };
    });
}
function* callSendTransaction(action) {
    const tx = yield effects_1.call(sendTransaction, action);
    try {
        while (true) {
            const event = yield effects_1.take(tx);
            yield effects_1.put(event);
        }
    }
    finally {
        tx.close();
    }
}
function* sendRawTransaction(action) {
    let transaction_hash;
    return redux_saga_1.eventChannel((emit) => {
        let _transactionEvents = undefined;
        try {
            _transactionEvents = action.web3.eth.sendRawTransaction(action.signedTx)
                .on('transactionHash', (_transaction_hash) => {
                transaction_hash = _transaction_hash;
                if (action.resolvers) {
                    action.resolvers.success(_transaction_hash);
                    action.resolvers = undefined;
                }
                emit(feed_actions_1.FeedNewTransaction(_transaction_hash));
                emit(tx_actions_1.TxBroadcasted(_transaction_hash, { signed_transaction: action.signedTx }));
            })
                .on('confirmation', (_amount, _receipt) => {
                emit(tx_actions_1.TxConfirmed(transaction_hash, _receipt, _amount));
            })
                .on('receipt', (_receipt) => {
                emit(tx_actions_1.TxReceipt(transaction_hash, _receipt));
                emit(redux_saga_1.END);
            })
                .on('error', (_error) => {
                if (transaction_hash === undefined) {
                    transaction_hash = 'last';
                }
                emit(tx_actions_1.TxError(transaction_hash, _error));
                emit(feed_actions_1.FeedNewError(_error, _error.message, "[tx.sagas.ts][sendRawTransaction] Trying to send a raw transaction."));
                if (action.resolvers) {
                    action.resolvers.error(transaction_hash);
                    action.resolvers = undefined;
                }
                emit(redux_saga_1.END);
            });
        }
        catch (reason) {
            if (transaction_hash === undefined) {
                transaction_hash = 'last';
            }
            vortex_1.Vortex.get().Store.dispatch(tx_actions_1.TxError(transaction_hash, reason));
            vortex_1.Vortex.get().Store.dispatch(feed_actions_1.FeedNewError(reason, reason.message, "[tx.sagas.ts][sendRawTransaction] Trying to send a raw transaction."));
            if (action.resolvers) {
                action.resolvers.error(transaction_hash);
                action.resolvers = undefined;
            }
            emit(redux_saga_1.END);
        }
        return () => {
            if (_transactionEvents)
                _transactionEvents.off();
        };
    });
}
function* callSendRawTransaction(action) {
    const tx = yield effects_1.call(sendRawTransaction, action);
    try {
        while (true) {
            const event = yield effects_1.take(tx);
            yield effects_1.put(event);
        }
    }
    finally {
        tx.close();
    }
}
function* TxSagas() {
    yield effects_1.takeEvery('TX_SEND', callSendTransaction);
    yield effects_1.takeEvery('TX_SEND_RAW', callSendRawTransaction);
}
exports.TxSagas = TxSagas;
