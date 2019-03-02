import { Action }      from 'redux';

export const ContractsActions = {
    ContractsAddSpec: 'CONTRACTS_ADD_SPEC',
    ContractsRemoveSpec: 'CONTRACTS_REMOVE_SPEC',
    ContractsReset: 'CONTRACTS_RESET',
    ContractsNew: 'CONTRACTS_NEW',
    ContractsRemove: 'CONTRACTS_REMOVE',
    ContractsSetSigner: 'CONTRACTS_SET_SIGNER',
    ContractsSend: 'CONTRACTS_SEND'
};

export interface IContractsSend extends Action<string> {
    call: () => Promise<string>;
    id: number;
    method: string;
    args: any[];
    contract: string;
    address: string;
}

export interface IContractsAddSpec extends Action<string> {
    name: string;
    abi: any;
    bin?: string;
    permanent?: boolean;
}

export interface IContractsRemoveSpec extends Action<string> {
    name: string;
}

export interface IContractsNew extends Action<string> {
    contract: string;
    address: string;
    alias?: string;
    permanent?: boolean;
}

export interface IContractsRemove extends Action<string> {
    contract: string;
    address_or_alias: string;
}

export interface IContractsReset extends Action<string> {
}

export type ContractsActionTypes =
    IContractsAddSpec
    | IContractsRemoveSpec
    | IContractsNew
    | IContractsRemove;
