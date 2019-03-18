---
id: ethvtx_status
title: ethvtx status
sidebar_label: ethvtx status
---

All dapps should evaluate their environment and be able to display a status to the user. This will ensure the user is not doing something wrong, and will guide him while using the application.

`ethvtx` will check many things for you and will update its status for you to properly display informations to the user.

## Status Values

| Status | Value | Description |
| :----: | :---: | :---------: |
| Loading | 0 | `ethvtx` is currently loading and will update its status as soon as it finishes loading |
| Authorizing | 1 | `ethvtx` is currently asking for access authorization to the wallet provider. Most of the time, will require a user action in order to grant access |
| Idle | 2 | `ethvtx` is doing nothing. This is the initial state, before calling the `start` method |
| Loaded | 3 | `ethvtx` is ready to be used, all checks have passed |
| WrongNet | 4 | `ethvtx` detected an error on the current network (invalid contracts, invalid genesis block hash) |
| Error | 5 | An error occured. You should check if you properly creating and installed the store in the application |
| Unauthorized | 6 | `ethvtx` tried asking for acces authorization, but got a negative response |

## Recover Current Status Value

I assume you are familiar with `redux` and `react`. This example also assumes that you have properly created the `ethvtx` store and installed it like a regular redux store.

```jsx

import { connect } from 'react-redux';
import { VtxStatus } from 'ethvtx/lib/state';

const StatusChecker = (props) => {
    
    switch (props.status) {
        
        case VtxStatus.Loaded:
            return <p> The store is loaded </p>;
            
        case VtxStatus.WrongNet:
            return <p> Invalid network detected </p>;
            
        case VtxStatus.Error:
            return <p> An Error occured </p>;
            
        case VtxStatus.Unauthorized:
            return <p> You have not granted access to the application </p>;
           
        // This one catches: Loading, Idle and Authorizing 
        default:
            return <p> Loading ... </p>;
    
    }

}

const mapStateToProps = (state) => ({
    status: state.vtxconfig.status
});

// This is the connected component that you want to render
const ConnectedStatusChecker = connect(mapStateToProps)(StatusChecker);

```

As you can see, the status is coming from `vtxconfig`. You have many sections that you can access, and the full state of the `ethvtx` store is defined in the State section.


