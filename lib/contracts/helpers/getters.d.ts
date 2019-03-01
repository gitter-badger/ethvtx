import { State } from '../../state';
import { VtxContract } from '../VtxContract';
/**
 * @description Get the list of contract specifications available in the store
 * @param state
 */
export declare const getContractsSpecList: (state: State) => string[];
/**
 * @description Get a contract instance
 * @param state
 * @param contract_name
 * @param address_or_alias
 */
export declare const getContract: (state: State, contract_name: string, address_or_alias: string) => VtxContract;
interface ContractList {
    [key: string]: string[];
}
/**
 * @description Get the list of contract instances
 * @param state
 */
export declare const getContractList: (state: State) => ContractList;
export {};
