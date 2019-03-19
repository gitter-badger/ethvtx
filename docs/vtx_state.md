---
id: vtx_state
title: ΞVTX State
sidebar_label: State
---

All these types are accessible in TS from `ethvtx/lib/state`.
We will only cover the state of `vtxconfig` and `vtxevents`, the rest is not interesting to you.

## VtxStatus

You know this one, it's the enum with all the `ethvtx` statuses.

```jsx
{
    Loading = 0,
    Authorizing = 1,
    Idle = 2,
    Loaded = 3,
    WrongNet = 4,
    Error = 5,
    Unauthorized = 6
}
```

## VtxResetStatus

This one stores the current reset status of all the other sections. When a reset occurs, all these are set to false, and each section has the responsability to warn `vtxconfig` that its reset is done. Only once all of them are set to `true`, the status of `ethvtx` might be updated. Don't worry everything is handled behind the scenes.

```jsx
{
    txs: boolean;
    blocks: boolean;
    vtxcache: boolean;
    contracts: boolean;
    vtxconfig: boolean;
    accounts: boolean;
}
```

## VtxConfigAllowedNetworks

This is the data structure to store the genesis hashes provided when [**configuring the store**](/ethvtx/docs/creating_store#initial-state-and-configuration)

```jsx
{
    [key: number]: string;
}
```

## VtxConfigSection

This section can be accessed at `state.vtxconfig`.

As you can see, here you can find the `coinbase`, the `net_id`, the `web3` instance and the `status` of the `ethvtx` store.

```jsx
{
    web3: Web3;
    last_error: Error;
    status: VtxStatus;
    reset_status: VtxResetStatus;
    poll_timer: number;
    confirmation_treshold: number;
    coinbase: string;
    net_id: number;
    allowed_nets: VtxconfigAllowedNetworks;
}
```

## VtxEventType

Enumeration, representing the type of event that occured in the store.

```jsx
{
    Error = 0,

    TxBroadcasted,
    TxFollowed,
    TxConfirmed,
    TxError,
    TxInvalid,

    ContractsSpecAdded,
    ContractsSpecRemoved,
    ContractsInstanceAdded,
    ContractsInstanceRemoved,
    ContractsTxBroadcasted
}
```


## VtxEvent

```jsx
{
    type: VtxEventType
}
```

There is one TS interface for each event type. All of them are defined [**here**](https://github.com/horyus/ethvtx/blob/develop/sources/state/vtxevents.ts)

## VtxEventsSection

What you can access at `state.vtxevents` is an array of `VtxEvent`.

