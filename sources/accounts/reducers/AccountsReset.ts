import { Reducer }                      from 'redux';
import { AccountsSection }              from '../../state/accounts';
import { IAccountsAdd, IAccountsReset } from '../actions/actionTypes';

export const AccountsResetReducer: Reducer<AccountsSection, IAccountsReset> = (state: AccountsSection, action: IAccountsReset): AccountsSection => ({
    accounts: {},
    alias: {}
});
