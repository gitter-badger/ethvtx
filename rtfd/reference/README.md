
#  VortΞx

## Index

### Classes

* [Vortex](classes/vortex.md)
* [VortexContract](classes/vortexcontract.md)

### Interfaces

* [ContractAddressesState](interfaces/contractaddressesstate.md)
* [ContractErrorAction](interfaces/contracterroraction.md)
* [ContractInstanceState](interfaces/contractinstancestate.md)
* [ContractLoadedAction](interfaces/contractloadedaction.md)
* [ContractLoadingAction](interfaces/contractloadingaction.md)
* [ContractSendAction](interfaces/contractsendaction.md)
* [ContractStoreState](interfaces/contractstorestate.md)
* [ContractVarErrorReceivedAction](interfaces/contractvarerrorreceivedaction.md)
* [ContractVarForceRefreshAction](interfaces/contractvarforcerefreshaction.md)
* [ContractVarReceivedAction](interfaces/contractvarreceivedaction.md)
* [FeedNewContractAction](interfaces/feednewcontractaction.md)
* [FeedNewContractState](interfaces/feednewcontractstate.md)
* [FeedNewTransactionAction](interfaces/feednewtransactionaction.md)
* [FeedNewTransactionState](interfaces/feednewtransactionstate.md)
* [FetchedData](interfaces/fetcheddata.md)
* [SignatureCalls](interfaces/signaturecalls.md)
* [State](interfaces/state.md)
* [TransactionBroadcastedState](interfaces/transactionbroadcastedstate.md)
* [TransactionConfirmedState](interfaces/transactionconfirmedstate.md)
* [TransactionErrorState](interfaces/transactionerrorstate.md)
* [TransactionReceiptState](interfaces/transactionreceiptstate.md)
* [TransactionStoreState](interfaces/transactionstorestate.md)
* [TxBroadcastedAction](interfaces/txbroadcastedaction.md)
* [TxConfirmedAction](interfaces/txconfirmedaction.md)
* [TxErrorAction](interfaces/txerroraction.md)
* [TxReceiptAction](interfaces/txreceiptaction.md)
* [TxSendAction](interfaces/txsendaction.md)
* [TxSendRawAction](interfaces/txsendrawaction.md)
* [VortexTransactionArguments](interfaces/vortextransactionarguments.md)
* [Web3LoadAction](interfaces/web3loadaction.md)
* [Web3LoadErrorAction](interfaces/web3loaderroraction.md)
* [Web3LoadErrorState](interfaces/web3loaderrorstate.md)
* [Web3LoadedAction](interfaces/web3loadedaction.md)
* [Web3LoadedState](interfaces/web3loadedstate.md)
* [Web3LoadingState](interfaces/web3loadingstate.md)
* [Web3NetworkErrorAction](interfaces/web3networkerroraction.md)
* [Web3NetworkErrorState](interfaces/web3networkerrorstate.md)

### Type aliases

