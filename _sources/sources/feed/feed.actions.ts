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

export type FeedActions = FeedNewContractAction | FeedNewTransactionAction;
