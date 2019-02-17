import { Account }         from '../../state/accounts';
import { State }           from '../../state';
import { address_checker } from '../../utils/address_checker';
import { is_alias }        from '../../utils/is_alias';

export const getAccount = (state: State, address_or_alias: string): Account => {
    address_or_alias = address_checker(address_or_alias);

    if (is_alias(address_or_alias)) {
        address_or_alias = state.accounts.alias[address_or_alias];
        if (address_or_alias === undefined) {
            return undefined;
        }
    }

    return state.accounts.accounts[address_or_alias];
};

export const getAccountList = (state: State): string[] => Object.keys(state.accounts.accounts);
