export interface Web3State {
    initialized: boolean,
    network_id: number
}

export interface TransactionState {

}

export interface TransactionStoreState {
    [key: string]: TransactionState;
}

export interface DeployedContractState {

}

export type ContractState = DeployedContractState | any;

export interface ContractAddressesState {
    [key: string]: ContractState;
}

export interface ContractStoreState {
    [key: string]: ContractAddressesState;
}

export interface FeedState {

}

export interface State {
    web3: Web3State,
    tx: TransactionStoreState,
    contracts: ContractStoreState,
    feed: FeedState[]
}

