import { Reducer }              from 'redux';
import { ContractsSection }     from '../../state/contracts';
import { IContractsRemoveSpec } from '../actions/actionTypes';

export const ContractsRemoveSoecReducer: Reducer<ContractsSection, IContractsRemoveSpec> =
    (state: ContractsSection, action: IContractsRemoveSpec): ContractsSection => ({
        ...state,
        specs: {
            ...state.specs,
            [action.name]: undefined
        },
        web3: state.web3
    });
