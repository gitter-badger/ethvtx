
#  Vortex

## Index

### Enumerations

* [FeedType](enums/feedtype.md)

### Classes

* [Vortex](classes/vortex.md)
* [VortexContract](classes/vortexcontract.md)

### Interfaces

* [AccountAddAction](interfaces/accountaddaction.md)
* [AccountConfigAction](interfaces/accountconfigaction.md)
* [AccountConfigState](interfaces/accountconfigstate.md)
* [AccountErrorAction](interfaces/accounterroraction.md)
* [AccountErrorState](interfaces/accounterrorstate.md)
* [AccountInfoState](interfaces/accountinfostate.md)
* [AccountRemoveAction](interfaces/accountremoveaction.md)
* [AccountStoreState](interfaces/accountstorestate.md)
* [AccountUpdateAction](interfaces/accountupdateaction.md)
* [AccountUpdateRequestAction](interfaces/accountupdaterequestaction.md)
* [CachedWaitingCalls](interfaces/cachedwaitingcalls.md)
* [ContractAddressesState](interfaces/contractaddressesstate.md)
* [ContractArtifactState](interfaces/contractartifactstate.md)
* [ContractErrorAction](interfaces/contracterroraction.md)
* [ContractInstanceState](interfaces/contractinstancestate.md)
* [ContractLoadAction](interfaces/contractloadaction.md)
* [ContractLoadedAction](interfaces/contractloadedaction.md)
* [ContractLoadingAction](interfaces/contractloadingaction.md)
* [ContractSendAction](interfaces/contractsendaction.md)
* [ContractStoreState](interfaces/contractstorestate.md)
* [ContractVarErrorReceivedAction](interfaces/contractvarerrorreceivedaction.md)
* [ContractVarForceRefreshAction](interfaces/contractvarforcerefreshaction.md)
* [ContractVarReceivedAction](interfaces/contractvarreceivedaction.md)
* [Contracts](interfaces/contracts.md)
* [EmbarkContracts](interfaces/embarkcontracts.md)
* [FeedHeader](interfaces/feedheader.md)
* [FeedNewAccountAction](interfaces/feednewaccountaction.md)
* [FeedNewAccountState](interfaces/feednewaccountstate.md)
* [FeedNewContractAction](interfaces/feednewcontractaction.md)
* [FeedNewContractState](interfaces/feednewcontractstate.md)
* [FeedNewErrorAction](interfaces/feednewerroraction.md)
* [FeedNewErrorErrorState](interfaces/feednewerrorerrorstate.md)
* [FeedNewErrorState](interfaces/feednewerrorstate.md)
* [FeedNewIPFSContentAction](interfaces/feednewipfscontentaction.md)
* [FeedNewIPFSContentState](interfaces/feednewipfscontentstate.md)
* [FeedNewTransactionAction](interfaces/feednewtransactionaction.md)
* [FeedNewTransactionState](interfaces/feednewtransactionstate.md)
* [FetchedData](interfaces/fetcheddata.md)
* [GeneratorConfig](interfaces/generatorconfig.md)
* [IPFSContentState](interfaces/ipfscontentstate.md)
* [IPFSErrorAction](interfaces/ipfserroraction.md)
* [IPFSErrorState](interfaces/ipfserrorstate.md)
* [IPFSLoadAction](interfaces/ipfsloadaction.md)
* [IPFSLoadedAction](interfaces/ipfsloadedaction.md)
* [IPFSStoreState](interfaces/ipfsstorestate.md)
* [RawTransactionArgumentState](interfaces/rawtransactionargumentstate.md)
* [SignatureCalls](interfaces/signaturecalls.md)
* [State](interfaces/state.md)
* [TransactionArgumentState](interfaces/transactionargumentstate.md)
* [TransactionBroadcastedState](interfaces/transactionbroadcastedstate.md)
* [TransactionConfirmedState](interfaces/transactionconfirmedstate.md)
* [TransactionErrorState](interfaces/transactionerrorstate.md)
* [TransactionReceiptState](interfaces/transactionreceiptstate.md)
* [TransactionState](interfaces/transactionstate.md)
* [TransactionStoreState](interfaces/transactionstorestate.md)
* [TruffleContracts](interfaces/trufflecontracts.md)
* [TxBroadcastedAction](interfaces/txbroadcastedaction.md)
* [TxConfirmedAction](interfaces/txconfirmedaction.md)
* [TxErrorAction](interfaces/txerroraction.md)
* [TxReceiptAction](interfaces/txreceiptaction.md)
* [TxReceiptTxArgs](interfaces/txreceipttxargs.md)
* [TxSendAction](interfaces/txsendaction.md)
* [TxSendRawAction](interfaces/txsendrawaction.md)
* [Web3LoadAction](interfaces/web3loadaction.md)
* [Web3LoadErrorAction](interfaces/web3loaderroraction.md)
* [Web3LoadErrorState](interfaces/web3loaderrorstate.md)
* [Web3LoadedAction](interfaces/web3loadedaction.md)
* [Web3LoadedState](interfaces/web3loadedstate.md)
* [Web3LoadingState](interfaces/web3loadingstate.md)
* [Web3NetworkErrorAction](interfaces/web3networkerroraction.md)
* [Web3NetworkErrorState](interfaces/web3networkerrorstate.md)

### Type aliases

