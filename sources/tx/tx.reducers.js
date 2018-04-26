"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tx = (state = {}, action) => {
    switch (action.type) {
        case 'TX_BROADCASTED':
            return Object.assign({}, state, { [action.txHash]: {
                    type: 'BROADCASTED',
                    transaction_hash: action.txHash,
                    timestamp: Date.now()
                } });
        case 'TX_RECEIPT':
            return Object.assign({}, state, { [action.txHash]: {
                    type: 'RECEIPT',
                    transaction_hash: action.txHash,
                    transaction_receipt: action.receipt,
                    timestamp: Date.now()
                } });
        case 'TX_CONFIRMED':
            return Object.assign({}, state, { [action.txHash]: {
                    type: 'CONFIRMED',
                    transaction_hash: action.txHash,
                    transaction_receipt: action.confirmationReceipt,
                    transaction_confirmation_count: action.confirmationCount,
                    timestamp: Date.now()
                } });
        case 'TX_ERROR':
            return Object.assign({}, state, { [action.txHash]: {
                    type: 'ERROR',
                    transaction_hash: action.txHash,
                    error: action.error,
                    timestamp: Date.now()
                } });
        default:
            return state;
    }
};
