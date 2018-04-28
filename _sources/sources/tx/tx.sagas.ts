import {call, put, take, takeEvery} from 'redux-saga/effects';
import {
    TxBroadcasted,
    TxBroadcastedAction, TxConfirmed,
    TxConfirmedAction, TxError,
    TxErrorAction, TxReceipt,
    TxReceiptAction,
    TxSendAction,
    TxSendRawAction
} from "./tx.actions";
import {SagaIterator, eventChannel, END} from "redux-saga";
import {Unsubscribe} from "redux";
import {FeedNewError, FeedNewTransaction, FeedNewTransactionAction} from "../feed/feed.actions";


function* sendTransaction(action: TxSendAction): SagaIterator {
    let transaction_hash: string;


    return eventChannel((emit: (arg?: any) => void): Unsubscribe => {
        const _transactionEvents = action.web3.eth.sendTransaction(action.txArgs)
            .on('transactionHash', (_transaction_hash: string): void => {
                transaction_hash = _transaction_hash;
                if (action.resolvers) {
                    action.resolvers.success(_transaction_hash);
                    action.resolvers = undefined;
                }
                emit(FeedNewTransaction(_transaction_hash));
                emit(TxBroadcasted(_transaction_hash));
            })
            .on('confirmation', (_amount: number, _receipt: any): void => {
                emit(TxConfirmed(transaction_hash, _receipt, _amount))
            })
            .on('receipt', (_receipt: any): void => {
                emit(TxReceipt(transaction_hash, _receipt));
                emit(END);
            })
            .on('error', (_error: any): void => {
                if (transaction_hash === undefined) {
                    transaction_hash = 'last';
                }
                if (action.resolvers) {
                    action.resolvers.error(transaction_hash);
                    action.resolvers = undefined;
                }
                emit(TxError(transaction_hash, _error));
                emit(FeedNewError(_error, _error.message, "[tx.sagas.ts][sendTransaction] Trying to send a transaction."));
                emit(END);
            });

        return (): void => {
            _transactionEvents.off();
        }
    });
}

function* callSendTransaction(action: TxSendAction): SagaIterator {
    const tx = yield call(sendTransaction, action);
    try {
        while (true) {
            const event = yield take(tx);
            yield put(event);
        }
    } finally {
        tx.close();
    }
}

function* sendRawTransaction(action: TxSendRawAction): SagaIterator {
    let transaction_hash: string;


    return eventChannel((emit: (arg?: any) => void): Unsubscribe => {
        const _transactionEvents = action.web3.eth.sendRawTransaction(action.signedTx)
            .on('transactionHash', (_transaction_hash: string): void => {
                transaction_hash = _transaction_hash;
                if (action.resolvers) {
                    action.resolvers.success(_transaction_hash);
                    action.resolvers = undefined;
                }
                emit(FeedNewTransaction(_transaction_hash));
                emit(TxBroadcasted(_transaction_hash));
            })
            .on('confirmation', (_amount: number, _receipt: any): void => {
                emit(TxConfirmed(transaction_hash, _receipt, _amount));
            })
            .on('receipt', (_receipt: any): void => {
                emit(TxReceipt(transaction_hash, _receipt));
                emit(END);
            })
            .on('error', (_error: any): void => {
                if (transaction_hash === undefined) {
                    transaction_hash = 'last';
                }
                if (action.resolvers) {
                    action.resolvers.error(transaction_hash);
                    action.resolvers = undefined;
                }
                emit(TxError(transaction_hash, _error));
                emit(FeedNewError(_error, _error.message, "[tx.sagas.ts][sendRawTransaction] Trying to send a raw transaction."));
                emit(END);
            });

        return (): void => {
            _transactionEvents.off();
        }
    });
}

function* callSendRawTransaction(action: TxSendRawAction): SagaIterator {
    const tx = yield call(sendRawTransaction, action);
    try {
        while (true) {
            const event = yield take(tx);
            yield put(event);
        }
    } finally {
        tx.close();
    }
}
export function* TxSagas(): any {
    yield takeEvery('TX_SEND', callSendTransaction);
    yield takeEvery('TX_SEND_RAW', callSendRawTransaction);
}
