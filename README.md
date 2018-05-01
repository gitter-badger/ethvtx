<div align="center" >
<img width="25%" src="https://raw.githubusercontent.com/Horyus/vort_x/master/.assets/vortex.png">
</div>

![CI](https://teamcity.rotaru.fr:2702/app/rest/builds/buildType:VortX_VortXBuild/statusIcon)


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction

VortΞx is an Ethereum Dapp redux store that handles transactions, smart contracts, events ... Very easy to use, it allows you to monitor transactions and store contracts in a Redux Store. It also handles web3 loading, and checks if wether or not we are on a valid network.

Transactions are added manually by their transaction hashes.
Contracts Artifacts are loading upon construction, and deployed instances too.
Runtime Contracts can be loaded if appropriate artifact was loaded. You can manage multiple contracts of the same type.

## Architecture Documentation

* [Store](https://gitlab.com/FlexProject/vortex/blob/master/markdown/store.md)
* [Actions](https://gitlab.com/FlexProject/vortex/blob/master/markdown/actions.md)
* [Reducers](https://gitlab.com/FlexProject/vortex/blob/master/markdown/reducers.md)
* [Saga](https://gitlab.com/FlexProject/vortex/blob/master/markdown/saga.md)
