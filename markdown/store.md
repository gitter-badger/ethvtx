# Store Architecture

## Prelude

This document defines how the Redux Store is going to store its data. 

## Architecture

#### Definitions

###### `Transaction Status`
```
// deftype TX_STATUS_BROADCASTED
{
    type: "BROADCASTED",
    transaction_hash: string,
    timestamp: number
}

// deftype TX_STATUS_RECEIPT
{
    type: "RECEIPT",
    transaction_hash: string,
    transaction_receipt: object,
    timestamp: number
}

// deftype TX_STATUS_CONFIRMED
{
    type: "CONFIRMED",
    transaction_hash: string,
    transaction_confirmation_receipt: object,
    timestamp: number
}

// deftype TX_STATUS_ERROR
{
    type: "ERROR",
    transaction_hash: string,
    error: object
}
```

```
// deftype FEED_NEW_TX
{
    action: "NEW_TRANSACTION",
    txHash: string
}

// deftype FEED_NEW_CONTRACT
{
    action: "NEW_CONTRACT",
    contract_name: string,
    contract_address: string
}
```

```
{
	web3: {
		initialized: boolean,
		networkid: number,
		_: Web3
	},
	tx: {
		...
		${txHash}: {
			status: TX_STATUS_BROADCASTED | TX_STATUS_RECEIPT | TX_STATUS_CONFIRMED | TX_STATUS_ERROR
			txparams: {
				from: string,
				to: string,
				value: string,
				gas: number,
				gasPrice: number,
				data: string,
				nonce: number
			}
		}
		...
	},
	contracts: {
		...
		${contractName}: {
			...
			deployed: {
				[web3 contract instance](https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethcontract)
			}
			...
			${address}: {
				[web3 contract instance](https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethcontract)
			}
			...
		}
		...
	},
	feed: [
		...
        FEED_NEW_TX | FEED_NEW_CONTRACT
		...
	]
}
```

## `web3`

This section handles web3 status. It fetches an instance of web3 from the browser and sets the status accordingly.

#### `initialized`

`true` if properly loaded, `false` of no web3 found or not on required network.

#### `networkid`

Current network Id

#### `_`

Web3 instance that got recovered from the browser.

## `tx`

This section stores all transaction in an object (mapping transaction hashes to their data).

#### `${txHash}`

Can be any transaction hash, will be set to `undefined` if no informations about the transaction exist.

#### `status`

Status informations about how the transaction is going.

#### `status.type`

String between `TODO`, `TODO`.

#### `status.data`

A sub-object with different fields depending on the status type.

#### `txParams`

Params that the transaction was containing.

## `contracts`

This section stores all live smart contracts. Each contract has a mapping within that stores every instance loaded during the session, mapped on their addresses.

#### `${contractName}`

Solidity name of the contract.

#### `deployed`

Special field, this one is the default instance found in the artifacts from truffle. It will also be mapped to its address.

#### `${address}`

Contains instance of smart contract at specific address.

## `feed`

The feed will contain all the actions emitted by the user, with their types. A component that monitors transactions should plug itself on both tx and feedm and wait for new feed informations about transactions.