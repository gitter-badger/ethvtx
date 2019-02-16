import { Reducer }                                                                      from 'redux';
import { ContractAliasStore, ContractsSection, ContractsSpecStore, ContractsTypeStore } from '../../state/contracts';
import { IContractsReset }                                                              from '../actions/actionTypes';
import { Signer }                                                                       from 'ethers';

const reset_instances = (instances: ContractsTypeStore, signer: Signer): ContractsTypeStore => {
    for (const contract of Object.keys(instances)) {
        for (const instance of Object.keys(instances[contract])) {
            if (!instances[contract][instance].permament) delete instances[contract][instance];
            else instances[contract][instance].instance.reset(signer);
        }

        if (!Object.keys(instances[contract]).length) delete instances[contract];
    }

    return instances;
};

const reset_specs = (specs: ContractsSpecStore): ContractsSpecStore => {
    for (const contract of Object.keys(specs)) {
        if (!specs[contract].permanent) delete specs[contract];
    }

    return specs;
};

const reset_alias = (aliases: ContractAliasStore): ContractAliasStore => {
    for (const contract of Object.keys(aliases)) {
        for (const alias of Object.keys(aliases[contract])) {
            if (!aliases[contract][alias].permanent) delete aliases[contract][alias];
        }

        if (!Object.keys(aliases[contract]).length) delete aliases[contract];
    }

    return aliases;
};

export const ContractsResetReducer: Reducer<ContractsSection, IContractsReset> =
    (state: ContractsSection, action: IContractsReset): ContractsSection => ({
        ...state,
        instances: {
            ...reset_instances(state.instances, state.signer)
        },
        specs: {
            ...reset_specs(state.specs)
        },
        alias: {
            ...reset_alias(state.alias)
        }
    });
