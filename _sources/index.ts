export {Vortex} from './sources/vortex';

export {
    Web3LoadedState,
    Web3State,
    Web3LoadErrorState,
    Web3LoadingState,
    Web3NetworkErrorState,
    FeedState,
    FeedNewErrorState,
    FeedNewErrorErrorState,
    FeedNewContractState,
    FeedNewTransactionState,
    TransactionArgumentState,
    TransactionErrorState,
    RawTransactionArgumentState,
    TransactionConfirmedState,
    TransactionReceiptState,
    TransactionBroadcastedState,
    ContractStoreState,
    ContractAddressesState,
    TransactionState,
    ContractInstanceState,
    State,
    TransactionStoreState,
    AccountState,
    AccountStoreState,
    AccountInfoState,
    AccountErrorState,
    AccountConfigState,
    FeedNewAccountState,
    FeedNewIPFSContentState,
    IPFSStoreState,
    IPFSErrorState,
    IPFSContentState,
    ContractArtifactState
} from './sources/stateInterface';

export {dummyReducer} from './sources/dummyReducer';

export {
    Web3LoadedAction,
    Web3Actions,
    Web3Load,
    Web3LoadAction,
    Web3Loaded,
    Web3LoadError,
    Web3LoadErrorAction,
    Web3NetworkError,
    Web3NetworkErrorAction
} from './sources/web3/web3.actions';

export {
    TxBroadcastedAction,
    TxErrorAction,
    TxConfirmedAction,
    TxReceiptAction,
    TxActions,
    TxBroadcasted,
    TxConfirmed,
    TxError,
    TxReceipt,
    TxSend,
    TxSendAction,
    TxSendRaw,
    TxSendRawAction,
    TxReceiptTxArgs
} from './sources/tx/tx.actions';

export {
    ContractLoadAction,
    ContractVarForceRefreshAction,
    ContractVarErrorReceivedAction,
    ContractVarReceivedAction,
    ContractErrorAction,
    ContractLoadedAction,
    ContractLoadingAction,
    ContractActions,
    ContractCall,
    ContractCallAction,
    ContractError,
    ContractLoad,
    ContractLoaded,
    ContractLoading,
    ContractSend,
    ContractSendAction,
    ContractVarErrorReceived,
    ContractVarForceRefresh,
    ContractVarReceived
} from './sources/contracts/contracts.actions';

export {
    FeedNewErrorAction,
    FeedNewTransaction,
    FeedNewContract,
    FeedNewContractAction,
    FeedNewTransactionAction,
    FeedActions,
    FeedNewError,
    FeedNewAccountAction,
    FeedNewAccount
} from './sources/feed/feed.actions';

export {
    FeedType,
    FeedFilter,
    FeedFilterContracts,
    FeedFilterErrors,
    FeedFilterTransactions,
    FeedFilterAccounts
} from './sources/feed/feed.selectors';

export {
    AccountActions,
    AccountUpdateRequestAction,
    AccountUpdateAction,
    AccountErrorAction,
    AccountConfigAction,
    AccountRemoveAction,
    AccountAddAction,
    AccountAdd,
    AccountConfig,
    AccountError,
    AccountRemove,
    AccountUpdate,
    AccountUpdateRequest
} from './sources/accounts/accounts.actions';

export {
    IPFSError,
    IPFSLoad,
    IPFSLoaded,
    IPFSLoadAction,
    IPFSLoadedAction,
    IPFSErrorAction,
    IPFSActions
} from './sources/ipfs/ipfs.actions';

export {VortexContract} from './sources/contracts/VortexContract';
