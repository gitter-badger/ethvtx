"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FeedNewTransaction(txHash) {
    return ({
        type: 'FEED_NEW_TRANSACTION',
        txHash
    });
}
exports.FeedNewTransaction = FeedNewTransaction;
function FeedNewContract(contractName, address) {
    return ({
        type: 'FEED_NEW_CONTRACT',
        contractName,
        address
    });
}
exports.FeedNewContract = FeedNewContract;
function FeedNewError(reason, message, when) {
    return {
        type: 'FEED_NEW_ERROR',
        reason,
        message,
        when
    };
}
exports.FeedNewError = FeedNewError;
