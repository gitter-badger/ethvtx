# Web3

## Description

[Web3](https://github.com/ethereum/web3.js/tree/1.0ES6) is a client-side Ethereum interface that communicates with an Ethereum node. Web3 allows you to broadcast transactions, interact with smart contracts. Pretty much the main tool when working with Ethereum Dapps. Most Dapps nowadays are using [Metamask](https://metamask.io/) to inject a connected Web3 instance in the browser (and will use mobile browsers like [Trust Wallet](https://trustwalletapp.com/), [Cipher Browser](https://www.cipherbrowser.com/) or [Status](https://status.im/), that will act just like Metamask, but on mobiles). So the first thing you want to do when your Dapp loads is to recover the Web3 instance. This is where VortΞx comes into play.

The Web3 section of the store will store informations about current Web3 status. It will tell you if your Web3 instance is properly loaded or not, and if you are on a whitelisted network. It will also store the instance of Web3 in the store and allow you to recover it from your components. When constructing the VortΞx class, you will have to provide a Promise that should resolve in the desired Web3 instance. This allows you to trully master how you want to connect to the Ethereum Blockchain, and manually chose the Web3 version you really want.

## Usage

To load the Web3 instance, you first need to have an instance of VortΞx. Calling [loadWeb3()](./reference/classes/vortex.md#loadweb3) will resolve the Promise you gave to VortΞx. All you have to do is monitor for state changes on the Web3 section and watch if the status goes to `LOADED`, `LOADED_ERROR` or `NETWORK_ERROR`. You can then act accordingly and prompt the user the rest of the Dapp or alert him in case of error. [`state.web3._`](./architecture/store.md#web3)

#### Custom Web3 Resolver

#### Request Web3 Loading

#### Monitor for Web3 State change

