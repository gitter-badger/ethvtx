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

export interface Web3LockedState {
    status: string
}

export type Web3State = Web3LoadingState | Web3LoadedState | Web3LoadErrorState | Web3NetworkErrorState | Web3LockedState;

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

export interface TransactionArgumentState {
    from?: any,
    to?: any,
    value?: any,
    data?: any,
    gas?: any,
    gasPrice?: any,
    nonce?: any,
}

export interface RawTransactionArgumentState {
    signed_transaction: string
}

export interface TransactionState {
    status: TransactionBroadcastedState | TransactionReceiptState | TransactionConfirmedState | TransactionErrorState,
    transaction_arguments: TransactionArgumentState | RawTransactionArgumentState ;
}

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

export interface ContractArtifactState {
    abi: any,
    bytecode: any,
    name: string
}

export interface ContractStoreState {
    [key: string]: ContractAddressesState | ContractArtifactState;
}

interface FeedHeader {
    action: string,
    timestamp: number
}

export interface FeedNewContractState extends FeedHeader {
    contract_name: string,
    contract_address: string
}

export interface FeedNewTransactionState extends FeedHeader {
    transaction_hash: string
}

export interface FeedNewIPFSContentState extends FeedHeader {
    ipfs_hash: string
}

export interface FeedNewErrorErrorState {
    reason: any,
    message: string,
    when: string
}

export interface FeedNewErrorState extends FeedHeader {
    error: FeedNewErrorErrorState,
}

export interface FeedNewAccountState extends FeedHeader{
    account: string,
    coinbase: boolean
}

export type FeedState = FeedNewContractState | FeedNewTransactionState | FeedNewErrorState | FeedNewAccountState | FeedNewIPFSContentState;

export interface AccountInfoState {
    balance: string,
    coinbase: boolean
}

export interface AccountConfigState {
    refresh_rate: number
}

export interface AccountErrorState {
    error: any
}

export type AccountState = AccountInfoState | AccountConfigState | AccountErrorState;

export interface AccountStoreState {
    [key:string]: AccountState
}

export interface IPFSContentState {
    content: Buffer
}

export interface IPFSErrorState {
    error: any
}

export interface IPFSStoreState {
    [key:string]: IPFSContentState | IPFSErrorState
}

export interface State {
    web3: Web3State,
    tx: TransactionStoreState,
    contracts: ContractStoreState,
    feed: FeedState[],
    accounts: AccountStoreState,
    ipfs: IPFSStoreState
}

