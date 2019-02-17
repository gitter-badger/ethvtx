import { Reducer }          from 'redux';
import { ContractsSection } from '../../state/contracts';
import { IContractsRemove } from '../actions/actionTypes';
import { is_alias }         from '../../utils/is_alias';

export const ContractsRemoveReducer: Reducer<ContractsSection, IContractsRemove> =
    (state: ContractsSection, action: IContractsRemove): ContractsSection => {
        let address = action.address_or_alias;
        if (is_alias(action.address_or_alias)) {
            address = state.alias[action.contract][action.address_or_alias].address;
            delete state.alias[action.contract][action.address_or_alias];

            if (Object.keys(state.alias[action.contract]).length === 0) {
                delete state.alias[action.contract];
            }
        }

        delete state.instances[action.contract][address];

        if (Object.keys(state.instances[action.contract]).length === 0) {
            delete state.instances[action.contract];
        }

        return {
            ...state,
            instances: {
                ...state.instances
            },
            alias: {
                ...state.alias
            },
            web3: state.web3
        };

    };
