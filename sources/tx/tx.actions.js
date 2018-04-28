"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function TxSendRaw(signedTx, web3, resolvers) {
    return {
        type: 'TX_SEND_RAW',
        signedTx,
        web3,
        resolvers
    };
}
exports.TxSendRaw = TxSendRaw;
function TxSend(txArgs, web3, resolvers) {
    return {
        type: 'TX_SEND',
        txArgs,
        web3,
        resolvers
    };
}
exports.TxSend = TxSend;
function TxBroadcasted(txHash, txArgs) {
    return ({
        type: 'TX_BROADCASTED',
        txHash,
        txArgs
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
function TxConfirmed(txHash, confirmationReceipt, confirmationCount) {
    return ({
        type: 'TX_CONFIRMED',
        txHash,
        confirmationReceipt,
        confirmationCount
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
