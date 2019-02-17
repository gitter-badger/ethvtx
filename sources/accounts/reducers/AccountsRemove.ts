import { Reducer }         from 'redux';
import { AccountsSection } from '../../state/accounts';
import { IAccountsRemove } from '../actions/actionTypes';
import { is_alias }        from '../../utils/is_alias';

export const AccountsRemoveReducer: Reducer<AccountsSection, IAccountsRemove> = (state: AccountsSection, action: IAccountsRemove): AccountsSection => {
    if (is_alias(action.address_or_alias)) {
        const address = state.alias[action.address_or_alias];
        delete state.accounts[address];
        delete state.alias[action.address_or_alias];
        return {
            ...state
        };
    } else {
        for (const alias of Object.keys(state.alias)) {
            if (state.alias[alias] === action.address_or_alias) {
                delete state.alias[alias];
                break ;
            }
        }
        delete state.accounts[action.address_or_alias];
        return {
            ...state
        };
    }
};
