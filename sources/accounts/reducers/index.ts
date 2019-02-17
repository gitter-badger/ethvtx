import { Reducer }                                                             from 'redux';
import { AccountsSection }         from '../../state/accounts';
import {
    AccountsActions,
    AccountsActionTypes,
    IAccountsAdd,
    IAccountsRemove, IAccountsReset,
    IAccountsSetInfos
} from '../actions/actionTypes';
import { AccountsAddReducer }      from './AccountsAdd';
import { AccountsRemoveReducer }   from './AccountsRemove';
import { AccountsSetInfosReducer } from './AccountsSetInfos';
import { AccountsResetReducer }    from './AccountsReset';

const initial_state: AccountsSection = {
    accounts: {},
    alias: {}
};

export const AccountsReducer: Reducer<AccountsSection, AccountsActionTypes> = (state: AccountsSection = initial_state, action: AccountsActionTypes): AccountsSection => {
    switch (action.type) {
        case AccountsActions.AccountsAdd:
            return AccountsAddReducer(state, action as IAccountsAdd);
        case AccountsActions.AccountsRemove:
            return AccountsRemoveReducer(state, action as IAccountsRemove);
        case AccountsActions.AccountsSetInfos:
            return AccountsSetInfosReducer(state, action as IAccountsSetInfos);
        case AccountsActions.AccountsReset:
            return AccountsResetReducer(state, action as IAccountsReset);
        default:
            return state;
    }
};
