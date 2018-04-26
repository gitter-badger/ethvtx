export interface Web3LoadingState {
    status: string
}

export interface Web3LoadedState {
    status: string,
    network_id: number,
    coinbase: string,
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

export interface TransactionBroadcastedState {
    type: string,
    transaction_hash: string,
    timestamp: number
}

export interface TransactionReceiptState {
    type: string,
    transaction_hash: string,
    transaction_receipt: any,
    timestamp: number
}

export interface TransactionConfirmedState {
    type: string,
    transaction_hash: string,
    transaction_receipt: any,
    transaction_confirmation_count: number,
    timestamp: number
}

export interface TransactionErrorState {
    type: string,
    transaction_hash: string,
    error: any,
    timestamp: number
}

export type TransactionState = TransactionBroadcastedState | TransactionReceiptState | TransactionConfirmedState | TransactionErrorState;

export interface TransactionStoreState {
    [key: string]: TransactionState;
}

export interface ContractInstanceState {
    status?: string,
    instance?: any,
    error?: any
}

export interface ContractAddressesState {
    [key: string]: ContractInstanceState;
}

export interface ContractStoreState {
    [key: string]: ContractAddressesState;
}

export interface FeedNewContractState {
    action: string,
    contract_name: string,
    contract_address: string,
    timestamp: number
}

export interface FeedNewTransactionState {
    action: string,
    transaction_hash: string,
    timestamp: number
}

export type FeedState = FeedNewContractState | FeedNewTransactionState;

export interface State {
    web3: Web3State,
    tx: TransactionStoreState,
    contracts: ContractStoreState,
    feed: FeedState[]
}

