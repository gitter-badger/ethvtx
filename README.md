<!--
  Title: Vortex
  Description: And Ethereum Dapp React and Redux tool taking care of transactions, smart contracts and many more !
  Author: mortimr
  -->
<div align="center" >
<img width="25%" src="https://raw.githubusercontent.com/Horyus/vort_x/master/.assets/vortex.png">
</div>

![CI](https://teamcity.rotaru.fr:2702/app/rest/builds/buildType:VortX_VortXBuild/statusIcon)


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction

Vortex is an Ethereum Dapp redux store that handles transactions, smart contracts, accounts, method calls, web3 status ... Very easy to use with React, it will allow your Dapp to be more reactive (no need to refresh anything), and will make less requests with web3, for even better results. You can also fetch IPFS data and cache it into the redux store.


## Installation

```
npm install --save vort_x vort_x-components
```

## Get started

### For [Embark](https://embark.status.im) Users ...

```jsx
import {
    VortexGate,
    VortexWeb3Loaded,
    VortexWeb3Loading,
    VortexWeb3LoadError,
    VortexWeb3NetworkError,
    VortexWeb3Locked,
    VortexMetamaskLoader
} from 'vort_x-components';
import Web3 from 'web3'; // 1.0.0+ is preferable :)
import SimpleStorageContractInstance from 'Embark/contracts/SimpleStorage';
import * as Chains from '../chains.json';


...


<VortexGate
    contracts={{
        type: 'embark',
        embark_contracts: {
            SimpleStorage: SimpleStorageContract
        },
        chains: Chains,
        preloaded_contracts: [
            "SimpleStorage"
        ]
    }}
    loader={VortexMetamaskLoader(Web3)}
    ipfs_config={{
        host: 'ipfs.infura.io',
        port: '5001',
        options: {
            protocol: 'https'
        }
    }}>

    <VortexWeb3Loaded>
        // Renders this when everything went well.
    </VortexWeb3Loaded>

    <VortexWeb3Loading>
        // Renders this when web3 is still loading.
    </VortexWeb3Loading>

    <VortexWeb3LoadError>
        // Renders this when an error occured while loading web3.
    </VortexWeb3LoadError>

    <VortexWeb3NetworkError>
        // Renders this if the contracts are not on the current network
    </VortexWeb3NetworkError>

    <VortexWeb3Locked>
        // Renders this if the wallet provider (Metamask, Mist) is locked
    </VortexWeb3Locked>

</VortexGate>
```

### ... and for [Truffle](https://embark.status.im) Users.

```jsx
import {
    VortexGate,
    VortexWeb3Loaded,
    VortexWeb3Loading,
    VortexWeb3LoadError,
    VortexWeb3NetworkError,
    VortexWeb3Locked,
    VortexMetamaskLoader
} from 'vort_x-components';
import Web3 from 'web3'; // 1.0.0+ is preferable :)
import SimpleStorage from '../build/contracts/SimpleStorage.json'


...


<VortexGate
    contracts={{
        type: 'truffle',
        truffle_contracts: [SimpleStorage],
        preloaded_contracts: ["SimpleStorage"],
        network_contracts: [SimpleStorage]
    }}
    loader={VortexMetamaskLoader(Web3)}
    ipfs_config={{
        host: 'ipfs.infura.io',
        port: '5001',
        options: {
            protocol: 'https'
        }
    }}>

    <VortexWeb3Loaded>
        // Renders this when everything went well.
    </VortexWeb3Loaded>

    <VortexWeb3Loading>
        // Renders this when web3 is still loading.
    </VortexWeb3Loading>

    <VortexWeb3LoadError>
        // Renders this when an error occured while loading web3.
    </VortexWeb3LoadError>

    <VortexWeb3NetworkError>
        // Renders this if the contracts are not on the current network
    </VortexWeb3NetworkError>

    <VortexWeb3Locked>
        // Renders this if the wallet provider (Metamask, Mist) is locked
    </VortexWeb3Locked>

</VortexGate>
```

----

### [Documentation](https://vort-x.readthedocs.io/)

### [Vortex Components](https://github.com/Horyus/vortex-components)

### [Embark Demonstration](https://github.com/Horyus/vortex-demo-embark)

### [Truffle Demonstration](https://github.com/Horyus/vortex-demo)

### [Contribution](./CONTRIBUTING.md)

