import {Action} from "redux";

export interface FeedNewTransactionAction extends Action {
    txHash: string;
}

export function FeedNewTransaction(txHash: string): FeedNewTransactionAction {
    return ({
        type: 'FEED_NEW_TRANSACTION',
        txHash
    });
}

export interface FeedNewContractAction extends Action {
    contractName: string,
    address: string
}

export function FeedNewContract(contractName: string, address: string): FeedNewContractAction {
    return ({
        type: 'FEED_NEW_CONTRACT',
        contractName,
        address
    });
}

export interface FeedNewErrorAction extends Action {
    reason: any,
    message: string,
    when: string
}

export function FeedNewError(reason: any, message: string, when: string): FeedNewErrorAction {
    return {
        type: 'FEED_NEW_ERROR',
        reason,
        message,
        when
    } as FeedNewErrorAction;
}

export type FeedActions = FeedNewContractAction | FeedNewTransactionAction | FeedNewErrorAction;
