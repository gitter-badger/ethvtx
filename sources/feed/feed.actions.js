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
function FeedNewAccount(account, coinbase) {
    return {
        type: 'FEED_NEW_ACCOUNT',
        account,
        coinbase
    };
}
exports.FeedNewAccount = FeedNewAccount;
function FeedNewIPFSContent(ipfs_hash) {
    return {
        type: 'FEED_NEW_IPFS_CONTENT',
        ipfs_hash
    };
}
exports.FeedNewIPFSContent = FeedNewIPFSContent;