* [AccountActions](#accountactions)
* [AccountState](#accountstate)
* [ContractActions](#contractactions)
* [ContractCallAction](#contractcallaction)
* [FeedActions](#feedactions)
* [FeedState](#feedstate)
* [IPFSActions](#ipfsactions)
* [TxActions](#txactions)
* [Web3Actions](#web3actions)
* [Web3State](#web3state)

### Variables

* [FeedFilterAccounts](#feedfilteraccounts)
* [FeedFilterContracts](#feedfiltercontracts)
* [FeedFilterErrors](#feedfiltererrors)
* [FeedFilterIPFSContent](#feedfilteripfscontent)
* [FeedFilterTransactions](#feedfiltertransactions)
* [IPFS](#ipfs)
* [running](#running)
* [toLower](#tolower)
* [window](#window)

### Functions

* [AccountAdd](#accountadd)
* [AccountConfig](#accountconfig)
* [AccountConfigReducer](#accountconfigreducer)
* [AccountError](#accounterror)
* [AccountErrorReducer](#accounterrorreducer)
* [AccountRemove](#accountremove)
* [AccountRemoveReducer](#accountremovereducer)
* [AccountSagas](#accountsagas)
* [AccountUpdate](#accountupdate)
* [AccountUpdateReducer](#accountupdatereducer)
* [AccountUpdateRequest](#accountupdaterequest)
* [ContractCall](#contractcall)
* [ContractError](#contracterror)
* [ContractLoad](#contractload)
* [ContractLoaded](#contractloaded)
* [ContractLoading](#contractloading)
* [ContractSagas](#contractsagas)
* [ContractSend](#contractsend)
* [ContractVarErrorReceived](#contractvarerrorreceived)
* [ContractVarForceRefresh](#contractvarforcerefresh)
* [ContractVarReceived](#contractvarreceived)
* [FeedFilter](#feedfilter)
* [FeedNewAccount](#feednewaccount)
* [FeedNewContract](#feednewcontract)
* [FeedNewError](#feednewerror)
* [FeedNewIPFSContent](#feednewipfscontent)
* [FeedNewTransaction](#feednewtransaction)
* [IPFSError](#ipfserror)
* [IPFSErrorReducer](#ipfserrorreducer)
* [IPFSFetchData](#ipfsfetchdata)
* [IPFSLoad](#ipfsload)
* [IPFSLoaded](#ipfsloaded)
* [IPFSLoadedReducer](#ipfsloadedreducer)
* [IPFSSagas](#ipfssagas)
* [TxBroadcasted](#txbroadcasted)
* [TxConfirmed](#txconfirmed)
* [TxError](#txerror)
* [TxReceipt](#txreceipt)
* [TxSagas](#txsagas)
* [TxSend](#txsend)
* [TxSendRaw](#txsendraw)
* [Web3Load](#web3load)
* [Web3LoadError](#web3loaderror)
* [Web3Loaded](#web3loaded)
* [Web3NetworkError](#web3networkerror)
* [Web3Sagas](#web3sagas)
* [accounts](#accounts)
* [backgroundContractLoad](#backgroundcontractload)
* [callResolveWeb3](#callresolveweb3)
* [callSendRawTransaction](#callsendrawtransaction)
* [callSendTransaction](#callsendtransaction)
* [contractCall](#contractcall)
* [contractErrorReducer](#contracterrorreducer)
* [contractLoadedReducer](#contractloadedreducer)
* [contractLoadingReducer](#contractloadingreducer)
* [contractSend](#contractsend)
* [contractVarErrorReceivedReducer](#contractvarerrorreceivedreducer)
* [contractVarForceRefreshReducer](#contractvarforcerefreshreducer)
* [contractVarReceivedReducer](#contractvarreceivedreducer)
* [contracts](#contracts)
* [feed](#feed)
* [fetchAccount](#fetchaccount)
* [forge](#forge)
* [getFeed](#getfeed)
* [ipfs](#ipfs)
* [loadContract](#loadcontract)
* [loopOnAccounts](#looponaccounts)
* [onAccountAdd](#onaccountadd)
* [onAccountInit](#onaccountinit)
* [onContractCall](#oncontractcall)
* [onContractLoad](#oncontractload)
* [onContractSend](#oncontractsend)
* [onLoadContractInitialize](#onloadcontractinitialize)
* [onLoadRequest](#onloadrequest)
* [onUpdateRequest](#onupdaterequest)
* [refreshLoop](#refreshloop)
* [resolveWeb3](#resolveweb3)
* [rootSaga](#rootsaga)
* [runForceRefreshRound](#runforcerefreshround)
* [runForceRefreshRoundOn](#runforcerefreshroundon)
* [sendRawTransaction](#sendrawtransaction)
* [sendTransaction](#sendtransaction)
* [singleFetch](#singlefetch)
* [tx](#tx)
* [web3](#web3)

### Object literals

* [FeedTypeLinks](#feedtypelinks)
* [dummyReducer](#dummyreducer)
* [reducers](#reducers)

---

## Type aliases

<a id="accountactions"></a>

###  AccountActions

**ΤAccountActions**: *[AccountAddAction](interfaces/accountaddaction.md) |
[AccountRemoveAction](interfaces/accountremoveaction.md) |
[AccountUpdateAction](interfaces/accountupdateaction.md) |
[AccountErrorAction](interfaces/accounterroraction.md) |
[AccountConfigAction](interfaces/accountconfigaction.md)
*

*Defined in accounts/accounts.actions.ts:77*

___
<a id="accountstate"></a>

###  AccountState

**ΤAccountState**: *[AccountInfoState](interfaces/accountinfostate.md) |
[AccountConfigState](interfaces/accountconfigstate.md) |
[AccountErrorState](interfaces/accounterrorstate.md)
*

*Defined in stateInterface.ts:143*

___
<a id="contractactions"></a>

###  ContractActions

**ΤContractActions**: *[ContractLoadingAction](interfaces/contractloadingaction.md) |
[ContractLoadedAction](interfaces/contractloadedaction.md) |
[ContractErrorAction](interfaces/contracterroraction.md) |
[ContractCallAction](#contractcallaction) |
[ContractSendAction](interfaces/contractsendaction.md) |
[ContractVarReceivedAction](interfaces/contractvarreceivedaction.md) |
[ContractVarErrorReceivedAction](interfaces/contractvarerrorreceivedaction.md) |
[ContractVarForceRefreshAction](interfaces/contractvarforcerefreshaction.md)
*

*Defined in contracts/contracts.actions.ts:150*

___
<a id="contractcallaction"></a>

###  ContractCallAction

**ΤContractCallAction**: *[ContractSendAction](interfaces/contractsendaction.md)*

*Defined in contracts/contracts.actions.ts:68*

___
<a id="feedactions"></a>

###  FeedActions

**ΤFeedActions**: *[FeedNewContractAction](interfaces/feednewcontractaction.md) |
[FeedNewTransactionAction](interfaces/feednewtransactionaction.md) |
[FeedNewErrorAction](interfaces/feednewerroraction.md) |
[FeedNewAccountAction](interfaces/feednewaccountaction.md) |
[FeedNewIPFSContentAction](interfaces/feednewipfscontentaction.md)
*

*Defined in feed/feed.actions.ts:66*

___
<a id="feedstate"></a>

###  FeedState

**ΤFeedState**: *[FeedNewContractState](interfaces/feednewcontractstate.md) |
[FeedNewTransactionState](interfaces/feednewtransactionstate.md) |
[FeedNewErrorState](interfaces/feednewerrorstate.md) |
[FeedNewAccountState](interfaces/feednewaccountstate.md) |
[FeedNewIPFSContentState](interfaces/feednewipfscontentstate.md)
*

*Defined in stateInterface.ts:128*

___
<a id="ipfsactions"></a>

###  IPFSActions

**ΤIPFSActions**: *[IPFSLoadAction](interfaces/ipfsloadaction.md) |
[IPFSLoadedAction](interfaces/ipfsloadedaction.md) |
[IPFSErrorAction](interfaces/ipfserroraction.md)
*

*Defined in ipfs/ipfs.actions.ts:40*

___
<a id="txactions"></a>

###  TxActions

**ΤTxActions**: *[TxBroadcastedAction](interfaces/txbroadcastedaction.md) |
[TxReceiptAction](interfaces/txreceiptaction.md) |
[TxConfirmedAction](interfaces/txconfirmedaction.md) |
[TxErrorAction](interfaces/txerroraction.md)
*

*Defined in tx/tx.actions.ts:100*

___
<a id="web3actions"></a>

###  Web3Actions

**ΤWeb3Actions**: *[Web3LoadAction](interfaces/web3loadaction.md) |
[Web3LoadedAction](interfaces/web3loadedaction.md) |
[Web3LoadErrorAction](interfaces/web3loaderroraction.md) |
[Web3NetworkErrorAction](interfaces/web3networkerroraction.md)
*

*Defined in web3/web3.actions.ts:53*

___
<a id="web3state"></a>

###  Web3State

**ΤWeb3State**: *[Web3LoadingState](interfaces/web3loadingstate.md) |
[Web3LoadedState](interfaces/web3loadedstate.md) |
[Web3LoadErrorState](interfaces/web3loaderrorstate.md) |
[Web3NetworkErrorState](interfaces/web3networkerrorstate.md)
*

*Defined in stateInterface.ts:22*

___

## Variables

<a id="feedfilteraccounts"></a>

### `<Const>` FeedFilterAccounts

**● FeedFilterAccounts**: *`function` &
`object`
* =  createSelector(getFeed, (feed: FeedState[]): FeedState[] => {
    return feed.filter((elem: FeedState): boolean => !!((FeedTypeLinks[elem.action] ? FeedTypeLinks[elem.action] : -1) & FeedType.Accounts))
})

*Defined in feed/feed.selectors.ts:34*

___
<a id="feedfiltercontracts"></a>

### `<Const>` FeedFilterContracts

**● FeedFilterContracts**: *`function` &
`object`
* =  createSelector(getFeed, (feed: FeedState[]): FeedState[] => {
    return feed.filter((elem: FeedState): boolean => !!((FeedTypeLinks[elem.action] ? FeedTypeLinks[elem.action] : -1) & FeedType.Contracts))
})

*Defined in feed/feed.selectors.ts:26*

___
<a id="feedfiltererrors"></a>

### `<Const>` FeedFilterErrors

**● FeedFilterErrors**: *`function` &
`object`
* =  createSelector(getFeed, (feed: FeedState[]): FeedState[] => {
    return feed.filter((elem: FeedState): boolean => !!((FeedTypeLinks[elem.action] ? FeedTypeLinks[elem.action] : -1) & FeedType.Errors))
})

*Defined in feed/feed.selectors.ts:30*

___
<a id="feedfilteripfscontent"></a>

### `<Const>` FeedFilterIPFSContent

**● FeedFilterIPFSContent**: *`function` &
`object`
* =  createSelector(getFeed, (feed: FeedState[]): FeedState[] => {
    return feed.filter((elem: FeedState): boolean => !!((FeedTypeLinks[elem.action] ? FeedTypeLinks[elem.action] : -1) & FeedType.IPFSContent))
})

*Defined in feed/feed.selectors.ts:38*

___
<a id="feedfiltertransactions"></a>

### `<Const>` FeedFilterTransactions

**● FeedFilterTransactions**: *`function` &
`object`
* =  createSelector(getFeed, (feed: FeedState[]): FeedState[] => {
    return feed.filter((elem: FeedState): boolean => !!((FeedTypeLinks[elem.action] ? FeedTypeLinks[elem.action] : -1) & FeedType.Transactions))
})

*Defined in feed/feed.selectors.ts:22*

___
<a id="ipfs"></a>

### `<Const>` IPFS

**● IPFS**: *`any`* =  IPFSApi('ipfs.infura.io', '5001', {protocol: 'https'})

*Defined in ipfs/ipfs.saga.ts:8*

___
<a id="running"></a>

### `<Let>` running

**● running**: *`boolean`* = false

*Defined in accounts/accounts.saga.ts:15*

___
<a id="tolower"></a>

### `<Const>` toLower

**● toLower**: *`string`[]* =  [
    "to",
    "from",
    "gas",
    "gasPrice",
    "value"
]

*Defined in tx/tx.sagas.ts:17*
*Defined in contracts/contracts.saga.ts:24*

___
<a id="window"></a>

###  window

**● window**: *`any`*

*Defined in forge.ts:1*

___

## Functions

<a id="accountadd"></a>

### `<Const>` AccountAdd

▸ **AccountAdd**(address: *`string`*, coinbase?: *`boolean`*): [AccountAddAction](interfaces/accountaddaction.md)

*Defined in accounts/accounts.actions.ts:9*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| address | `string` | - | 
| `Default value` coinbase | `boolean` | false | 

**Returns:** [AccountAddAction](interfaces/accountaddaction.md)

___
<a id="accountconfig"></a>

### `<Const>` AccountConfig

▸ **AccountConfig**(config: *[AccountConfigState](interfaces/accountconfigstate.md)*): [AccountConfigAction](interfaces/accountconfigaction.md)

*Defined in accounts/accounts.actions.ts:59*

**Parameters:**

| Param | Type |
| ------ | ------ |
| config | [AccountConfigState](interfaces/accountconfigstate.md) | 

**Returns:** [AccountConfigAction](interfaces/accountconfigaction.md)

___
<a id="accountconfigreducer"></a>

### `<Const>` AccountConfigReducer

▸ **AccountConfigReducer**(state: *[AccountStoreState](interfaces/accountstorestate.md)*, action: *[AccountConfigAction](interfaces/accountconfigaction.md)*): [AccountStoreState](interfaces/accountstorestate.md)

*Defined in accounts/accounts.reducers.ts:42*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [AccountStoreState](interfaces/accountstorestate.md) | 
| action | [AccountConfigAction](interfaces/accountconfigaction.md) | 

**Returns:** [AccountStoreState](interfaces/accountstorestate.md)

___
<a id="accounterror"></a>

### `<Const>` AccountError

▸ **AccountError**(address: *`string`*, error: *`any`*): [AccountErrorAction](interfaces/accounterroraction.md)

*Defined in accounts/accounts.actions.ts:48*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address | `string` | 
| error | `any` | 

**Returns:** [AccountErrorAction](interfaces/accounterroraction.md)

___
<a id="accounterrorreducer"></a>

### `<Const>` AccountErrorReducer

▸ **AccountErrorReducer**(state: *[AccountStoreState](interfaces/accountstorestate.md)*, action: *[AccountErrorAction](interfaces/accounterroraction.md)*): [AccountStoreState](interfaces/accountstorestate.md)

*Defined in accounts/accounts.reducers.ts:55*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [AccountStoreState](interfaces/accountstorestate.md) | 
| action | [AccountErrorAction](interfaces/accounterroraction.md) | 

**Returns:** [AccountStoreState](interfaces/accountstorestate.md)

___
<a id="accountremove"></a>

### `<Const>` AccountRemove

▸ **AccountRemove**(address: *`string`*): [AccountRemoveAction](interfaces/accountremoveaction.md)

*Defined in accounts/accounts.actions.ts:21*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address | `string` | 

**Returns:** [AccountRemoveAction](interfaces/accountremoveaction.md)

___
<a id="accountremovereducer"></a>

### `<Const>` AccountRemoveReducer

▸ **AccountRemoveReducer**(state: *[AccountStoreState](interfaces/accountstorestate.md)*, action: *[AccountRemoveAction](interfaces/accountremoveaction.md)*): [AccountStoreState](interfaces/accountstorestate.md)

*Defined in accounts/accounts.reducers.ts:10*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [AccountStoreState](interfaces/accountstorestate.md) | 
| action | [AccountRemoveAction](interfaces/accountremoveaction.md) | 

**Returns:** [AccountStoreState](interfaces/accountstorestate.md)

___
<a id="accountsagas"></a>

###  AccountSagas

▸ **AccountSagas**(): `any`

*Defined in accounts/accounts.saga.ts:134*

**Returns:** `any`

___
<a id="accountupdate"></a>

### `<Const>` AccountUpdate

▸ **AccountUpdate**(address: *`string`*, balance: *`string`*, coinbase?: *`boolean`*): [AccountUpdateAction](interfaces/accountupdateaction.md)

*Defined in accounts/accounts.actions.ts:34*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| address | `string` | - | 
| balance | `string` | - | 
| `Default value` coinbase | `boolean` | false | 

**Returns:** [AccountUpdateAction](interfaces/accountupdateaction.md)

___
<a id="accountupdatereducer"></a>

### `<Const>` AccountUpdateReducer

▸ **AccountUpdateReducer**(state: *[AccountStoreState](interfaces/accountstorestate.md)*, action: *[AccountUpdateAction](interfaces/accountupdateaction.md)*): [AccountStoreState](interfaces/accountstorestate.md)

*Defined in accounts/accounts.reducers.ts:17*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [AccountStoreState](interfaces/accountstorestate.md) | 
| action | [AccountUpdateAction](interfaces/accountupdateaction.md) | 

**Returns:** [AccountStoreState](interfaces/accountstorestate.md)

___
<a id="accountupdaterequest"></a>

### `<Const>` AccountUpdateRequest

▸ **AccountUpdateRequest**(address: *`string`*): [AccountUpdateRequestAction](interfaces/accountupdaterequestaction.md)

*Defined in accounts/accounts.actions.ts:70*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address | `string` | 

**Returns:** [AccountUpdateRequestAction](interfaces/accountupdaterequestaction.md)

___
<a id="contractcall"></a>

###  ContractCall

▸ **ContractCall**(contractName: *`string`*, contractAddress: *`string`*, methodName: *`string`*, transactionArgs: *[TransactionArgumentState](interfaces/transactionargumentstate.md)*, resolvers: *`any`*, ...methodArgs: *`any`[]*): [ContractCallAction](#contractcallaction)

*Defined in contracts/contracts.actions.ts:70*

**Parameters:**

| Param | Type |
| ------ | ------ |
| contractName | `string` | 
| contractAddress | `string` | 
| methodName | `string` | 
| transactionArgs | [TransactionArgumentState](interfaces/transactionargumentstate.md) | 
| resolvers | `any` | 
| `Rest` methodArgs | `any`[] | 

**Returns:** [ContractCallAction](#contractcallaction)

___
<a id="contracterror"></a>

###  ContractError

▸ **ContractError**(contractName: *`string`*, contractAddress: *`string`*, error: *`any`*): [ContractErrorAction](interfaces/contracterroraction.md)

*Defined in contracts/contracts.actions.ts:38*

**Parameters:**

| Param | Type |
| ------ | ------ |
| contractName | `string` | 
| contractAddress | `string` | 
| error | `any` | 

**Returns:** [ContractErrorAction](interfaces/contracterroraction.md)

___
<a id="contractload"></a>

###  ContractLoad

▸ **ContractLoad**(contractName: *`string`*, contractAddress: *`string`*): [ContractLoadAction](interfaces/contractloadaction.md)

*Defined in contracts/contracts.actions.ts:142*

**Parameters:**

| Param | Type |
| ------ | ------ |
| contractName | `string` | 
| contractAddress | `string` | 

**Returns:** [ContractLoadAction](interfaces/contractloadaction.md)

___
<a id="contractloaded"></a>

###  ContractLoaded

▸ **ContractLoaded**(contractName: *`string`*, contractAddress: *`string`*, contractInstance: *`any`*): [ContractLoadedAction](interfaces/contractloadedaction.md)

*Defined in contracts/contracts.actions.ts:23*

**Parameters:**

| Param | Type |
| ------ | ------ |
| contractName | `string` | 
| contractAddress | `string` | 
| contractInstance | `any` | 

**Returns:** [ContractLoadedAction](interfaces/contractloadedaction.md)

___
<a id="contractloading"></a>

###  ContractLoading

▸ **ContractLoading**(contractName: *`string`*, contractAddress: *`string`*): [ContractLoadingAction](interfaces/contractloadingaction.md)

*Defined in contracts/contracts.actions.ts:9*

**Parameters:**

| Param | Type |
| ------ | ------ |
| contractName | `string` | 
| contractAddress | `string` | 

**Returns:** [ContractLoadingAction](interfaces/contractloadingaction.md)

___
<a id="contractsagas"></a>

###  ContractSagas

▸ **ContractSagas**(): `any`

*Defined in contracts/contracts.saga.ts:287*

**Returns:** `any`

___
<a id="contractsend"></a>

###  ContractSend

▸ **ContractSend**(contractName: *`string`*, contractAddress: *`string`*, methodName: *`string`*, transactionArgs: *[TransactionArgumentState](interfaces/transactionargumentstate.md)*, resolvers: *`any`*, ...methodArgs: *`any`[]*): [ContractSendAction](interfaces/contractsendaction.md)

*Defined in contracts/contracts.actions.ts:56*

**Parameters:**

| Param | Type |
| ------ | ------ |
| contractName | `string` | 
| contractAddress | `string` | 
| methodName | `string` | 
| transactionArgs | [TransactionArgumentState](interfaces/transactionargumentstate.md) | 
| resolvers | `any` | 
| `Rest` methodArgs | `any`[] | 

**Returns:** [ContractSendAction](interfaces/contractsendaction.md)

___
<a id="contractvarerrorreceived"></a>

###  ContractVarErrorReceived

▸ **ContractVarErrorReceived**(contractName: *`string`*, contractAddress: *`string`*, methodName: *`string`*, methodHash: *`string`*, error: *`any`*): [ContractVarErrorReceivedAction](interfaces/contractvarerrorreceivedaction.md)

*Defined in contracts/contracts.actions.ts:109*

**Parameters:**

| Param | Type |
| ------ | ------ |
| contractName | `string` | 
| contractAddress | `string` | 
| methodName | `string` | 
| methodHash | `string` | 
| error | `any` | 

**Returns:** [ContractVarErrorReceivedAction](interfaces/contractvarerrorreceivedaction.md)

___
<a id="contractvarforcerefresh"></a>

###  ContractVarForceRefresh

▸ **ContractVarForceRefresh**(contractName: *`string`*, contractAddress: *`string`*, methodName: *`string`*, methodHash: *`string`*): [ContractVarForceRefreshAction](interfaces/contractvarforcerefreshaction.md)

*Defined in contracts/contracts.actions.ts:127*

**Parameters:**

| Param | Type |
| ------ | ------ |
| contractName | `string` | 
| contractAddress | `string` | 
| methodName | `string` | 
| methodHash | `string` | 

**Returns:** [ContractVarForceRefreshAction](interfaces/contractvarforcerefreshaction.md)

___
<a id="contractvarreceived"></a>

###  ContractVarReceived

▸ **ContractVarReceived**(contractName: *`string`*, contractAddress: *`string`*, methodName: *`string`*, methodHash: *`string`*, result: *`any`*): [ContractVarReceivedAction](interfaces/contractvarreceivedaction.md)

*Defined in contracts/contracts.actions.ts:90*

**Parameters:**

| Param | Type |
| ------ | ------ |
| contractName | `string` | 
| contractAddress | `string` | 
| methodName | `string` | 
| methodHash | `string` | 
| result | `any` | 

**Returns:** [ContractVarReceivedAction](interfaces/contractvarreceivedaction.md)

___
<a id="feedfilter"></a>

### `<Const>` FeedFilter

▸ **FeedFilter**(type: *[FeedType](enums/feedtype.md)*): `any`

*Defined in feed/feed.selectors.ts:42*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | [FeedType](enums/feedtype.md) | 

**Returns:** `any`

___
<a id="feednewaccount"></a>

###  FeedNewAccount

▸ **FeedNewAccount**(account: *`string`*, coinbase: *`boolean`*): [FeedNewAccountAction](interfaces/feednewaccountaction.md)

*Defined in feed/feed.actions.ts:47*

**Parameters:**

| Param | Type |
| ------ | ------ |
| account | `string` | 
| coinbase | `boolean` | 

**Returns:** [FeedNewAccountAction](interfaces/feednewaccountaction.md)

___
<a id="feednewcontract"></a>

###  FeedNewContract

▸ **FeedNewContract**(contractName: *`string`*, address: *`string`*): [FeedNewContractAction](interfaces/feednewcontractaction.md)

*Defined in feed/feed.actions.ts:19*

**Parameters:**

| Param | Type |
| ------ | ------ |
| contractName | `string` | 
| address | `string` | 

**Returns:** [FeedNewContractAction](interfaces/feednewcontractaction.md)

___
<a id="feednewerror"></a>

###  FeedNewError

▸ **FeedNewError**(reason: *`any`*, message: *`string`*, when: *`string`*): [FeedNewErrorAction](interfaces/feednewerroraction.md)

*Defined in feed/feed.actions.ts:33*

**Parameters:**

| Param | Type |
| ------ | ------ |
| reason | `any` | 
| message | `string` | 
| when | `string` | 

**Returns:** [FeedNewErrorAction](interfaces/feednewerroraction.md)

___
<a id="feednewipfscontent"></a>

###  FeedNewIPFSContent

▸ **FeedNewIPFSContent**(ipfs_hash: *`string`*): [FeedNewIPFSContentAction](interfaces/feednewipfscontentaction.md)

*Defined in feed/feed.actions.ts:59*

**Parameters:**

| Param | Type |
| ------ | ------ |
| ipfs_hash | `string` | 

**Returns:** [FeedNewIPFSContentAction](interfaces/feednewipfscontentaction.md)

___
<a id="feednewtransaction"></a>

###  FeedNewTransaction

▸ **FeedNewTransaction**(txHash: *`string`*): [FeedNewTransactionAction](interfaces/feednewtransactionaction.md)

*Defined in feed/feed.actions.ts:7*

**Parameters:**

| Param | Type |
| ------ | ------ |
| txHash | `string` | 

**Returns:** [FeedNewTransactionAction](interfaces/feednewtransactionaction.md)

___
<a id="ipfserror"></a>

###  IPFSError

▸ **IPFSError**(hash: *`string`*, reason: *`any`*): [IPFSErrorAction](interfaces/ipfserroraction.md)

*Defined in ipfs/ipfs.actions.ts:32*

**Parameters:**

| Param | Type |
| ------ | ------ |
| hash | `string` | 
| reason | `any` | 

**Returns:** [IPFSErrorAction](interfaces/ipfserroraction.md)

___
<a id="ipfserrorreducer"></a>

### `<Const>` IPFSErrorReducer

▸ **IPFSErrorReducer**(state: *[IPFSStoreState](interfaces/ipfsstorestate.md)*, action: *[IPFSErrorAction](interfaces/ipfserroraction.md)*): [IPFSStoreState](interfaces/ipfsstorestate.md)

*Defined in ipfs/ipfs.reducers.ts:14*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [IPFSStoreState](interfaces/ipfsstorestate.md) | 
| action | [IPFSErrorAction](interfaces/ipfserroraction.md) | 

**Returns:** [IPFSStoreState](interfaces/ipfsstorestate.md)

___
<a id="ipfsfetchdata"></a>

###  IPFSFetchData

▸ **IPFSFetchData**(action: *[IPFSLoadAction](interfaces/ipfsloadaction.md)*): `SagaIterator`

*Defined in ipfs/ipfs.saga.ts:10*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [IPFSLoadAction](interfaces/ipfsloadaction.md) | 

**Returns:** `SagaIterator`

___
<a id="ipfsload"></a>

###  IPFSLoad

▸ **IPFSLoad**(hash: *`string`*): [IPFSLoadAction](interfaces/ipfsloadaction.md)

*Defined in ipfs/ipfs.actions.ts:7*

**Parameters:**

| Param | Type |
| ------ | ------ |
| hash | `string` | 

**Returns:** [IPFSLoadAction](interfaces/ipfsloadaction.md)

___
<a id="ipfsloaded"></a>

###  IPFSLoaded

▸ **IPFSLoaded**(hash: *`string`*, content: *`any`*): [IPFSLoadedAction](interfaces/ipfsloadedaction.md)

*Defined in ipfs/ipfs.actions.ts:19*

**Parameters:**

| Param | Type |
| ------ | ------ |
| hash | `string` | 
| content | `any` | 

**Returns:** [IPFSLoadedAction](interfaces/ipfsloadedaction.md)

___
<a id="ipfsloadedreducer"></a>

### `<Const>` IPFSLoadedReducer

▸ **IPFSLoadedReducer**(state: *[IPFSStoreState](interfaces/ipfsstorestate.md)*, action: *[IPFSLoadedAction](interfaces/ipfsloadedaction.md)*): [IPFSStoreState](interfaces/ipfsstorestate.md)

*Defined in ipfs/ipfs.reducers.ts:5*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [IPFSStoreState](interfaces/ipfsstorestate.md) | 
| action | [IPFSLoadedAction](interfaces/ipfsloadedaction.md) | 

**Returns:** [IPFSStoreState](interfaces/ipfsstorestate.md)

___
<a id="ipfssagas"></a>

###  IPFSSagas

▸ **IPFSSagas**(): `any`

*Defined in ipfs/ipfs.saga.ts:50*

**Returns:** `any`

___
<a id="txbroadcasted"></a>

###  TxBroadcasted

▸ **TxBroadcasted**(txHash: *`string`*, txArgs: *[TransactionArgumentState](interfaces/transactionargumentstate.md) |[RawTransactionArgumentState](interfaces/rawtransactionargumentstate.md)*): [TxBroadcastedAction](interfaces/txbroadcastedaction.md)

*Defined in tx/tx.actions.ts:39*

**Parameters:**

| Param | Type |
| ------ | ------ |
| txHash | `string` | 
| txArgs | [TransactionArgumentState](interfaces/transactionargumentstate.md) |
[RawTransactionArgumentState](interfaces/rawtransactionargumentstate.md)
 | 

**Returns:** [TxBroadcastedAction](interfaces/txbroadcastedaction.md)

___
<a id="txconfirmed"></a>

###  TxConfirmed

▸ **TxConfirmed**(txHash: *`string`*, confirmationReceipt: *`any`*, confirmationCount: *`number`*): [TxConfirmedAction](interfaces/txconfirmedaction.md)

*Defined in tx/tx.actions.ts:78*

**Parameters:**

| Param | Type |
| ------ | ------ |
| txHash | `string` | 
| confirmationReceipt | `any` | 
| confirmationCount | `number` | 

**Returns:** [TxConfirmedAction](interfaces/txconfirmedaction.md)

___
<a id="txerror"></a>

###  TxError

▸ **TxError**(txHash: *`string`*, error: *`any`*): [TxErrorAction](interfaces/txerroraction.md)

*Defined in tx/tx.actions.ts:92*

**Parameters:**

| Param | Type |
| ------ | ------ |
| txHash | `string` | 
| error | `any` | 

**Returns:** [TxErrorAction](interfaces/txerroraction.md)

___
<a id="txreceipt"></a>

###  TxReceipt

▸ **TxReceipt**(txHash: *`string`*, receipt: *`any`*, txArgs: *[TxReceiptTxArgs](interfaces/txreceipttxargs.md)*): [TxReceiptAction](interfaces/txreceiptaction.md)

*Defined in tx/tx.actions.ts:63*

**Parameters:**

| Param | Type |
| ------ | ------ |
| txHash | `string` | 
| receipt | `any` | 
| txArgs | [TxReceiptTxArgs](interfaces/txreceipttxargs.md) | 

**Returns:** [TxReceiptAction](interfaces/txreceiptaction.md)

___
<a id="txsagas"></a>

###  TxSagas

▸ **TxSagas**(): `any`

*Defined in tx/tx.sagas.ts:207*

**Returns:** `any`

___
<a id="txsend"></a>

###  TxSend

▸ **TxSend**(txArgs: *[TransactionArgumentState](interfaces/transactionargumentstate.md)*, web3: *`any`*, resolvers: *`any`*): [TxSendAction](interfaces/txsendaction.md)

*Defined in tx/tx.actions.ts:25*

**Parameters:**

| Param | Type |
| ------ | ------ |
| txArgs | [TransactionArgumentState](interfaces/transactionargumentstate.md) | 
| web3 | `any` | 
| resolvers | `any` | 

**Returns:** [TxSendAction](interfaces/txsendaction.md)

___
<a id="txsendraw"></a>

###  TxSendRaw

▸ **TxSendRaw**(signedTx: *`string`*, web3: *`any`*, resolvers: *`any`*): [TxSendRawAction](interfaces/txsendrawaction.md)

*Defined in tx/tx.actions.ts:10*

**Parameters:**

| Param | Type |
| ------ | ------ |
| signedTx | `string` | 
| web3 | `any` | 
| resolvers | `any` | 

**Returns:** [TxSendRawAction](interfaces/txsendrawaction.md)

___
<a id="web3load"></a>

###  Web3Load

▸ **Web3Load**(loader: *`Promise`<`any`>*, networks: *`number`[]*): [Web3LoadAction](interfaces/web3loadaction.md)

*Defined in web3/web3.actions.ts:8*

**Parameters:**

| Param | Type |
| ------ | ------ |
| loader | `Promise`<`any`> | 
| networks | `number`[] | 

**Returns:** [Web3LoadAction](interfaces/web3loadaction.md)

___
<a id="web3loaderror"></a>

###  Web3LoadError

▸ **Web3LoadError**(error: *`any`*): [Web3LoadErrorAction](interfaces/web3loaderroraction.md)

*Defined in web3/web3.actions.ts:35*

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | `any` | 

**Returns:** [Web3LoadErrorAction](interfaces/web3loaderroraction.md)

___
<a id="web3loaded"></a>

###  Web3Loaded

▸ **Web3Loaded**(_: *`any`*, networkId: *`number` |`string`*, coinbase: *`string`*): [Web3LoadedAction](interfaces/web3loadedaction.md)

*Defined in web3/web3.actions.ts:22*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _ | `any` | 
| networkId | `number` |
`string`
 | 
| coinbase | `string` | 

**Returns:** [Web3LoadedAction](interfaces/web3loadedaction.md)

___
<a id="web3networkerror"></a>

###  Web3NetworkError

▸ **Web3NetworkError**(networkId: *`number` |`string`*): [Web3NetworkErrorAction](interfaces/web3networkerroraction.md)

*Defined in web3/web3.actions.ts:46*

**Parameters:**

| Param | Type |
| ------ | ------ |
| networkId | `number` |
`string`
 | 

**Returns:** [Web3NetworkErrorAction](interfaces/web3networkerroraction.md)

___
<a id="web3sagas"></a>

###  Web3Sagas

▸ **Web3Sagas**(): `any`

*Defined in web3/web3.sagas.ts:97*

**Returns:** `any`

___
<a id="accounts"></a>

### `<Const>` accounts

▸ **accounts**(state?: *[AccountStoreState](interfaces/accountstorestate.md)*, action: *[AccountActions](#accountactions)*): [AccountStoreState](interfaces/accountstorestate.md)

*Defined in accounts/accounts.reducers.ts:77*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` state | [AccountStoreState](interfaces/accountstorestate.md) |  {} as AccountStoreState | 
| action | [AccountActions](#accountactions) | - | 

**Returns:** [AccountStoreState](interfaces/accountstorestate.md)

___
<a id="backgroundcontractload"></a>

###  backgroundContractLoad

▸ **backgroundContractLoad**(): `SagaIterator`

*Defined in contracts/contracts.saga.ts:54*

**Returns:** `SagaIterator`

___
<a id="callresolveweb3"></a>

###  callResolveWeb3

▸ **callResolveWeb3**(action: *[Web3LoadAction](interfaces/web3loadaction.md)*): `SagaIterator`

*Defined in web3/web3.sagas.ts:85*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [Web3LoadAction](interfaces/web3loadaction.md) | 

**Returns:** `SagaIterator`

___
<a id="callsendrawtransaction"></a>

###  callSendRawTransaction

▸ **callSendRawTransaction**(action: *[TxSendRawAction](interfaces/txsendrawaction.md)*): `SagaIterator`

*Defined in tx/tx.sagas.ts:196*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [TxSendRawAction](interfaces/txsendrawaction.md) | 

**Returns:** `SagaIterator`

___
<a id="callsendtransaction"></a>

###  callSendTransaction

▸ **callSendTransaction**(action: *[TxSendAction](interfaces/txsendaction.md)*): `SagaIterator`

*Defined in tx/tx.sagas.ts:103*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [TxSendAction](interfaces/txsendaction.md) | 

**Returns:** `SagaIterator`

___
<a id="contractcall"></a>

###  contractCall

▸ **contractCall**(action: *[ContractCallAction](#contractcallaction)*, tx: *`any`*, arg_signature: *`string`*): `SagaIterator`

*Defined in contracts/contracts.saga.ts:147*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [ContractCallAction](#contractcallaction) | 
| tx | `any` | 
| arg_signature | `string` | 

**Returns:** `SagaIterator`

___
<a id="contracterrorreducer"></a>

### `<Const>` contractErrorReducer

▸ **contractErrorReducer**(state: *[ContractStoreState](interfaces/contractstorestate.md)*, action: *[ContractErrorAction](interfaces/contracterroraction.md)*): [ContractStoreState](interfaces/contractstorestate.md)

*Defined in contracts/contracts.reducers.ts:43*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [ContractStoreState](interfaces/contractstorestate.md) | 
| action | [ContractErrorAction](interfaces/contracterroraction.md) | 

**Returns:** [ContractStoreState](interfaces/contractstorestate.md)

___
<a id="contractloadedreducer"></a>

### `<Const>` contractLoadedReducer

▸ **contractLoadedReducer**(state: *[ContractStoreState](interfaces/contractstorestate.md)*, action: *[ContractLoadedAction](interfaces/contractloadedaction.md)*): [ContractStoreState](interfaces/contractstorestate.md)

*Defined in contracts/contracts.reducers.ts:28*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [ContractStoreState](interfaces/contractstorestate.md) | 
| action | [ContractLoadedAction](interfaces/contractloadedaction.md) | 

**Returns:** [ContractStoreState](interfaces/contractstorestate.md)

___
<a id="contractloadingreducer"></a>

### `<Const>` contractLoadingReducer

▸ **contractLoadingReducer**(state: *[ContractStoreState](interfaces/contractstorestate.md)*, action: *[ContractLoadingAction](interfaces/contractloadingaction.md)*): [ContractStoreState](interfaces/contractstorestate.md)

*Defined in contracts/contracts.reducers.ts:13*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [ContractStoreState](interfaces/contractstorestate.md) | 
| action | [ContractLoadingAction](interfaces/contractloadingaction.md) | 

**Returns:** [ContractStoreState](interfaces/contractstorestate.md)

___
<a id="contractsend"></a>

###  contractSend

▸ **contractSend**(action: *[ContractSendAction](interfaces/contractsendaction.md)*, tx: *`any`*, web3: *`any`*): `SagaIterator`

*Defined in contracts/contracts.saga.ts:186*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [ContractSendAction](interfaces/contractsendaction.md) | 
| tx | `any` | 
| web3 | `any` | 

**Returns:** `SagaIterator`

___
<a id="contractvarerrorreceivedreducer"></a>

### `<Const>` contractVarErrorReceivedReducer

▸ **contractVarErrorReceivedReducer**(state: *[ContractStoreState](interfaces/contractstorestate.md)*, action: *[ContractVarErrorReceivedAction](interfaces/contractvarerrorreceivedaction.md)*): [ContractStoreState](interfaces/contractstorestate.md)

*Defined in contracts/contracts.reducers.ts:85*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [ContractStoreState](interfaces/contractstorestate.md) | 
| action | [ContractVarErrorReceivedAction](interfaces/contractvarerrorreceivedaction.md) | 

**Returns:** [ContractStoreState](interfaces/contractstorestate.md)

___
<a id="contractvarforcerefreshreducer"></a>

### `<Const>` contractVarForceRefreshReducer

▸ **contractVarForceRefreshReducer**(state: *[ContractStoreState](interfaces/contractstorestate.md)*, action: *[ContractVarForceRefreshAction](interfaces/contractvarforcerefreshaction.md)*): [ContractStoreState](interfaces/contractstorestate.md)

*Defined in contracts/contracts.reducers.ts:113*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [ContractStoreState](interfaces/contractstorestate.md) | 
| action | [ContractVarForceRefreshAction](interfaces/contractvarforcerefreshaction.md) | 

**Returns:** [ContractStoreState](interfaces/contractstorestate.md)

___
<a id="contractvarreceivedreducer"></a>

### `<Const>` contractVarReceivedReducer

▸ **contractVarReceivedReducer**(state: *[ContractStoreState](interfaces/contractstorestate.md)*, action: *[ContractVarReceivedAction](interfaces/contractvarreceivedaction.md)*): [ContractStoreState](interfaces/contractstorestate.md)

*Defined in contracts/contracts.reducers.ts:57*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [ContractStoreState](interfaces/contractstorestate.md) | 
| action | [ContractVarReceivedAction](interfaces/contractvarreceivedaction.md) | 

**Returns:** [ContractStoreState](interfaces/contractstorestate.md)

___
<a id="contracts"></a>

### `<Const>` contracts

▸ **contracts**(state?: *[ContractStoreState](interfaces/contractstorestate.md)*, action: *[ContractActions](#contractactions)*): [ContractStoreState](interfaces/contractstorestate.md)

*Defined in contracts/contracts.reducers.ts:141*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` state | [ContractStoreState](interfaces/contractstorestate.md) |  {} | 
| action | [ContractActions](#contractactions) | - | 

**Returns:** [ContractStoreState](interfaces/contractstorestate.md)

___
<a id="feed"></a>

### `<Const>` feed

▸ **feed**(state?: *[FeedState](#feedstate)[]*, action: *[FeedActions](#feedactions)*): [FeedState](#feedstate)[]

*Defined in feed/feed.reducers.ts:11*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` state | [FeedState](#feedstate)[] |  [] as FeedState[] | 
| action | [FeedActions](#feedactions) | - | 

**Returns:** [FeedState](#feedstate)[]

___
<a id="fetchaccount"></a>

###  fetchAccount

▸ **fetchAccount**(address: *`string`*, coinbase: *`boolean`*, emit: *`function`*): `Promise`<`void`>

*Defined in accounts/accounts.saga.ts:17*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address | `string` | 
| coinbase | `boolean` | 
| emit | `function` | 

**Returns:** `Promise`<`void`>

___
<a id="forge"></a>

###  forge

▸ **forge**T(contracts: *[EmbarkContracts](interfaces/embarkcontracts.md) |[TruffleContracts](interfaces/trufflecontracts.md)*, config?: *[GeneratorConfig](interfaces/generatorconfig.md)<`T`>*): `Store`

*Defined in forge.ts:46*

**Type parameters:**

#### T :  [State](interfaces/state.md)
**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| contracts | [EmbarkContracts](interfaces/embarkcontracts.md) |
[TruffleContracts](interfaces/trufflecontracts.md)
 | - | 
| `Default value` config | [GeneratorConfig](interfaces/generatorconfig.md)<`T`> |  undefined | 

**Returns:** `Store`

___
<a id="getfeed"></a>

### `<Const>` getFeed

▸ **getFeed**(state: *[State](interfaces/state.md)*): [FeedState](#feedstate)[]

*Defined in feed/feed.selectors.ts:4*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [State](interfaces/state.md) | 

**Returns:** [FeedState](#feedstate)[]

___
<a id="ipfs"></a>

### `<Const>` ipfs

▸ **ipfs**(state?: *[IPFSStoreState](interfaces/ipfsstorestate.md)*, action: *[IPFSActions](#ipfsactions)*): [IPFSStoreState](interfaces/ipfsstorestate.md)

*Defined in ipfs/ipfs.reducers.ts:23*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` state | [IPFSStoreState](interfaces/ipfsstorestate.md) |  {} | 
| action | [IPFSActions](#ipfsactions) | - | 

**Returns:** [IPFSStoreState](interfaces/ipfsstorestate.md)

___
<a id="loadcontract"></a>

###  loadContract

▸ **loadContract**(contractName: *`string`*, contractAddress: *`string`*, userAddress: *`string`*, web3: *`any`*): `SagaIterator`

*Defined in contracts/contracts.saga.ts:69*

**Parameters:**

| Param | Type |
| ------ | ------ |
| contractName | `string` | 
| contractAddress | `string` | 
| userAddress | `string` | 
| web3 | `any` | 

**Returns:** `SagaIterator`

___
<a id="looponaccounts"></a>

###  loopOnAccounts

▸ **loopOnAccounts**(emit: *`function`*): `Promise`<`void`>

*Defined in accounts/accounts.saga.ts:28*

**Parameters:**

| Param | Type |
| ------ | ------ |
| emit | `function` | 

**Returns:** `Promise`<`void`>

___
<a id="onaccountadd"></a>

###  onAccountAdd

▸ **onAccountAdd**(action: *[AccountAddAction](interfaces/accountaddaction.md)*): `SagaIterator`

*Defined in accounts/accounts.saga.ts:107*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [AccountAddAction](interfaces/accountaddaction.md) | 

**Returns:** `SagaIterator`

___
<a id="onaccountinit"></a>

###  onAccountInit

▸ **onAccountInit**(): `SagaIterator`

*Defined in accounts/accounts.saga.ts:71*

**Returns:** `SagaIterator`

___
<a id="oncontractcall"></a>

###  onContractCall

▸ **onContractCall**(action: *[ContractCallAction](#contractcallaction)*): `SagaIterator`

*Defined in contracts/contracts.saga.ts:167*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [ContractCallAction](#contractcallaction) | 

**Returns:** `SagaIterator`

___
<a id="oncontractload"></a>

###  onContractLoad

▸ **onContractLoad**(action: *[ContractLoadAction](interfaces/contractloadaction.md)*): `SagaIterator`

*Defined in contracts/contracts.saga.ts:282*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [ContractLoadAction](interfaces/contractloadaction.md) | 

**Returns:** `SagaIterator`

___
<a id="oncontractsend"></a>

###  onContractSend

▸ **onContractSend**(action: *[ContractSendAction](interfaces/contractsendaction.md)*): `SagaIterator`

*Defined in contracts/contracts.saga.ts:266*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [ContractSendAction](interfaces/contractsendaction.md) | 

**Returns:** `SagaIterator`

___
<a id="onloadcontractinitialize"></a>

###  onLoadContractInitialize

▸ **onLoadContractInitialize**(action: *[Web3LoadedAction](interfaces/web3loadedaction.md)*): `SagaIterator`

*Defined in contracts/contracts.saga.ts:95*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [Web3LoadedAction](interfaces/web3loadedaction.md) | 

**Returns:** `SagaIterator`

___
<a id="onloadrequest"></a>

###  onLoadRequest

▸ **onLoadRequest**(action: *[IPFSLoadAction](interfaces/ipfsloadaction.md)*): `SagaIterator`

*Defined in ipfs/ipfs.saga.ts:31*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [IPFSLoadAction](interfaces/ipfsloadaction.md) | 

**Returns:** `SagaIterator`

___
<a id="onupdaterequest"></a>

###  onUpdateRequest

▸ **onUpdateRequest**(action: *[AccountUpdateRequestAction](interfaces/accountupdaterequestaction.md)*): `SagaIterator`

*Defined in accounts/accounts.saga.ts:119*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [AccountUpdateRequestAction](interfaces/accountupdaterequestaction.md) | 

**Returns:** `SagaIterator`

___
<a id="refreshloop"></a>

###  refreshLoop

▸ **refreshLoop**(): `SagaIterator`

*Defined in accounts/accounts.saga.ts:54*

**Returns:** `SagaIterator`

___
<a id="resolveweb3"></a>

###  resolveWeb3

▸ **resolveWeb3**(action: *[Web3LoadAction](interfaces/web3loadaction.md)*): `SagaIterator`

*Defined in web3/web3.sagas.ts:8*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [Web3LoadAction](interfaces/web3loadaction.md) | 

**Returns:** `SagaIterator`

___
<a id="rootsaga"></a>

###  rootSaga

▸ **rootSaga**(): `any`

*Defined in sagas.ts:8*

**Returns:** `any`

___
<a id="runforcerefreshround"></a>

###  runForceRefreshRound

▸ **runForceRefreshRound**(state: *[State](interfaces/state.md)*, emit: *`function`*): `void`

*Defined in contracts/contracts.saga.ts:44*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [State](interfaces/state.md) | 
| emit | `function` | 

**Returns:** `void`

___
<a id="runforcerefreshroundon"></a>

###  runForceRefreshRoundOn

▸ **runForceRefreshRoundOn**(state: *[State](interfaces/state.md)*, emit: *`function`*, contractName: *`string`*, instance_address: *`string`*): `void`

*Defined in contracts/contracts.saga.ts:32*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [State](interfaces/state.md) | 
| emit | `function` | 
| contractName | `string` | 
| instance_address | `string` | 

**Returns:** `void`

___
<a id="sendrawtransaction"></a>

###  sendRawTransaction

▸ **sendRawTransaction**(action: *[TxSendRawAction](interfaces/txsendrawaction.md)*): `SagaIterator`

*Defined in tx/tx.sagas.ts:115*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [TxSendRawAction](interfaces/txsendrawaction.md) | 

**Returns:** `SagaIterator`

___
<a id="sendtransaction"></a>

###  sendTransaction

▸ **sendTransaction**(action: *[TxSendAction](interfaces/txsendaction.md)*): `SagaIterator`

*Defined in tx/tx.sagas.ts:25*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [TxSendAction](interfaces/txsendaction.md) | 

**Returns:** `SagaIterator`

___
<a id="singlefetch"></a>

###  singleFetch

▸ **singleFetch**(action: *[AccountAddAction](interfaces/accountaddaction.md)*, new_address: *`boolean`*, coinbase: *`boolean`*): `SagaIterator`

*Defined in accounts/accounts.saga.ts:86*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [AccountAddAction](interfaces/accountaddaction.md) | 
| new_address | `boolean` | 
| coinbase | `boolean` | 

**Returns:** `SagaIterator`

___
<a id="tx"></a>

### `<Const>` tx

▸ **tx**(state?: *[TransactionStoreState](interfaces/transactionstorestate.md)*, action: *[TxActions](#txactions)*): [TransactionStoreState](interfaces/transactionstorestate.md)

*Defined in tx/tx.reducers.ts:8*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` state | [TransactionStoreState](interfaces/transactionstorestate.md) |  {} as TransactionStoreState | 
| action | [TxActions](#txactions) | - | 

**Returns:** [TransactionStoreState](interfaces/transactionstorestate.md)

___
<a id="web3"></a>

### `<Const>` web3

▸ **web3**(state?: *[Web3State](#web3state)*, action: *[Web3Actions](#web3actions)*): [Web3State](#web3state)

*Defined in web3/web3.reducers.ts:5*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` state | [Web3State](#web3state) |  {status: &#x27;LOADING&#x27;} | 
| action | [Web3Actions](#web3actions) | - | 

**Returns:** [Web3State](#web3state)

___

## Object literals

<a id="feedtypelinks"></a>

### `<Const>` FeedTypeLinks

**FeedTypeLinks**: *`object`*

*Defined in feed/feed.selectors.ts:14*

<a id="feedtypelinks.new_account"></a>

####  NEW_ACCOUNT

**● NEW_ACCOUNT**: *`number`* = 8

*Defined in feed/feed.selectors.ts:18*

___
<a id="feedtypelinks.new_contract"></a>

####  NEW_CONTRACT

**● NEW_CONTRACT**: *`number`* = 2

*Defined in feed/feed.selectors.ts:16*

___
<a id="feedtypelinks.new_error"></a>

####  NEW_ERROR

**● NEW_ERROR**: *`number`* = 4

*Defined in feed/feed.selectors.ts:17*

___
<a id="feedtypelinks.new_ipfs_content"></a>

####  NEW_IPFS_CONTENT

**● NEW_IPFS_CONTENT**: *`number`* = 16

*Defined in feed/feed.selectors.ts:19*

___
<a id="feedtypelinks.new_transaction"></a>

####  NEW_TRANSACTION

**● NEW_TRANSACTION**: *`number`* = 1

*Defined in feed/feed.selectors.ts:15*

___

___
<a id="dummyreducer"></a>

### `<Const>` dummyReducer

**dummyReducer**: *`object`*

*Defined in dummyReducer.ts:12*

<a id="dummyreducer.accounts"></a>

####  accounts

**● accounts**: *`function`* =  {} as Reducer<AccountStoreState>

*Defined in dummyReducer.ts:17*

#### Type declaration
▸(state: *`S` |`undefined`*, action: *`A`*): `S`

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `S` |
`undefined`
 | 
| action | `A` | 

**Returns:** `S`

___
<a id="dummyreducer.contracts"></a>

####  contracts

**● contracts**: *`function`* =  {} as Reducer<ContractStoreState>

*Defined in dummyReducer.ts:15*

#### Type declaration
▸(state: *`S` |`undefined`*, action: *`A`*): `S`

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `S` |
`undefined`
 | 
| action | `A` | 

**Returns:** `S`

___
<a id="dummyreducer.feed"></a>

####  feed

**● feed**: *`function`* =  {} as Reducer<FeedState[]>

*Defined in dummyReducer.ts:16*

#### Type declaration
▸(state: *`S` |`undefined`*, action: *`A`*): `S`

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `S` |
`undefined`
 | 
| action | `A` | 

**Returns:** `S`

___
<a id="dummyreducer.ipfs"></a>

####  ipfs

**● ipfs**: *`function`* =  {} as Reducer<IPFSStoreState>

*Defined in dummyReducer.ts:18*

#### Type declaration
▸(state: *`S` |`undefined`*, action: *`A`*): `S`

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `S` |
`undefined`
 | 
| action | `A` | 

**Returns:** `S`

___
<a id="dummyreducer.tx"></a>

####  tx

**● tx**: *`function`* =  {} as Reducer<TransactionStoreState>

*Defined in dummyReducer.ts:14*

#### Type declaration
▸(state: *`S` |`undefined`*, action: *`A`*): `S`

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `S` |
`undefined`
 | 
| action | `A` | 

**Returns:** `S`

___
<a id="dummyreducer.web3"></a>

####  web3

**● web3**: *`function`* =  {} as Reducer<Web3State>

*Defined in dummyReducer.ts:13*

#### Type declaration
▸(state: *`S` |`undefined`*, action: *`A`*): `S`

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `S` |
`undefined`
 | 
| action | `A` | 

**Returns:** `S`

___

___
<a id="reducers"></a>

### `<Const>` reducers

**reducers**: *`object`*

*Defined in reducers.ts:10*

<a id="reducers.accounts"></a>

####  accounts

**● accounts**: *`function`*

*Defined in reducers.ts:15*

#### Type declaration
▸(state: *`S` |`undefined`*, action: *`A`*): `S`

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `S` |
`undefined`
 | 
| action | `A` | 

**Returns:** `S`

___
<a id="reducers.contracts"></a>

####  contracts

**● contracts**: *`function`*

*Defined in reducers.ts:13*

#### Type declaration
▸(state: *`S` |`undefined`*, action: *`A`*): `S`

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `S` |
`undefined`
 | 
| action | `A` | 

**Returns:** `S`

___
<a id="reducers.feed"></a>

####  feed

**● feed**: *`function`*

*Defined in reducers.ts:14*

#### Type declaration
▸(state: *`S` |`undefined`*, action: *`A`*): `S`

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `S` |
`undefined`
 | 
| action | `A` | 

**Returns:** `S`

___
<a id="reducers.ipfs"></a>

####  ipfs

**● ipfs**: *`function`*

*Defined in reducers.ts:16*

#### Type declaration
▸(state: *`S` |`undefined`*, action: *`A`*): `S`

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `S` |
`undefined`
 | 
| action | `A` | 

**Returns:** `S`

___
<a id="reducers.tx"></a>

####  tx

**● tx**: *`function`*

*Defined in reducers.ts:12*

#### Type declaration
▸(state: *`S` |`undefined`*, action: *`A`*): `S`

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `S` |
`undefined`
 | 
| action | `A` | 

**Returns:** `S`

___
<a id="reducers.web3"></a>

####  web3

**● web3**: *`function`*

*Defined in reducers.ts:11*

#### Type declaration
▸(state: *`S` |`undefined`*, action: *`A`*): `S`

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `S` |
`undefined`
 | 
| action | `A` | 

**Returns:** `S`

___

___

