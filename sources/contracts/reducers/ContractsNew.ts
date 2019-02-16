import { Reducer }          from 'redux';
import { ContractsSection } from '../../state/contracts';
import { IContractsNew }    from '../actions/actionTypes';
import { VtxContract }      from '../VtxContract';

export const ContractsNewReducer: Reducer<ContractsSection, IContractsNew> =
    (state: ContractsSection, action: IContractsNew): ContractsSection => {
        if (!action.alias) {
            return {
                ...state,
                instances: {
                    ...state.instances,
                    [action.contract]: {
                        ...state.instances[action.contract],
                        [action.address]: {
                            permament: action.permanent,
                            instance: new VtxContract(action.contract, state.signer, action.address, state.specs[action.contract].abi, state.specs[action.contract].bin)
                        }
                    }
                }
            };
        }

        return {
            ...state,
            instances: {
                ...state.instances,
                [action.contract]: {
                    ...state.instances[action.contract],
                    [action.address]: {
                        permament: action.permanent,
                        instance: new VtxContract(action.contract, state.signer, action.address, state.specs[action.contract].abi, state.specs[action.contract].bin)
                    }
                }
            },
            alias: {
                ...state.alias,
                [action.contract]: {
                    ...state.alias[action.contract],
                    [action.alias]: {
                        address: action.address,
                        permanent: action.permanent
                    }
                }
            }
        };
    };
