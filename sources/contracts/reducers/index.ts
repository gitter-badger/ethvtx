import { Reducer }                    from 'redux';
import { ContractsSection }           from '../../state/contracts';
import {
    ContractsActions,
    ContractsActionTypes,
    IContractsAddSpec, IContractsNew, IContractsRemove,
    IContractsRemoveSpec, IContractsReset, IContractsSetSigner
}                                     from '../actions/actionTypes';
import { ContractsAddSpecReducer }    from './ContractsAddSpec';
import { ContractsRemoveSoecReducer } from './ContractsRemoveSpec';
import { ContractsResetReducer }      from './ContractsReset';
import { ContractsSetSignerReducer }  from './ContractsSetSigner';
import { ContractsNewReducer }        from './ContractsNew';
import { ContractsRemoveReducer }     from './ContractsRemove';

const initial_state: ContractsSection = {
    specs: {},
    instances: {},
    signer: null,
    alias: {}
};

export const ContractsReducer: Reducer<ContractsSection, ContractsActionTypes> =
    (state: ContractsSection = initial_state, action: ContractsActionTypes): ContractsSection => {
        switch (action.type) {
            case ContractsActions.ContractsAddSpec:
                return ContractsAddSpecReducer(state, action as IContractsAddSpec);
            case ContractsActions.ContractsRemoveSpec:
                return ContractsRemoveSoecReducer(state, action as IContractsRemoveSpec);
            case ContractsActions.ContractsReset:
                return ContractsResetReducer(state, action as IContractsReset);
            case ContractsActions.ContractsSetSigner:
                return ContractsSetSignerReducer(state, action as IContractsSetSigner);
            case ContractsActions.ContractsNew:
                return ContractsNewReducer(state, action as IContractsNew);
            case ContractsActions.ContractsRemove:
                return ContractsRemoveReducer(state, action as IContractsRemove);
            default:
                return state;
        }
    };
