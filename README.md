# VortΞx

![alt text](https://teamcity.rotaru.fr:2702/app/rest/builds/buildType:VortX_VortXBuild/statusIcon)

## Introduction

VortΞx is an Ethereum Dapp redux store that handles transactions, smart contracts, events ... Very easy to use, it allows you to monitor transactions and store contracts in a Redux Store. It also handles web3 loading, and checks if wether or not we are on a valid network.

Transactions are added manually by their transaction hashes.
Contracts Artifacts are loading upon construction, and deployed instances too.
Runtime Contracts can be loaded if appropriate artifact was loaded. You can manage multiple contracts of the same type.

## Architecture Documentation

* [Store](./markdown/store.md)
* [Actions](./markdown/actions.md)
* [Reducers](./markdown/reducers.md)
* [Saga](./markdown/saga.md)
