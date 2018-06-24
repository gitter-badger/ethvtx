"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ContractLoading(contractName, contractAddress) {
    return {
        type: 'CONTRACT_LOADING',
        contractName,
        contractAddress
    };
}
exports.ContractLoading = ContractLoading;
function ContractLoaded(contractName, contractAddress, contractInstance) {
    return {
        type: 'CONTRACT_LOADED',
        contractName,
        contractAddress,
        contractInstance
    };
}
exports.ContractLoaded = ContractLoaded;
function ContractError(contractName, contractAddress, error) {
    return {
        type: 'CONTRACT_ERROR',
        contractName,
        contractAddress,
        error
    };
}
exports.ContractError = ContractError;
function ContractSend(contractName, contractAddress, methodName, transactionArgs, resolvers, ...methodArgs) {
    return {
        type: 'CONTRACT_SEND',
        contractName,
        contractAddress,
        methodName,
        transactionArgs,
        resolvers,
        methodArgs,
    };
}
exports.ContractSend = ContractSend;
function ContractCall(contractName, contractAddress, methodName, transactionArgs, resolvers, ...methodArgs) {
    return {
        type: 'CONTRACT_CALL',
        contractName,
        contractAddress,
        methodName,
        transactionArgs,
        resolvers,
        methodArgs
    };
}
exports.ContractCall = ContractCall;
function ContractVarReceived(contractName, contractAddress, methodName, methodHash, result) {
    return {
        type: 'CONTRACT_VAR_RECEIVED',
        contractName,
        contractAddress,
        methodName,
        methodHash,
        result
    };
}
exports.ContractVarReceived = ContractVarReceived;
function ContractVarErrorReceived(contractName, contractAddress, methodName, methodHash, error) {
    return {
        type: 'CONTRACT_VAR_ERROR_RECEIVED',
        contractName,
        contractAddress,
        methodName,
        methodHash,
        error
    };
}
exports.ContractVarErrorReceived = ContractVarErrorReceived;
function ContractVarForceRefresh(contractName, contractAddress, methodName, methodHash) {
    return {
        type: 'CONTRACT_VAR_FORCE_REFRESH',
        contractName,
        contractAddress,
        methodName,
        methodHash
    };
}
exports.ContractVarForceRefresh = ContractVarForceRefresh;
function ContractLoad(contractName, contractAddress) {
    return {
        type: 'CONTRACT_LOAD',
        contractName,
        contractAddress
    };
}
exports.ContractLoad = ContractLoad;
function ContractPreloadDone(recap) {
    return {
        type: 'CONTRACT_PRELOAD_DONE',
        recap
    };
}
exports.ContractPreloadDone = ContractPreloadDone;
function ContractCompleteRefresh(contract_name, contract_address) {
    return {
        type: 'CONTRACT_COMPLETE_REFRESH',
        contract_name,
        contract_address
    };
}
exports.ContractCompleteRefresh = ContractCompleteRefresh;
