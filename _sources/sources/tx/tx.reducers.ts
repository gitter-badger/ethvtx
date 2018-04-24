import {Reducer} from "redux";
import {
    TransactionBroadcastedState,
    TransactionConfirmedState, TransactionErrorState,
    TransactionReceiptState,
    TransactionStoreState
} from "../stateInterface";
import {TxActions, TxBroadcastedAction, TxConfirmedAction, TxErrorAction, TxReceiptAction} from "./tx.actions";

export const tx: Reducer<TransactionStoreState, TxActions> = (state: TransactionStoreState = {} as TransactionStoreState, action: TxActions): TransactionStoreState => {

    switch (action.type) {

        case 'TX_BROADCASTED':
            return {
                ...state,
                [(<TxBroadcastedAction>action).txHash]: {
                    type: 'BROADCASTED',
                    transaction_hash: (<TxBroadcastedAction>action).txHash,
                    timestamp: Date.now()
                } as TransactionBroadcastedState
            };

        case 'TX_RECEIPT':
            return {
                ...state,
                [(<TxReceiptAction>action).txHash]: {
                    type: 'RECEIPT',
                    transaction_hash: (<TxReceiptAction>action).txHash,
                    transaction_receipt: (<TxReceiptAction>action).receipt,
                    timestamp: Date.now()
                } as TransactionReceiptState
            };

        case 'TX_CONFIRMED':
            return {
                ...state,
                [(<TxConfirmedAction>action).txHash]: {
                    type: 'CONFIRMED',
                    transaction_hash: (<TxConfirmedAction>action).txHash,
                    transaction_receipt: (<TxConfirmedAction>action).confirmationReceipt,
                    transaction_confirmation_count: (<TxConfirmedAction>action).confirmationCount,
                    timestamp: Date.now()
                } as TransactionConfirmedState
            };

        case 'TX_ERROR':
            return {
                ...state,
                [(<TxErrorAction>action).txHash]: {
                    type: 'ERROR',
                    transaction_hash: (<TxErrorAction>action).txHash,
                    error: (<TxErrorAction>action).error,
                    timestamp: Date.now()
                } as TransactionErrorState
            };

        default:
            return state;

    }

};