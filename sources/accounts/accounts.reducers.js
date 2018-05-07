"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AccountRemoveReducer = (state, action) => {
    delete state[action.address];
    return Object.assign({}, state);
};
const AccountUpdateReducer = (state, action) => {
    if ((state[action.address] && state[action.address].coinbase) || action.coinbase)
        return Object.assign({}, state, { [action.address]: Object.assign({}, state[action.address], { balance: action.balance, coinbase: true }), coinbase: Object.assign({}, state.coinbase, { balance: action.balance, coinbase: true }) });
    return Object.assign({}, state, { [action.address]: Object.assign({}, state[action.address], { balance: action.balance, coinbase: action.coinbase }) });
};
const AccountConfigReducer = (state, action) => {
    const inserter = {
        refresh_rate: action.refresh_rate
    };
    return Object.assign({}, state, { configuration: Object.assign({}, state.configuration, inserter) });
};
const AccountErrorReducer = (state, action) => {
    if (state[action.address] && state[action.address].coinbase)
        return Object.assign({}, state, { [action.address]: Object.assign({}, state[action.address], { error: action.error }), coinbase: Object.assign({}, state.coinbase, { error: action.error }) });
    return Object.assign({}, state, { [action.address]: Object.assign({}, state[action.address], { error: action.error }) });
};
exports.accounts = (state = {}, action) => {
    switch (action.type) {
        case 'ACCOUNT_REMOVE':
            return AccountRemoveReducer(state, action);
        case 'ACCOUNT_UPDATE':
            return AccountUpdateReducer(state, action);
        case 'ACCOUNT_CONFIG':
            return AccountConfigReducer(state, action);
        case 'ACCOUNT_ERROR':
            return AccountErrorReducer(state, action);
        default:
            return state;
    }
};
