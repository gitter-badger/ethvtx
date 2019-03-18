---
id: accounts_dispatchers
title: Accounts Dispatchers
sidebar_label: Dispatchers
---

All these dispatchers are accessible from from `ethvtx/lib/dispatchers`;

To efficiently dispatch actions in the store, you can use the accounts dispatchers.
All dispatchers take a dispatch function as first argument.

## addAccount(dispatch: Dispatch, address: string, alias?: string): void

To add an account in the store, use this dispatcher. After adding an account in the store, its informations will start getting fetched and updated accordingly.

```jsx

const mapDispatchToProps = (dispatch) => ({
    add_account: (address) => addAccount(dispatch, address),
    add_account_with_alias: (address, alias) => addAccount(dispatch, address, alias)
});

```

## removeAccount(dispatch: Dispatch, address_or_alias: string): void

You can of course remove an account from the store.

```jsx

const mapDispatchToProps = (dispatch) => ({
    rm_account: (address_or_alias) => removeAccount(dispatch, address_or_alias)
});

```

