import { State }           from '../../state';
import { VtxContract }     from '../VtxContract';
import { address_checker } from '../../utils/address_checker';
import { is_alias }        from '../../utils/is_alias';

/**
 * @description Get the list of contract specifications available in the store
 * @param state
 */
export const getContractsSpecList = (state: State): string[] => Object.keys(state.contracts.specs)
    .filter((key: string) => state.contracts.specs[key] !== undefined);

/**
 * @description Get a contract instance
 * @param state
 * @param contract_name
 * @param address_or_alias
 */
export const getContract = (state: State, contract_name: string, address_or_alias: string): VtxContract => {
    try {
        address_or_alias = address_checker(address_or_alias);
    } catch (e) {
        throw new Error(`Invalid provided address or alias: ${address_or_alias}`);
    }

    if (is_alias(address_or_alias)) {
        try {
            address_or_alias = state.contracts.alias[contract_name][address_or_alias].address;
        } catch (e) {
            return undefined;
        }

    }

    if (!state.contracts.instances[contract_name] || !state.contracts.instances[contract_name][address_or_alias]) return undefined;

    return state.contracts.instances[contract_name][address_or_alias].instance;
};

interface ContractList {
    [key: string]: string[];
}

/**
 * @description Get the list of contract instances
 * @param state
 */
export const getContractList = (state: State): ContractList => {
    const ret: ContractList = {};

    for (const contract of Object.keys(state.contracts.instances)) {
        ret[contract] = Object.keys(state.contracts.instances[contract]);
    }

    return ret;
};
