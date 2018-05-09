"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feed = (state = [], action) => {
    switch (action.type) {
        case 'FEED_NEW_TRANSACTION':
            state.push({
                action: 'NEW_TRANSACTION',
                transaction_hash: action.txHash,
                timestamp: Date.now()
            });
            return [
                ...state
            ];
        case 'FEED_NEW_CONTRACT':
            state.push({
                action: 'NEW_CONTRACT',
                contract_name: action.contractName,
                contract_address: action.address,
                timestamp: Date.now()
            });
            return [
                ...state
            ];
        case 'FEED_NEW_ERROR':
            console.warn("[Feed Error]: " + action.message + " => " + action.when);
            state.push({
                action: 'NEW_ERROR',
                error: {
                    reason: action.reason,
                    message: action.message,
                    when: action.when
                },
                timestamp: Date.now()
            });
            return [
                ...state
            ];
        case 'FEED_NEW_ACCOUNT':
            state.push({
                action: 'NEW_ACCOUNT',
                account: action.account,
                coinbase: action.coinbase,
                timestamp: Date.now()
            });
            return [
                ...state
            ];
        default:
            return state;
    }
};
