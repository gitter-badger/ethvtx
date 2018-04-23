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
