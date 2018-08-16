<!--
  Title: Vortex
  Description: And Ethereum Dapp React and Redux tool taking care of transactions, smart contracts and many more !
  Author: mortimr
  -->
<div align="center" >
<img width="25%" src="https://raw.githubusercontent.com/Horyus/vort_x/master/.assets/vortex.png">
</div>

[![Build Status](https://travis-ci.org/Horyus/vortex.svg?branch=develop)](https://travis-ci.org/Horyus/vortex)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![](https://sourcerer.io/fame/mortimr/Horyus/vortex/images/0)](https://sourcerer.io/fame/mortimr/Horyus/vortex/links/0)
[![](https://sourcerer.io/fame/mortimr/Horyus/vortex/images/1)](https://sourcerer.io/fame/mortimr/Horyus/vortex/links/1)
[![](https://sourcerer.io/fame/mortimr/Horyus/vortex/images/2)](https://sourcerer.io/fame/mortimr/Horyus/vortex/links/2)
[![](https://sourcerer.io/fame/mortimr/Horyus/vortex/images/3)](https://sourcerer.io/fame/mortimr/Horyus/vortex/links/3)
[![](https://sourcerer.io/fame/mortimr/Horyus/vortex/images/4)](https://sourcerer.io/fame/mortimr/Horyus/vortex/links/4)
[![](https://sourcerer.io/fame/mortimr/Horyus/vortex/images/5)](https://sourcerer.io/fame/mortimr/Horyus/vortex/links/5)
[![](https://sourcerer.io/fame/mortimr/Horyus/vortex/images/6)](https://sourcerer.io/fame/mortimr/Horyus/vortex/links/6)
[![](https://sourcerer.io/fame/mortimr/Horyus/vortex/images/7)](https://sourcerer.io/fame/mortimr/Horyus/vortex/links/7)


## Introduction

Vortex is an Ethereum Dapp redux store that handles transactions, smart contracts, events, accounts, method calls, web3 status, IPFS fetching ... Very easy to use with React, it will allow your Dapp to be more reactive (no need to refresh anything), and will make less requests with web3, for even better results. You can also fetch IPFS data and cache it into the redux store.


* Load all your contracts inside a Redux Store instantly
* Keep in cache all the informations you need about your actions
* Track precisely how your transactions are doing
* Track the balance of your account
* Keep constant data from your contracts in your cache
* Get notified when an Event is triggered
* The Backlink will refresh all your data ONLY when trully necessary (NO MORE POLLING)
* Support for Solidity Events
* Access all this data accross your React Components
* Use [already built components](https://github.com/Horyus/vortex-components)
* Make your Dapp simply incredible !

----

### [Documentation](https://vort-x.readthedocs.io/en/develop/react/)

### [Vortex Components](https://github.com/Horyus/vortex-components)

### [Embark Demonstration](https://github.com/Horyus/vortex-demo-embark)

### [Truffle Demonstration](https://github.com/Horyus/vortex-demo)

### [Contribution](./CONTRIBUTING.md)

----

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
import Web3 from 'web3'; // 1.0.0-beta.34+ is preferable :)
import SimpleStorageContractInstance from 'Embark/contracts/SimpleStorage';
import * as Chains from '../chains.json';


...


<VortexGate

    // Configure your contracts
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

    // Provide a custom Web3 loader
    loader={VortexMetamaskLoader(Web3)}

    // Configure your IPFS Endpoint
    ipfs_config={{
        host: 'ipfs.infura.io',
        port: '5001',
        options: {
            protocol: 'https'
        }
    }}


    // Configure your backlink endpoint
    backlink_config={{
         url: {
             "mainnet": "wss://mainnet.infura.io/ws",
             "default": "ws://localhost:8545/ws"
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
import Web3 from 'web3'; // 1.0.0-beta.34+ is preferable :)
import SimpleStorage from '../build/contracts/SimpleStorage.json'


...


<VortexGate

    // Configure your contracts
    contracts={{
        type: 'truffle',
        truffle_contracts: [SimpleStorage],
        preloaded_contracts: ["SimpleStorage"],
        network_contracts: [SimpleStorage]
    }}

    // Provide a custom Web3 loader
    loader={VortexMetamaskLoader(Web3)}

    // Configure your IPFS Endpoint
    ipfs_config={{
        host: 'ipfs.infura.io',
        port: '5001',
        options: {
            protocol: 'https'
        }
    }}


    // Configure your backlink endpoint
    backlink_config={{
         url: {
             "mainnet": "wss://mainnet.infura.io/ws",
             "default": "ws://localhost:8545/ws"
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

