# Store Architecture


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
    instance: VortexContract
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

// deftype FEED_NEW_ERROR
{
    action: 'NEW_ERROR',
    error: {
        reason: any,
        message: string,
        when: string
    }
    timestamp: number
}

// deftype FEED_NEW_ACCOUNT
{
    action: 'NEW_ACCOUNT',
    account: string,
    coinbase: boolean
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
        FEED_NEW_TX | FEED_NEW_CONTRACT | FEED_NEW_ERROR | FEED_NEW_ACCOUNT
		...
	]
}
```
