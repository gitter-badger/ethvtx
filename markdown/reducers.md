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