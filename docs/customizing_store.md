---
id: customizing_store
title: Customizing the store
sidebar_label: Customizing the store
---

If you plan on using your own reducers and sgas, don't worry, we got you covered.

## Custom reducers

```jsx

import { getReducers } from 'ethvtx';

import { formReducer, todoReducer } from './my_reducers';

const custom_reducers = {
    form: formReducer,
    todo: todoReducer
};

const merged_reducers = getReducers(custom_reducers);

```

You should use our function instead of trying to manually merge the reducers: our function will check for reducers collision, and will throw if you try to use a field used by `ethvtx`.

## Custom Initial State

```jsx

import { getInitialState } from 'ethvtx';

const custom_initial_state = {
    form: {
        value: null
    },
    todo: [
        'shopping'
    ]
};

const merged_initial_state = getInitialState(custom_initial_state);

```

Just like the reducers, our function will check for collisions and will throw an error if you try to use a field used by `ethvtx`.

## Custom Sagas

```jsx

import { getSagas } from 'ethvtx';
import { formSaga, todoSaga } from './my_sagas';

...
// Create the store
...

const merged_sagas = getSagas(store, [formSaga, todoSaga]);

```

You should use our function as it properly applies the `fork` effect on all the sagas to create one single root from all the provided sagas.
