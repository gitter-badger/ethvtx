<div align="center" >
<img width="25%" src="https://gitlab.com/FlexProject/vortex/raw/master/.assets/vortex.png">
</div>

Welcome to the VortΞx documentation. This document will describe how you can harvest the potential of Redux+React in Dapps throught VortΞx.

## Introduction

As a Dapp developer, I went to some hackathons with a clear idea in mind: show that it is possible to create a Decentralized Application in a short period of time with the right tools. The main problem was how all these informations were gathered, and how you can easily get lost and can easily make superfluous requests to web3. This package was inspired by Drizzle, and should help Dapp developers that seek a library giving them reactive data.

VortΞx is a Redux Store manager, that creates a Dapp-Ready store, and allows anyone to plug its own reducers and make them interact with the ones already existing. This store will allow you to keep your contracts and transactions informations across your whole application. Perfectly suited for React, components can be "mounted" on specific contracts or transactions and get updated as soon as we have new informations coming. No need for polling, everything is handled in the Redux Sagas.

## Concepts

VortΞx is working around 5 major parts. Each part has its own actions and reducers and can be used to retrieved informations.

The first part is **Web3** and will allow you to be alerted when the requested Web3 instance is actually loaded. Placed in the right component, you can decide if wether or not you have to load your app. This is what the VortexPortal component is doing. The Web3 section will also give access to the loaded Web3 instance, and can check network compatibility (and report invalid network).

The second part is **Tx** and will allow you to track your transactions. Every transactions emitted from Web3 or from a Contract will be listed in the Tx section, and you'll be able to access informations about its resolution (or its errors). Mounted in a component, it will update its State only when new informations are gathered. Very powerful tool to give visualization to your users.

The third part is **Contract** and will store any requested contract. When creating a Vortex instance, you pass Truffle Artifacts. Vortex will look up for any deployed Smart Contract on the current network inside the Truffle Artifact. Also you will be able to instanciate new ones at specific addresses. The Contract section will allow you to monitor outgoing contract calls, and refresh constant calls automatically. This is the core section, allowing you to use your Smart Contracts in a whole different way; no more multiple imports or loadings of the same contract instance again.

The fourth part is **Feed** and will store a list of events. Theses events can be new contract, new transactions, new errors or new accounts. This section is very useful if you want to manage a list of components that are connected to the different types of events. You will just have to filter the array on the specific feed event your are looking for, and your state will be updated as soon as there is change.

The fifth part is **Accounts** and will store accounts in a map. These accounts are refreshed on specific timeout, or when transaction included them (`to` or `from`) is emitted from the client.

# Components

With VortΞx comes [VortΞx Components](./tutorial.md#vortexgate), a set of React Components and Providers that will help you and guide you while using VortΞx. You can directly use them to develop your app as they are very generic, or you can simply look at their code to understand how to use VortΞx. Aynway, VortΞx should be very easy to use for anyone that is familiar with Redux.

## Tutorial

Want to learn how to trully harvest the power of the VortΞx ? [Let's go !](./tutorial.md)

