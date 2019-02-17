import { VtxContract } from '../contracts/VtxContract';

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

export interface ContractAlias {
    address: string;
    permanent: boolean;
}

export interface AliasStore {
    [key: string]: ContractAlias;
}

export interface ContractAliasStore {
    [key: string]: AliasStore;
}

export interface ContractsSection {
    specs: ContractsSpecStore;
    instances: ContractsTypeStore;
    web3: Web3;
    alias: ContractAliasStore;
}
