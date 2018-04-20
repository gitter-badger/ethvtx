# Actions Architecture

## Prelude

This document defines all public actions on the redux store.

## Architecture

#### Transactions

###### `REGISTER_TRANSACTION`

```
    REGISTER_TRANSACTION
    -> txHash: string
    --------------------------
    ++ feed: FEED_NEW_TX
    ++ tx: ${txHash} => object
```

This action will allow you to register a new transaction from its transaction hash. This call will add a new event in the feed section,
allowing any component that listens for new transactions to be notified. THis will also create a new entry in the tx object, defining the transaction
parameters and current state.

#### Contracts

###### `REGISTER_CONTRACT`

```
    REGISTER_CONTRACT
    -> contractName: string
    -> address: string
    -----------------------
    ++ feed: FEED_NEW_CONTRACT
    ++ contract: ${contractName} => ( ${address} => Web3.eth.Contract )
```

This action will trigger a chain of events and will load the specified Smart Contract instance.
