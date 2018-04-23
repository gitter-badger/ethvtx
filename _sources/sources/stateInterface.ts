export interface Web3LoadingState {
    status: string
}

export interface Web3LoadedState {
    status: string,
    network_id: number,
    _: any
}

export interface Web3LoadErrorState {
    status: string,
    error: any
}

export interface Web3NetworkErrorState {
    status: string,
    network_id: number
}

export type Web3State = Web3LoadingState | Web3LoadedState | Web3LoadErrorState | Web3NetworkErrorState;

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

