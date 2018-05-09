# Store Architecture

## Prelude

This document defines how the Redux Store is going to store its data. 

## Architecture

#### Definitions

###### `Web3 Status`

```javascript
// deftype WEB3_LOADING
{
    status: 'LOADING'
}

// deftype WEB3_LOADED
{
    status: 'LOADED',
    network_id: number,
    _: Web3
}

// deftype WEB3_LOAD_ERROR
{
    status: 'LOAD_ERROR',
    error: object
}

// deftype WEB3_NETWORK_ERROR
{
    status: 'NETWORK_ERROR',
    network_id: number,
}
```

###### `Transaction Status`

```javascript
// deftype TX_STATUS_BROADCASTED
{
    type: 'BROADCASTED',
    transaction_hash: string,
    timestamp: number
}

// deftype TX_STATUS_RECEIPT
{
    type: 'RECEIPT',
    transaction_hash: string,
    transaction_receipt: object,
    timestamp: number
}

// deftype TX_STATUS_CONFIRMED
{
    type: 'CONFIRMED',
    transaction_hash: string,
    transaction_receipt: object,
    transaction_confirmation_count: number,
    timestamp: number
}

// deftype TX_STATUS_ERROR
{
    type: 'ERROR',
    transaction_hash: string,
    error: object,
    timestamp: number
}
```

###### `Transaction Content`

```javascript
// deftype TX_ARGUMENTS
{
    from: any,
    to: any,
    value: any,
    data: any,
    gas: any,
    gasPrice: any,
    nonce: any,
}

// deftype RAW_TX_ARGUMENTS
{
    signed_transaction: string
}
```

###### `Contract Objects`
```javascript
// deftype CONTRACT_LOADING
{
    status: 'CONTRACT_LOADING'
}

// deftype CONTRACT_LOADED
{
    status: 'CONTRACT_LOADED',
    _: web3.eth.Contract
}

// deftype CONTRACT_ERROR
{
    status: 'CONTRACT_ERROR',
    error: object
}
```

###### `Feed Objects`

```javascript
// deftype FEED_NEW_TX
{
    action: 'NEW_TRANSACTION',
    transaction_hash: string,
    timestamp: number
}

// deftype FEED_NEW_CONTRACT
{
    action: 'NEW_CONTRACT',
    contract_name: string,
    contract_address: string,
    timestamp: number
}
```

#### General State

```javascript
{
    accounts: {
        ...
        configuration: {
            refresh_rate: number
        }
        ...
        coinbase: {
            balance: string,
            coinbase: boolean
        },
        ...
        [account_address]: {
            balance: string,
            coinbase: boolean
        }
        ...
    },
	web3: {
	    WEB3_LOADING | WEB3_LOADED | WEB3_LOAD_ERROR | WEB3_NETWORK_ERROR
	},
	tx: {
		...
		[transaction_hash]: {
			status: TX_STATUS_BROADCASTED | TX_STATUS_RECEIPT | TX_STATUS_CONFIRMED | TX_STATUS_ERROR
			transaction_arguments: {
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
		[contract_name]: {
			...
			artifact: {
			    Truffle Artifact
			}
			...
			[contract_address]: {
			    CONTRACT_LOADING | CONTRACT_LOADED | CONTRACT_ERROR
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

An object of type `TX_STATUS_BROADCASTED`, `TX_STATUS_RECEIPT`, `TX_STATUS_CONFIRMED` or `TX_STATUS_ERROR`.

#### `txParams`

Params that the transaction was containing.

## `contracts`

This section stores all live smart contracts. Each contract has a mapping within that stores every instance loaded during the session, mapped on their addresses.

#### `${contractName}`

Solidity name of the contract.

#### `artifact`

Truffle Artifact generated when compiling contracts with truffle.

#### `deployed`

Special field, this one is the default instance found in the artifacts from truffle. It will also be mapped to its address. It is a [web3 contract instance](https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethcontract).

#### `${address}`

Contains instance of smart contract at specific address.

## `feed`

The feed will contain all the actions emitted by the user, with their types. A component that monitors transactions should plug itself on both tx and feedm and wait for new feed informations about transactions.
