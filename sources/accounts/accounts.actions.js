"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAdd = (address, coinbase = false) => {
    return {
        type: 'ACCOUNT_ADD',
        address,
        coinbase
    };
};
exports.AccountRemove = (address) => {
    return {
        type: 'ACCOUNT_REMOVE',
        address
    };
};
exports.AccountUpdate = (address, balance, coinbase = false) => {
    return {
        type: 'ACCOUNT_UPDATE',
        address,
        balance,
        coinbase
    };
};
exports.AccountError = (address, error) => {
    return {
        type: 'ACCOUNT_ERROR',
        address: address.toLowerCase(),
        error
    };
};
exports.AccountConfig = (config) => {
    return Object.assign({}, config, { type: 'ACCOUNT_CONFIG' });
};
exports.AccountUpdateRequest = (address) => {
    return {
        type: 'ACCOUNT_UPDATE_REQUEST',
        address: address.toLowerCase()
    };
};
