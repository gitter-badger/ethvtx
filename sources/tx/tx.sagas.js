"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const redux_saga_1 = require("redux-saga");
function* sendTransaction(action) {
    let transaction_hash;
    return redux_saga_1.eventChannel((emit) => {
        const _transactionEvents = action.web3.eth.sendTransaction(action.txArgs)
            .on('transactionHash', (_transaction_hash) => {
            transaction_hash = _transaction_hash;
            if (action.resolvers) {
                action.resolvers.success(_transaction_hash);
                action.resolvers = undefined;
            }
            emit({
                type: 'FEED_NEW_TRANSACTION',
                txHash: _transaction_hash
            });
            emit({
                type: 'TX_BROADCASTED',
                txHash: _transaction_hash
            });
        })
            .on('receipt', (_receipt) => {
            emit({
                type: 'TX_RECEIPT',
                txHash: transaction_hash,
                receipt: _receipt
            });
        })
            .on('confirmation', (_amount, _receipt) => {
            emit({
                type: 'TX_CONFIRMED',
                txHash: transaction_hash,
                confirmationReceipt: _receipt
            });
            emit(redux_saga_1.END);
        })
            .on('error', (_error) => {
            if (transaction_hash === undefined) {
                transaction_hash = 'last';
            }
            if (action.resolvers) {
                action.resolvers.error(transaction_hash);
                action.resolvers = undefined;
            }
            emit({
                type: 'TX_ERROR',
                txHash: transaction_hash,
                error: _error
            });
            emit(redux_saga_1.END);
        });
        return () => {
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
function* TxSagas() {
    yield effects_1.takeEvery('TX_SEND', callSendTransaction);
}
exports.TxSagas = TxSagas;
