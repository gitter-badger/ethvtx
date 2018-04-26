"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contractLoadingReducer = (state, action) => {
    return Object.assign({}, state, { [action.contractName]: Object.assign({}, state[action.contractName], { [action.contractAddress.toLowerCase()]: Object.assign({}, state[action.contractName][action.contractAddress.toLowerCase()], { status: 'LOADING', instance: undefined, error: undefined }) }) });
};
const contractLoadedReducer = (state, action) => {
    return Object.assign({}, state, { [action.contractName]: Object.assign({}, state[action.contractName], { [action.contractAddress.toLowerCase()]: Object.assign({}, state[action.contractName][action.contractAddress.toLowerCase()], { status: 'LOADED', instance: action.contractInstance, error: undefined }) }) });
};
const contractErrorReducer = (state, action) => {
    return Object.assign({}, state, { [action.contractName]: Object.assign({}, state[action.contractName], { [action.contractAddress.toLowerCase()]: Object.assign({}, state[action.contractName][action.contractAddress.toLowerCase()], { status: 'ERROR', error: action.error }) }) });
};
const contractVarReceivedReducer = (state, action) => {
    state[action.contractName][action.contractAddress.toLowerCase()].instance.methods[action.methodName].vortexCache[action.methodHash] = {
        data: action.result,
        synced: true,
    };
    return state;
};
const contractVarErrorReceivedReducer = (state, action) => {
    state[action.contractName][action.contractAddress.toLowerCase()].instance.methods[action.methodName].vortexCache[action.methodHash] = {
        error: action.error,
        synced: true,
    };
    return state;
};
const contractVarForceRefreshReducer = (state, action) => {
    state[action.contractName][action.contractAddress.toLowerCase()].instance.methods[action.methodName].vortexCache[action.methodHash] = Object.assign({}, state[action.contractName][action.contractAddress.toLowerCase()].instance.methods[action.methodName].vortexCache[action.methodHash], { synced: false });
    return state;
};
exports.contracts = (state = {}, action) => {
    switch (action.type) {
        case 'CONTRACT_LOADING':
            return contractLoadingReducer(state, action);
        case 'CONTRACT_LOADED':
            return contractLoadedReducer(state, action);
        case 'CONTRACT_ERROR':
            return contractErrorReducer(state, action);
        case 'CONTRACT_VAR_RECEIVED':
            return contractVarReceivedReducer(state, action);
        case 'CONTRACT_VAR_ERROR_RECEIVED':
            return contractVarErrorReceivedReducer(state, action);
        case 'CONTRACT_VAR_FORCE_REFRESH':
            return contractVarForceRefreshReducer(state, action);
        default:
            return state;
    }
};
