---
id: blocks_state
title: Blocks State
sidebar_label: State
---

All these types are accessible in TS from `ethvtx/lib/state`;

## Block

This is all the data available for a block.

```jsx
{
    number: number;
    hash: string;
    parentHash: string;
    mixHash: string;
    nonce: string;
    sha3Uncles: string;
    logsBloom: string;
    transactionsRoot: string;
    stateRoot: string;
    receiptsRoot: string;
    miner: string;
    difficulty: string;
    totalDifficulty: string;
    extraData: string;
    size: number;
    gasLimit: number;
    gasUsed: number;
    timestamp: number;
    transactions: string[];
    uncles: string[];
}
```

## BlockStore

Simple key => value mapping, using height as key.

```jsx
{
    [key: number]: Block;
}
```

## BlockSection

This is what you can access at `state.blocks`.

```jsx
{
    initial_height: number;
    current_height: number;
    blocks: BlockStore;
}
```


