import { VtxContract } from '../contracts/VtxContract';
import { Signer }      from 'ethers';

export interface ContractsSpec {
    name: string;
    abi: any;
    bin: string;
    permanent: boolean;
}

export interface ContractsSpecStore {
    [key: string]: ContractsSpec;
}

export interface ContractsInstancesStore {
    [key: string]: { permament: boolean, instance: VtxContract };
}

export interface ContractsTypeStore {
    [key: string]: ContractsInstancesStore;
}

export interface Alias {
    address: string;
    permanent: boolean;
}

export interface AliasStore {
    [key: string]: Alias;
}

export interface ContractAliasStore {
    [key: string]: AliasStore;
}

export interface ContractsSection {
    specs: ContractsSpecStore;
    instances: ContractsTypeStore;
    signer: Signer;
    alias: ContractAliasStore;
}
