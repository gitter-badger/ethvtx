"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IPFSLoadedReducer = (state, action) => {
    return Object.assign({}, state, { [action.hash]: {
            content: action.content
        } });
};
const IPFSErrorReducer = (state, action) => {
    return Object.assign({}, state, { [action.hash]: {
            error: action.reason
        } });
};
const IPFSConnectReducer = (state, action) => {
    return Object.assign({}, state, { config: Object.assign({}, state.config, { instance: action.instance, active: true }) });
};
exports.ipfs = (state = {}, action) => {
    switch (action.type) {
        case 'IPFS_LOADED':
            return IPFSLoadedReducer(state, action);
        case 'IPFS_ERROR':
            return IPFSErrorReducer(state, action);
        case 'IPFS_CONNECT':
            return IPFSConnectReducer(state, action);
        default:
            return state;
    }
};
