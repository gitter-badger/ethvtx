# Reducers Architecture

## Prelude

This document defines how reducers interact with input and state.

## Architecture

#### Web3

###### `LOADED_WEB3`

```javascript
// ------------------ INPUT
// -> web3: Web3
// -> networkId: number
// ------------------

// ------------------------------ PREVIOUS STATE
state.web3 ===  WEB3_LOADING
// ------------------------------ NEXT STATE
state.web3 ===  {
                    status: 'LOADED'
                    netowrk_id: networkId,
                    _: web3
                }
```

###### `LOAD_ERROR_WEB3`

```javascript
// ------------------ INPUT
// -> error: object
// ------------------

// ------------------------------ PREVIOUS STATE
state.web3 ===  WEB3_LOADING
// ------------------------------ NEXT STATE
state.web3 ===  {
                    status: 'LOAD_ERROR',
                    error: error
                }
```

###### `NETWORK_ERROR_WEB3`

```javascript
// ------------------ INPUT
// -> networkId: number
// ------------------

// ------------------------------ PREVIOUS STATE
state.web3 ===  WEB3_LOADING
// ------------------------------ NEXT STATE
state.web3 ===  {
                    status: 'NETWORK_ERROR',
                    network_id: networkId
                }
```

#### Transactions

###### `REGISTER_TRANSACTION`

```javascript
// ------------------ INPUT
// -> txHash : string
// ------------------

// ------------------------------ PREVIOUS STATE
state.tx[txHash] === undefined
// ------------------------------ NEXT STATE
state.tx[txHash] ===    {
                            type: 'BROADCASTED',
                            transaction_hash: txHash,
                            timestamp: Date.now()
                        }
```

###### `TRANSACTION_RECEIPT`

```javascript
// ------------------ INPUT
// -> txHash : string
// -> txReceipt : string
// ------------------

// ------------------------------ PREVIOUS STATE
state.tx[txHash] === TX_STATUS_BROADCASTED
// ------------------------------ NEXT STATE
state.tx[txHash] ===    {
                            type: 'RECEIPT',
                            transaction_hash: txHash,
                            transaction_receipt: txReceipt,
                            timestamp: Date.now()
                        }
```

###### `TRANSACTION_CONFIRMED`

```javascript
// ------------------ INPUT
// -> txHash : string
// -> txConfirmationReceipt : string
// ------------------

// ------------------------------ PREVIOUS STATE
state.tx[txHash] === TX_STATUS_RECEIPT || state.tx[txHash] === TX_STATUS_BROADCAST
// ------------------------------ NEXT STATE
state.tx[txHash] ===    {
                            type: 'CONFIRMED',
                            transaction_hash: txHash,
                            transaction_confirmation_receipt: txConfirmationReceipt,
                            timestamp: Date.now()
                        }
```

###### `TRANSACTION_ERROR`

```javascript
// ------------------ INPUT
// -> txHash : string
// -> error : object
// ------------------

// ------------------------------ PREVIOUS STATE
state.tx[txHash] === TX_STATUS_RECEIPT || state.tx[txHash] === TX_STATUS_BROADCAST
// ------------------------------ NEXT STATE
state.tx[txHash] ===    {
                            type: 'ERROR',
                            transaction_hash: txHash,
                            error: object,
                            timestamp: Date.now()
                        }
```

#### Contract

###### `REGISTER_CONTRACT`

```javascript
// ------------------ INPUT
// -> contractName : string
// -> address : string
// ------------------

// ------------------------------ PREVIOUS STATE
state.contracts[contractName][address] === undefined
// ------------------------------ NEXT STATE
state.contracts[contractName][address] ===  {
                                                status: 'CONTRACT_LOADING'
                                            }

```

###### `CONTRACT_LOADED`

```javascript
// ------------------ INPUT
// -> contractName : string
// -> address : string
// -> instance : web3.eth.Contract
// ------------------

// ------------------------------ PREVIOUS STATE
state.contracts[contractName][address] === CONTRACT_LOADING
// ------------------------------ NEXT STATE
state.contracts[contractName][address] ===  {
                                                status: 'CONTRACT_LOADED',
                                                _: instance
                                            }

```

###### `CONTRACT_ERROR`

```javascript
// ------------------ INPUT
// -> contractName : string
// -> address : string
// -> error : object
// ------------------

// ------------------------------ PREVIOUS STATE
state.contracts[contractName][address] === CONTRACT_LOADING || state.contract[contractName][address] === CONTRACT_LOADED
// ------------------------------ NEXT STATE
state.contracts[contractName][address] ===  {
                                                status: 'CONTRACT_ERROR',
                                                error: error
                                            }

```

#### Feed

###### `NEW_TRANSACTION`

```javascript
// ------------------ INPUT
// -> txHash : string
// ------------------

// ------------------------------ PREVIOUS STATE
state.feed.length === x
// ------------------------------ NEXT STATE
state.feed.length === x + 1
state.feed[x] ===   {
                        action: 'NEW_TRANSACTION',
                        transaction_hash: txHash,
                        timestamp: Date.now()
                    }
```

###### `NEW_CONTRACT`

```javascript
// ------------------ INPUT
// -> contractName: string
// -> contractAddress: string
// ------------------

// ------------------------------ PREVIOUS STATE
state.feed.length === x
// ------------------------------ NEXT STATE
state.feed.length === x + 1
state.feed[x] ===   {
                        action: 'NEW_CONTRACT',
                        contract_name: contractName,
                        contract_adddress: contractAddress,
                        timestamp: Date.now()
                    }
```

