# Store Architecture

## Prelude

This document defines how the Redux Store is going to store its data. 

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
			status: {
				type: string,
				data: object
			}
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
				web3 contract instance
			}
			...
			${address}: {
				web3 contract instance
			}
			...
		}
		...
	},
	feed: [
		...
		{
			action: string,
			data: object
		}
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