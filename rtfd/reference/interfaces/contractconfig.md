[Vortex](../README.md) > [ContractConfig](../interfaces/contractconfig.md)

# Interface: ContractConfig

This interface is only here to merge all configuration types into one interface. Have a look at each configuration separately ! For Embark users => [EmbarkContracts](embarkcontracts.md), for Truffle ones => [TruffleContracts](trufflecontracts.md), and for users that use no frameworks [ManualContracts](manualcontracts.md).

## Hierarchy

↳  [EmbarkContracts](embarkcontracts.md)

↳  [TruffleContracts](trufflecontracts.md)

↳  [ManualContracts](manualcontracts.md)

**↳ ContractConfig**

## Index

### Properties

* [chains](contractconfig.md#chains)
* [embark_contracts](contractconfig.md#embark_contracts)
* [manual_contracts](contractconfig.md#manual_contracts)
* [network_contracts](contractconfig.md#network_contracts)
* [preloaded_contracts](contractconfig.md#preloaded_contracts)
* [truffle_contracts](contractconfig.md#truffle_contracts)
* [type](contractconfig.md#type)

---

## Properties

<a id="chains"></a>

### `<Optional>` chains

**● chains**: *`any`*

*Inherited from [EmbarkContracts](embarkcontracts.md).[chains](embarkcontracts.md#chains)*

*Defined in forge.ts:48*

___
<a id="embark_contracts"></a>

### `<Optional>` embark_contracts

**● embark_contracts**: *`any`*

*Inherited from [EmbarkContracts](embarkcontracts.md).[embark_contracts](embarkcontracts.md#embark_contracts)*

*Defined in forge.ts:49*

___
<a id="manual_contracts"></a>

### `<Optional>` manual_contracts

**● manual_contracts**: *[ManualContractArtifactMap](manualcontractartifactmap.md)*

*Inherited from [ManualContracts](manualcontracts.md).[manual_contracts](manualcontracts.md#manual_contracts)*

*Defined in forge.ts:70*

___
<a id="network_contracts"></a>

### `<Optional>` network_contracts

**● network_contracts**: *`TruffleArtifact`[]*

*Inherited from [TruffleContracts](trufflecontracts.md).[network_contracts](trufflecontracts.md#network_contracts)*

*Defined in forge.ts:56*

___
<a id="preloaded_contracts"></a>

### `<Optional>` preloaded_contracts

**● preloaded_contracts**: *`string`[]*

*Inherited from [EmbarkContracts](embarkcontracts.md).[preloaded_contracts](embarkcontracts.md#preloaded_contracts)*

*Overrides [TruffleContracts](trufflecontracts.md).[preloaded_contracts](trufflecontracts.md#preloaded_contracts)*

*Defined in forge.ts:50*

___
<a id="truffle_contracts"></a>

### `<Optional>` truffle_contracts

**● truffle_contracts**: *`TruffleArtifact`[]*

*Inherited from [TruffleContracts](trufflecontracts.md).[truffle_contracts](trufflecontracts.md#truffle_contracts)*

*Defined in forge.ts:54*

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Inherited from [Contracts](contracts.md).[type](contracts.md#type)*

*Overrides [Contracts](contracts.md).[type](contracts.md#type)*

*Defined in forge.ts:44*

___

