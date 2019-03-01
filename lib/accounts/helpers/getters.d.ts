import { Account } from '../../state/accounts';
import { State } from '../../state';
export declare const getAccount: (state: State, address_or_alias: string) => Account;
export declare const getAccountList: (state: State) => string[];