* [ContractActions](#contractactions)
* [ContractCallAction](#contractcallaction)
* [FeedActions](#feedactions)
* [FeedState](#feedstate)
* [TransactionState](#transactionstate)
* [TxActions](#txactions)
* [Web3Actions](#web3actions)
* [Web3State](#web3state)

### Variables

* [window](#window)

### Functions

* [ContractCall](#contractcall)
* [ContractError](#contracterror)
* [ContractLoaded](#contractloaded)
* [ContractLoading](#contractloading)
* [ContractSagas](#contractsagas)
* [ContractSend](#contractsend)
* [ContractVarErrorReceived](#contractvarerrorreceived)
* [ContractVarForceRefresh](#contractvarforcerefresh)
* [ContractVarReceived](#contractvarreceived)
* [FeedNewContract](#feednewcontract)
* [FeedNewTransaction](#feednewtransaction)
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
* [generateStore](#generatestore)
* [onContractCall](#oncontractcall)
* [onContractSend](#oncontractsend)
* [onLoadContractInitialize](#onloadcontractinitialize)
* [resolveWeb3](#resolveweb3)
* [rootSaga](#rootsaga)
* [runForceRefreshRound](#runforcerefreshround)
* [runForceRefreshRoundOn](#runforcerefreshroundon)
* [sendRawTransaction](#sendrawtransaction)
* [sendTransaction](#sendtransaction)
* [tx](#tx)
* [web3](#web3)

### Object literals

* [dummyReducer](#dummyreducer)
* [reducers](#reducers)

---

## Type aliases

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

*Defined in contracts/contracts.actions.ts:136*

___
<a id="contractcallaction"></a>

###  ContractCallAction

**ΤContractCallAction**: *[ContractSendAction](interfaces/contractsendaction.md)*

*Defined in contracts/contracts.actions.ts:67*

___
<a id="feedactions"></a>

###  FeedActions

**ΤFeedActions**: *[FeedNewContractAction](interfaces/feednewcontractaction.md) |
[FeedNewTransactionAction](interfaces/feednewtransactionaction.md)
*

*Defined in feed/feed.actions.ts:27*

___
<a id="feedstate"></a>

###  FeedState

**ΤFeedState**: *[FeedNewContractState](interfaces/feednewcontractstate.md) |
[FeedNewTransactionState](interfaces/feednewtransactionstate.md)
*

*Defined in stateInterface.ts:85*

___
<a id="transactionstate"></a>

###  TransactionState

**ΤTransactionState**: *[TransactionBroadcastedState](interfaces/transactionbroadcastedstate.md) |
[TransactionReceiptState](interfaces/transactionreceiptstate.md) |
[TransactionConfirmedState](interfaces/transactionconfirmedstate.md) |
[TransactionErrorState](interfaces/transactionerrorstate.md)
*

*Defined in stateInterface.ts:52*

___
<a id="txactions"></a>

###  TxActions

**ΤTxActions**: *[TxBroadcastedAction](interfaces/txbroadcastedaction.md) |
[TxReceiptAction](interfaces/txreceiptaction.md) |
[TxConfirmedAction](interfaces/txconfirmedaction.md) |
[TxErrorAction](interfaces/txerroraction.md)
*

*Defined in tx/tx.actions.ts:85*

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

<a id="window"></a>

###  window

**● window**: *`any`*

*Defined in generateStore.ts:1*

___

## Functions

<a id="contractcall"></a>

###  ContractCall

▸ **ContractCall**(contractName: *`string`*, contractAddress: *`string`*, methodName: *`string`*, transactionArgs: *`any`*, resolvers: *`any`*, ...methodArgs: *`any`[]*): [ContractCallAction](#contractcallaction)

*Defined in contracts/contracts.actions.ts:69*

**Parameters:**

| Param | Type |
| ------ | ------ |
| contractName | `string` | 
| contractAddress | `string` | 
| methodName | `string` | 
| transactionArgs | `any` | 
| resolvers | `any` | 
| `Rest` methodArgs | `any`[] | 

**Returns:** [ContractCallAction](#contractcallaction)

___
<a id="contracterror"></a>

###  ContractError

▸ **ContractError**(contractName: *`string`*, contractAddress: *`string`*, error: *`any`*): [ContractErrorAction](interfaces/contracterroraction.md)

*Defined in contracts/contracts.actions.ts:37*

**Parameters:**

| Param | Type |
| ------ | ------ |
| contractName | `string` | 
| contractAddress | `string` | 
| error | `any` | 

**Returns:** [ContractErrorAction](interfaces/contracterroraction.md)

___
<a id="contractloaded"></a>

###  ContractLoaded

▸ **ContractLoaded**(contractName: *`string`*, contractAddress: *`string`*, contractInstance: *`any`*): [ContractLoadedAction](interfaces/contractloadedaction.md)

*Defined in contracts/contracts.actions.ts:22*

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

*Defined in contracts/contracts.actions.ts:8*

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

*Defined in contracts/contracts.saga.ts:189*

**Returns:** `any`

___
<a id="contractsend"></a>

###  ContractSend

▸ **ContractSend**(contractName: *`string`*, contractAddress: *`string`*, methodName: *`string`*, transactionArgs: *`any`*, resolvers: *`any`*, ...methodArgs: *`any`[]*): [ContractSendAction](interfaces/contractsendaction.md)

*Defined in contracts/contracts.actions.ts:55*

**Parameters:**

| Param | Type |
| ------ | ------ |
| contractName | `string` | 
| contractAddress | `string` | 
| methodName | `string` | 
| transactionArgs | `any` | 
| resolvers | `any` | 
| `Rest` methodArgs | `any`[] | 

**Returns:** [ContractSendAction](interfaces/contractsendaction.md)

___
<a id="contractvarerrorreceived"></a>

###  ContractVarErrorReceived

▸ **ContractVarErrorReceived**(contractName: *`string`*, contractAddress: *`string`*, methodName: *`string`*, methodHash: *`string`*, error: *`any`*): [ContractVarErrorReceivedAction](interfaces/contractvarerrorreceivedaction.md)

*Defined in contracts/contracts.actions.ts:108*

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

*Defined in contracts/contracts.actions.ts:126*

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

*Defined in contracts/contracts.actions.ts:89*

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
<a id="txbroadcasted"></a>

###  TxBroadcasted

▸ **TxBroadcasted**(txHash: *`string`*): [TxBroadcastedAction](interfaces/txbroadcastedaction.md)

*Defined in tx/tx.actions.ts:37*

**Parameters:**

| Param | Type |
| ------ | ------ |
| txHash | `string` | 

**Returns:** [TxBroadcastedAction](interfaces/txbroadcastedaction.md)

___
<a id="txconfirmed"></a>

###  TxConfirmed

▸ **TxConfirmed**(txHash: *`string`*, confirmationReceipt: *`any`*, confirmationCount: *`number`*): [TxConfirmedAction](interfaces/txconfirmedaction.md)

*Defined in tx/tx.actions.ts:63*

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

*Defined in tx/tx.actions.ts:77*

**Parameters:**

| Param | Type |
| ------ | ------ |
| txHash | `string` | 
| error | `any` | 

**Returns:** [TxErrorAction](interfaces/txerroraction.md)

___
<a id="txreceipt"></a>

###  TxReceipt

▸ **TxReceipt**(txHash: *`string`*, receipt: *`any`*): [TxReceiptAction](interfaces/txreceiptaction.md)

*Defined in tx/tx.actions.ts:49*

**Parameters:**

| Param | Type |
| ------ | ------ |
| txHash | `string` | 
| receipt | `any` | 

**Returns:** [TxReceiptAction](interfaces/txreceiptaction.md)

___
<a id="txsagas"></a>

###  TxSagas

▸ **TxSagas**(): `any`

*Defined in tx/tx.sagas.ts:119*

**Returns:** `any`

___
<a id="txsend"></a>

###  TxSend

▸ **TxSend**(txArgs: *`any`*, web3: *`any`*, resolvers: *`any`*): [TxSendAction](interfaces/txsendaction.md)

*Defined in tx/tx.actions.ts:24*

**Parameters:**

| Param | Type |
| ------ | ------ |
| txArgs | `any` | 
| web3 | `any` | 
| resolvers | `any` | 

**Returns:** [TxSendAction](interfaces/txsendaction.md)

___
<a id="txsendraw"></a>

###  TxSendRaw

▸ **TxSendRaw**(signedTx: *`string`*, web3: *`any`*, resolvers: *`any`*): [TxSendRawAction](interfaces/txsendrawaction.md)

*Defined in tx/tx.actions.ts:9*

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

▸ **Web3Loaded**(_: *`any`*, networkId: *`number`*, coinbase: *`string`*): [Web3LoadedAction](interfaces/web3loadedaction.md)

*Defined in web3/web3.actions.ts:22*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _ | `any` | 
| networkId | `number` | 
| coinbase | `string` | 

**Returns:** [Web3LoadedAction](interfaces/web3loadedaction.md)

___
<a id="web3networkerror"></a>

###  Web3NetworkError

▸ **Web3NetworkError**(networkId: *`number`*): [Web3NetworkErrorAction](interfaces/web3networkerroraction.md)

*Defined in web3/web3.actions.ts:46*

**Parameters:**

| Param | Type |
| ------ | ------ |
| networkId | `number` | 

**Returns:** [Web3NetworkErrorAction](interfaces/web3networkerroraction.md)

___
<a id="web3sagas"></a>

###  Web3Sagas

▸ **Web3Sagas**(): `any`

*Defined in web3/web3.sagas.ts:74*

**Returns:** `any`

___
<a id="backgroundcontractload"></a>

###  backgroundContractLoad

▸ **backgroundContractLoad**(state: *[State](interfaces/state.md)*): `SagaIterator`

*Defined in contracts/contracts.saga.ts:44*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [State](interfaces/state.md) | 

**Returns:** `SagaIterator`

___
<a id="callresolveweb3"></a>

###  callResolveWeb3

▸ **callResolveWeb3**(action: *[Web3LoadAction](interfaces/web3loadaction.md)*): `SagaIterator`

*Defined in web3/web3.sagas.ts:62*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [Web3LoadAction](interfaces/web3loadaction.md) | 

**Returns:** `SagaIterator`

___
<a id="callsendrawtransaction"></a>

###  callSendRawTransaction

▸ **callSendRawTransaction**(action: *[TxSendRawAction](interfaces/txsendrawaction.md)*): `SagaIterator`

*Defined in tx/tx.sagas.ts:108*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [TxSendRawAction](interfaces/txsendrawaction.md) | 

**Returns:** `SagaIterator`

___
<a id="callsendtransaction"></a>

###  callSendTransaction

▸ **callSendTransaction**(action: *[TxSendAction](interfaces/txsendaction.md)*): `SagaIterator`

*Defined in tx/tx.sagas.ts:56*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [TxSendAction](interfaces/txsendaction.md) | 

**Returns:** `SagaIterator`

___
<a id="contractcall"></a>

###  contractCall

▸ **contractCall**(action: *[ContractCallAction](#contractcallaction)*, tx: *`any`*, arg_signature: *`string`*): `SagaIterator`

*Defined in contracts/contracts.saga.ts:94*

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

▸ **contractSend**(action: *[ContractSendAction](interfaces/contractsendaction.md)*, tx: *`any`*): `SagaIterator`

*Defined in contracts/contracts.saga.ts:131*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [ContractSendAction](interfaces/contractsendaction.md) | 
| tx | `any` | 

**Returns:** `SagaIterator`

___
<a id="contractvarerrorreceivedreducer"></a>

### `<Const>` contractVarErrorReceivedReducer

▸ **contractVarErrorReceivedReducer**(state: *[ContractStoreState](interfaces/contractstorestate.md)*, action: *[ContractVarErrorReceivedAction](interfaces/contractvarerrorreceivedaction.md)*): [ContractStoreState](interfaces/contractstorestate.md)

*Defined in contracts/contracts.reducers.ts:65*

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

*Defined in contracts/contracts.reducers.ts:73*

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

*Defined in contracts/contracts.reducers.ts:81*

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

*Defined in feed/feed.reducers.ts:5*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` state | [FeedState](#feedstate)[] |  [] as FeedState[] | 
| action | [FeedActions](#feedactions) | - | 

**Returns:** [FeedState](#feedstate)[]

___
<a id="generatestore"></a>

###  generateStore

▸ **generateStore**T(contracts: *`any`[]*, reducer?: *`ReducersMapObject`<`T`>*, customState?: *`DeepPartial`<`T`>*): `Store`

*Defined in generateStore.ts:18*

**Type parameters:**

#### T :  [State](interfaces/state.md)
**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| contracts | `any`[] | - | 
| `Default value` reducer | `ReducersMapObject`<`T`> |  undefined | 
| `Default value` customState | `DeepPartial`<`T`> |  undefined | 

**Returns:** `Store`

___
<a id="oncontractcall"></a>

###  onContractCall

▸ **onContractCall**(action: *[ContractCallAction](#contractcallaction)*): `SagaIterator`

*Defined in contracts/contracts.saga.ts:112*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [ContractCallAction](#contractcallaction) | 

**Returns:** `SagaIterator`

___
<a id="oncontractsend"></a>

###  onContractSend

▸ **onContractSend**(action: *[ContractSendAction](interfaces/contractsendaction.md)*): `SagaIterator`

*Defined in contracts/contracts.saga.ts:173*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [ContractSendAction](interfaces/contractsendaction.md) | 

**Returns:** `SagaIterator`

___
<a id="onloadcontractinitialize"></a>

###  onLoadContractInitialize

▸ **onLoadContractInitialize**(action: *[Web3LoadedAction](interfaces/web3loadedaction.md)*): `SagaIterator`

*Defined in contracts/contracts.saga.ts:56*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [Web3LoadedAction](interfaces/web3loadedaction.md) | 

**Returns:** `SagaIterator`

___
<a id="resolveweb3"></a>

###  resolveWeb3

▸ **resolveWeb3**(action: *[Web3LoadAction](interfaces/web3loadaction.md)*): `SagaIterator`

*Defined in web3/web3.sagas.ts:10*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [Web3LoadAction](interfaces/web3loadaction.md) | 

**Returns:** `SagaIterator`

___
<a id="rootsaga"></a>

###  rootSaga

▸ **rootSaga**(): `any`

*Defined in sagas.ts:6*

**Returns:** `any`

___
<a id="runforcerefreshround"></a>

###  runForceRefreshRound

▸ **runForceRefreshRound**(state: *[State](interfaces/state.md)*, emit: *`function`*): `void`

*Defined in contracts/contracts.saga.ts:34*

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

*Defined in contracts/contracts.saga.ts:22*

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

*Defined in tx/tx.sagas.ts:68*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [TxSendRawAction](interfaces/txsendrawaction.md) | 

**Returns:** `SagaIterator`

___
<a id="sendtransaction"></a>

###  sendTransaction

▸ **sendTransaction**(action: *[TxSendAction](interfaces/txsendaction.md)*): `SagaIterator`

*Defined in tx/tx.sagas.ts:16*

**Parameters:**

| Param | Type |
| ------ | ------ |
| action | [TxSendAction](interfaces/txsendaction.md) | 

**Returns:** `SagaIterator`

___
<a id="tx"></a>

### `<Const>` tx

▸ **tx**(state?: *[TransactionStoreState](interfaces/transactionstorestate.md)*, action: *[TxActions](#txactions)*): [TransactionStoreState](interfaces/transactionstorestate.md)

*Defined in tx/tx.reducers.ts:10*

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

<a id="dummyreducer"></a>

### `<Const>` dummyReducer

**dummyReducer**: *`object`*

*Defined in dummyReducer.ts:4*

<a id="dummyreducer.contracts"></a>

####  contracts

**● contracts**: *`function`* =  {} as Reducer<ContractStoreState>

*Defined in dummyReducer.ts:7*

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

*Defined in dummyReducer.ts:8*

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

*Defined in dummyReducer.ts:6*

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

*Defined in dummyReducer.ts:5*

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

*Defined in reducers.ts:8*

<a id="reducers.contracts"></a>

####  contracts

**● contracts**: *`function`*

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
<a id="reducers.feed"></a>

####  feed

**● feed**: *`function`*

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
<a id="reducers.tx"></a>

####  tx

**● tx**: *`function`*

*Defined in reducers.ts:10*

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

*Defined in reducers.ts:9*

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

