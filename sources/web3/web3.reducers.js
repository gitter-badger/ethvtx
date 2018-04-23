"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.web3 = (state = { status: 'LOADING' }, action) => {
    switch (action.type) {
        case 'LOAD_WEB3':
            return ({
                status: 'LOADING'
            });
        case 'LOADED_WEB3':
            return (Object.assign({}, state, { status: 'LOADED', network_id: action.networkId, _: action._ }));
        case 'LOAD_ERROR_WEB3':
            return (Object.assign({}, state, { status: 'LOAD_ERROR', error: action.error }));
        case 'NETWORK_ERROR_WEB3':
            return (Object.assign({}, state, { status: 'NETWORK_ERROR', network_id: action.networkId }));
        default:
            return state;
    }
};
