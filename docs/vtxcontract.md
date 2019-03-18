---
id: vtxcontract
title: VtxContract
sidebar_label: VtxContract
---

`VtxContract` is `ethvtx`'s wrapper around web3's contract interface. It's important to use it as it has a lot of side mechanisms needed to have a proper and optimized data refresh flow. The `getters` will help you very easily recover your instance, this is what you can do with it.

## Call constant methods

Let's say we have a contract of type `SimpleStorage`, we loaded it with the alias `@default`, and it has a constant call method `getData()` that returns an `uint`.

Look how easy it is to recover this value.

```jsx

const mapStateToProps = (state) => ({
    value: getContract(state, 'SimpleStorage', '@default').fn.getData()
});

```

Of course, the first time you call this method, it will return undefined. But it will trigger mechanisms that will ask for the polling engine to fetch its result. This is very useful in React Apps, the component connected on this call will be updated **ONLY** when a new value is fetched. The whole refresh process is explained in the [**Contract Introduction**](/ethvtx/docs/contracts_intro)

## Call transaction methods

You can very easily make transaction calls.

Let's say we have a contract of type `SimpleStorage`, we loaded it with the alias `@default`, and it has a transaction call method `setData(uint)`

That's how you make the call.

```jsx

const mapStateToProps = (state) => ({
    set_value: (value) => getContract(state, 'SimpleStorage', '@default').fn.setData(value, {from: state.vtxconfig.coinbase})
});

// And just call it somewhere in your component, let's say when the user submits a form
...
onSubmit = (new_value) => this.props.set_value(new_value)
...

```

## Catch EVM Events

You will also have the ability to catch events broadcasted by the smart contract.

We do not need a `ws` connection, our workflow is entirely based on refreshing data only when a new block is available, so the web3 method `getPastEvents` is just perfect for `ethvtx`.

By default, all the events from the `initial_block` will be fetched as soon as this call is made. The `initial_block` is the block number fetched when the app starts.

Let's say we have a contract of type `SimpleStorage`, we loaded it with the alias `@default`, and it has an event `ValueChanged(address indexed who, uint new_value)` that is emitted as soon as the value is changed in the contract.

```

// You can fetch all the events emitted by the contract ...
const mapStateToProps = (state) => ({
    all_events: getContract(state, 'SimpleStorage', '@default').events.ValueChanged()
})

```

```

// ... or you can use the filter on indexed parameters 
const mapStateToProps = (state) => ({
    only_my_events: getContract(state, 'SimpleStorage', '@default').events.ValueChanged({who: state.vtxconfig.coinbase})
})

```

