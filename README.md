# ethvtx

the Ethereum-Ready Redux Store Configuration

| Service | Status |
| :---: | :---: |
| Travis CI | [![Build Status](https://travis-ci.org/Horyus/ethvtx.svg?branch=develop)](https://travis-ci.org/Horyus/ethvtx) |
| Coveralls | [![Coverage Status](https://coveralls.io/repos/github/Horyus/ethvtx/badge.svg?branch=develop)](https://coveralls.io/github/Horyus/ethvtx?branch=develop) |

## Introduction

`ethvtx` is a `redux` set of reducers and `redux-saga` set of asynchronous actions that handle Ethereum related actions and data fetching.

A complete set of **dispatcher** and **getters** are exposed to the developer and can be used directly inside any of the `mapStateToProps` or `mapDispatchToProps` functions to properly recover informations or emit actions.

You can broadcast **transactions**, adding the transaction hash in the store. Information and status will be fetched and provided directly from the redux store. You can also only provide a transaction hash and informations about it will be fetched too.

You can fetch informations about **accounts**. The store will fetch the balance, the transaction count and will tell if the address is a contract or not. By default, the coinbase is added. You can dynamically add any account and the polling engine will start fetching its informations.

## Installation

## React Usage

### Example: React Showcase Application

The repository contains a complete React Typescript Showcase.

To setup the showcase, run:
```shell
git clone https://github.com/horyus/ethvtx
cd ethvtx
npm install
npm run build
cd examples
npm run setup
```

Then, from the examples directory, run:
```shell
npm run start
```

You can then visit the app from http://localhost:3000.
Be sure to have [Metamask](https://metamask.io/) installed, and quadruple-check that you aren't on the Main Ethereum Network before testing transactions :) .
