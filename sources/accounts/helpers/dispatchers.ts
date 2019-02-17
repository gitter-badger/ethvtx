import { Dispatch }                    from 'redux';
import { AccountsAdd, AccountsRemove } from '../actions/actions';

export const addAccount = (dispatch: Dispatch, address: string, alias?: string): void => {
    dispatch(AccountsAdd(address, alias));
};

export const removeAccount = (dispatch: Dispatch, address_or_alias: string): void => {
    dispatch(AccountsRemove(address_or_alias));
};
