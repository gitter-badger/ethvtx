# Redux Saga Architecture

## Prelude

This document defines Redux Saga Actions, when they are invoked, and what they dispatch afterwards.

## Architecture

#### Transactions

###### `REGISTER_TRANSACTION`

```
on REGISTER_TRANSACTION txHash
-> emit NEW_TRANSACTION txHash
... query web3 for transaction updates
    on 'receipt' : txReceipt
    -> emit TRANSACTION_RECEIPT txHash txReceipt

    on 'confirmation' : txConfirmationReceipt
    -> emit TRANSACTION_CONFIRMATION txHash txConfirmationReceipt

    on 'error' : error
    -> emit TRANSACTION_ERROR txHash error
```

#### Contracts

###### `REGISTER_CONTRACT`

```
on REGISTER_CONTRACT contractName contractAddress
-> emit NEW_CONTRACT contractName contractAddress
... compile contract into instance
    on 'success' : instance
    -> emit CONTRACT_LOADED contractName contractAddress instance

    on 'error' : error
    -> emit CONTRACT_ERROR contractName contractAddress error
```