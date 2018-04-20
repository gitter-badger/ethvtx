# Reducers Architecture

## Prelude

This document defines how reducers interact with input and state.

## Architecture

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

