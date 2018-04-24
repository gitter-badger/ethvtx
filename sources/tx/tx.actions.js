"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function TxBroadcasted(txHash) {
    return ({
        type: 'TX_BROADCASTED',
        txHash
    });
}
exports.TxBroadcasted = TxBroadcasted;
function TxReceipt(txHash, receipt) {
    return ({
        type: 'TX_RECEIPT',
        txHash,
        receipt
    });
}
exports.TxReceipt = TxReceipt;
function TxConfirmed(txHash, confirmationReceipt) {
    return ({
        type: 'TX_CONFIRMED',
        txHash,
        confirmationReceipt
    });
}
exports.TxConfirmed = TxConfirmed;
function TxError(txHash, error) {
    return ({
        type: 'TX_ERROR',
        txHash,
        error
    });
}
exports.TxError = TxError;
