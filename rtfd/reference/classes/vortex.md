[Vortex](../README.md) > [Vortex](../classes/vortex.md)

# Class: Vortex

## Type parameters
#### T :  [State](../interfaces/state.md)
## Hierarchy

**Vortex**

## Index

### Constructors

* [constructor](vortex.md#constructor)

### Accessors

* [Contracts](vortex.md#contracts)
* [Networks](vortex.md#networks)
* [Store](vortex.md#store)

### Methods

* [addContract](vortex.md#addcontract)
* [addNetwork](vortex.md#addnetwork)
* [addReducer](vortex.md#addreducer)
* [loadContract](vortex.md#loadcontract)
* [loadWeb3](vortex.md#loadweb3)
* [networksOf](vortex.md#networksof)
* [run](vortex.md#run)
* [setCustomState](vortex.md#setcustomstate)
* [subscribeAccount](vortex.md#subscribeaccount)
* [factory](vortex.md#factory)
* [get](vortex.md#get)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Vortex**(contracts: *`ContractArtifact`[]*, loader: *`Promise`<`any`>*, config?: *[GeneratorConfig](../interfaces/generatorconfig.md)<`T`>*): [Vortex](vortex.md)

*Defined in vortex.ts:29*

Instantiate a new Vorte instance. Accessing VortexInstance will give access to the last instanciated Vortex.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| contracts | `ContractArtifact`[] | - |  List of contract artifacts created by truffle. |
| loader | `Promise`<`any`> | - |  Promise that returns a web3 instance ready to be used. |
| `Default value` config | [GeneratorConfig](../interfaces/generatorconfig.md)<`T`> |  undefined |  Configuration arguments for the store generator. |

**Returns:** [Vortex](vortex.md)

___

## Accessors

<a id="contracts"></a>

###  Contracts

getContracts(): `ContractArtifact`[]

*Defined in vortex.ts:153*

Contracts getter

**Returns:** `ContractArtifact`[]
Array of loaded artifacts.

___
<a id="networks"></a>

###  Networks

getNetworks(): `number`[]

*Defined in vortex.ts:173*

Network Id Whitelist getter.

**Returns:** `number`[]
List of whitelisted network ids.

___
<a id="store"></a>

###  Store

getStore(): `Store`<`T`>

*Defined in vortex.ts:162*

Store getter

**Returns:** `Store`<`T`>
Instance of Store

___

## Methods

<a id="addcontract"></a>

###  addContract

▸ **addContract**(contract: *`ContractArtifact`*): `void`

*Defined in vortex.ts:73*

Add a new contract in contract list.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| contract | `ContractArtifact` |  Contract to add. |

**Returns:** `void`

___
<a id="addnetwork"></a>

###  addNetwork

▸ **addNetwork**(network_id: *`number`*): `void`

*Defined in vortex.ts:85*

Adds a network id to whitelist.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| network_id | `number` |  Network Id to add. |

**Returns:** `void`

___
<a id="addreducer"></a>

###  addReducer

▸ **addReducer**(field: *`string`*, reducer: *`Reducer`<`any`, `any`>*): `void`

*Defined in vortex.ts:104*

Add a new reducer in the Reducer Map.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| field | `string` |  Field Name associated with reducer. |
| reducer | `Reducer`<`any`, `any`> |  Reducer |

**Returns:** `void`

___
<a id="loadcontract"></a>

###  loadContract

▸ **loadContract**(contractName: *`string`*, contractAddress: *`string`*): `void`

*Defined in vortex.ts:127*

Load a new instance of a Smart Contract. Expect a new Feed element and the contracts section to get updated.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| contractName | `string` |  - |
| contractAddress | `string` |   |

**Returns:** `void`

___
<a id="loadweb3"></a>

###  loadWeb3

▸ **loadWeb3**(): `void`

*Defined in vortex.ts:60*

Load Web3 instance from given source.

**Returns:** `void`

___
<a id="networksof"></a>

###  networksOf

▸ **networksOf**(contract: *`ContractArtifact`*): `void`

*Defined in vortex.ts:94*

Takes a Truffle Contract Artifact and extracts all network ids where Contract has instances, adds them to whitelist

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| contract | `ContractArtifact` |  A Truffle Contract Artifact |

**Returns:** `void`

___
<a id="run"></a>

###  run

▸ **run**(): `void`

*Defined in vortex.ts:48*

Run the Vortex Redux Store.

**Returns:** `void`

___
<a id="setcustomstate"></a>

###  setCustomState

▸ **setCustomState**(customState: *`DeepPartial`<`T`>*): `void`

*Defined in vortex.ts:116*

Custom Initial State, useful when adding custom properties.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| customState | `DeepPartial`<`T`> |   |

**Returns:** `void`

___
<a id="subscribeaccount"></a>

###  subscribeAccount

▸ **subscribeAccount**(address: *`string`*): `void`

*Defined in vortex.ts:140*

Add a new contract to fetch pool.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | `string` |  Address to fetch |

**Returns:** `void`

___
<a id="factory"></a>

### `<Static>` factory

▸ **factory**U(contracts: *`ContractArtifact`[]*, loader: *`Promise`<`any`>*, config?: *[GeneratorConfig](../interfaces/generatorconfig.md)<`U`>*): [Vortex](vortex.md)<`U`>

*Defined in vortex.ts:23*

**Type parameters:**

#### U :  [State](../interfaces/state.md)
**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| contracts | `ContractArtifact`[] | - | 
| loader | `Promise`<`any`> | - | 
| `Default value` config | [GeneratorConfig](../interfaces/generatorconfig.md)<`U`> |  undefined | 

**Returns:** [Vortex](vortex.md)<`U`>

___
<a id="get"></a>

### `<Static>` get

▸ **get**U(): [Vortex](vortex.md)<`U`>

*Defined in vortex.ts:27*

**Type parameters:**

#### U :  [State](../interfaces/state.md)

**Returns:** [Vortex](vortex.md)<`U`>

___

