[VortΞx](../README.md) > [VortexContract](../classes/vortexcontract.md)

# Class: VortexContract

## Hierarchy

**VortexContract**

## Index

### Constructors

* [constructor](vortexcontract.md#constructor)

### Methods

* [getData](vortexcontract.md#getdata)
* [vortexCall](vortexcontract.md#vortexcall)
* [callSignature](vortexcontract.md#callsignature)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new VortexContract**(artifact: *`ContractArtifact`*, address: *`string`*, coinbase: *`string`*, web3: *`any`*): [VortexContract](vortexcontract.md)

*Defined in contracts/VortexContract.ts:76*

**Parameters:**

| Param | Type |
| ------ | ------ |
| artifact | `ContractArtifact` | 
| address | `string` | 
| coinbase | `string` | 
| web3 | `any` | 

**Returns:** [VortexContract](vortexcontract.md)

___

## Methods

<a id="getdata"></a>

### `<Private>` getData

▸ **getData**(methodName: *`string`*, txArguments: *[VortexTransactionArguments](../interfaces/vortextransactionarguments.md)*, ...methodArguments: *`any`[]*): `any`

*Defined in contracts/VortexContract.ts:28*

**Parameters:**

| Param | Type |
| ------ | ------ |
| methodName | `string` | 
| txArguments | [VortexTransactionArguments](../interfaces/vortextransactionarguments.md) | 
| `Rest` methodArguments | `any`[] | 

**Returns:** `any`

___
<a id="vortexcall"></a>

### `<Private>` vortexCall

▸ **vortexCall**(methodName: *`string`*, methodAbiIndex: *`number`*, txArguments: *[VortexTransactionArguments](../interfaces/vortextransactionarguments.md)*, ...methodArguments: *`any`[]*): `Promise`<`any`>

*Defined in contracts/VortexContract.ts:41*

**Parameters:**

| Param | Type |
| ------ | ------ |
| methodName | `string` | 
| methodAbiIndex | `number` | 
| txArguments | [VortexTransactionArguments](../interfaces/vortextransactionarguments.md) | 
| `Rest` methodArguments | `any`[] | 

**Returns:** `Promise`<`any`>

___
<a id="callsignature"></a>

### `<Static>` callSignature

▸ **callSignature**(...methodArguments: *`any`[]*): `string`

*Defined in contracts/VortexContract.ts:24*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` methodArguments | `any`[] | 

**Returns:** `string`

___

