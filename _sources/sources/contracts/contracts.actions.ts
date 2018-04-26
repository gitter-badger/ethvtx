import {Action} from 'redux';

export interface ContractLoadingAction extends Action {
    contractName: string,
    contractAddress: string
}

export function ContractLoading(contractName: string, contractAddress: string): ContractLoadingAction {
    return {
        type: 'CONTRACT_LOADING',
        contractName,
        contractAddress
    } as ContractLoadingAction;
}

export interface ContractLoadedAction extends Action {
    contractName: string,
    contractAddress: string,
    contractInstance: any
}

export function ContractLoaded(contractName: string, contractAddress: string, contractInstance: any): ContractLoadedAction {
    return {
        type: 'CONTRACT_LOADED',
        contractName,
        contractAddress,
        contractInstance
    } as ContractLoadedAction;
}

export interface ContractErrorAction extends Action {
    contractName: string,
    contractAddress: string,
    error: any
}

export function ContractError(contractName: string, contractAddress: string, error: any): ContractErrorAction {
    return {
        type: 'CONTRACT_ERROR',
        contractName,
        contractAddress,
        error
    }
}

export interface ContractSendAction extends Action {
    contractName: string,
    contractAddress: string,
    methodName: string,
    transactionArgs: any,
    resolvers: any,
    methodArgs: any
}

export function ContractSend(contractName: string, contractAddress: string, methodName: string, transactionArgs: any, resolvers: any, ...methodArgs: any[]): ContractSendAction {
    return {
        type: 'CONTRACT_SEND',
        contractName,
        contractAddress,
        methodName,
        transactionArgs,
        resolvers,
        methodArgs,
    } as ContractSendAction;
}

export type ContractCallAction = ContractSendAction;

export function ContractCall(contractName: string, contractAddress: string, methodName: string, transactionArgs: any, resolvers: any, ...methodArgs: any[]): ContractCallAction {
    return {
        type: 'CONTRACT_CALL',
        contractName,
        contractAddress,
        methodName,
        transactionArgs,
        resolvers,
        methodArgs
    } as ContractCallAction;
}

export interface ContractVarReceivedAction extends Action {
    contractName: string,
    contractAddress: string,
    methodName: string,
    methodHash: string,
    result: any
}

export function ContractVarReceived(contractName: string, contractAddress: string, methodName: string, methodHash: string, result: any): ContractVarReceivedAction {
    return {
        type: 'CONTRACT_VAR_RECEIVED',
        contractName,
        contractAddress,
        methodName,
        methodHash,
        result
    } as ContractVarReceivedAction;
}

export interface ContractVarErrorReceivedAction extends Action {
    contractName: string,
    contractAddress: string,
    methodName: string,
    methodHash: string,
    error: any
}

export function ContractVarErrorReceived(contractName: string, contractAddress: string, methodName: string, methodHash: string, error: any): ContractVarErrorReceivedAction {
    return {
        type: 'CONTRACT_VAR_ERROR_RECEIVED',
        contractName,
        contractAddress,
        methodName,
        methodHash,
        error
    } as ContractVarErrorReceivedAction;
}

export interface ContractVarForceRefreshAction extends Action {
    contractName: string,
    contractAddress: string,
    methodName: string,
    methodHash: string
}

export function ContractVarForceRefresh(contractName: string, contractAddress: string, methodName: string, methodHash: string): ContractVarForceRefreshAction {
    return {
        type: 'CONTRACT_VAR_FORCE_REFRESH',
        contractName,
        contractAddress,
        methodName,
        methodHash
    } as ContractVarForceRefreshAction;
}

export type ContractActions = ContractLoadingAction | ContractLoadedAction | ContractErrorAction | ContractCallAction | ContractSendAction | ContractVarReceivedAction | ContractVarErrorReceivedAction | ContractVarForceRefreshAction;
