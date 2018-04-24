import {all, call, fork, put, take, takeEvery} from 'redux-saga/effects';
import {
    TxBroadcastedAction,
    TxConfirmedAction,
    TxErrorAction,
    TxReceiptAction,
    TxSendAction,
    TxSendRawAction
} from "./tx.actions";
import {SagaIterator, eventChannel, END} from "redux-saga";
import {Unsubscribe} from "redux";
import {State, Web3LoadedState, Web3State} from "../stateInterface";
import {FeedNewTransactionAction} from "../feed/feed.actions";


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
                emit({
                    type: 'FEED_NEW_TRANSACTION',
                    txHash: _transaction_hash
                } as FeedNewTransactionAction);
                emit({
                    type: 'TX_BROADCASTED',
                    txHash: _transaction_hash
                } as TxBroadcastedAction);
            })
            .on('confirmation', (_amount: number, _receipt: any): void => {
                emit({
                    type: 'TX_CONFIRMED',
                    txHash: transaction_hash,
                    confirmationReceipt: _receipt,
                    confirmationCount: _amount
                } as TxConfirmedAction);
            })
            .on('receipt', (_receipt: any): void => {
                emit({
                    type: 'TX_RECEIPT',
                    txHash: transaction_hash,
                    receipt: _receipt
                } as TxReceiptAction)
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
                emit({
                    type: 'TX_ERROR',
                    txHash: transaction_hash,
                    error: _error
                } as TxErrorAction);
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
                emit({
                    type: 'FEED_NEW_TRANSACTION',
                    txHash: _transaction_hash
                } as FeedNewTransactionAction);
                emit({
                    type: 'TX_BROADCASTED',
                    txHash: _transaction_hash
                } as TxBroadcastedAction);
            })
            .on('confirmation', (_amount: number, _receipt: any): void => {
                emit({
                    type: 'TX_CONFIRMED',
                    txHash: transaction_hash,
                    confirmationReceipt: _receipt,
                    confirmationCount: _amount
                } as TxConfirmedAction);
            })
            .on('receipt', (_receipt: any): void => {
                emit({
                    type: 'TX_RECEIPT',
                    txHash: transaction_hash,
                    receipt: _receipt
                } as TxReceiptAction)
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
                emit({
                    type: 'TX_ERROR',
                    txHash: transaction_hash,
                    error: _error
                } as TxErrorAction);
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
