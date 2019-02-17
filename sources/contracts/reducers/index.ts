import { Reducer }                    from 'redux';
import { ContractsSection }           from '../../state/contracts';
import {
    ContractsActions,
    ContractsActionTypes,
    IContractsAddSpec, IContractsNew, IContractsRemove,
    IContractsRemoveSpec, IContractsReset
}                                                                    from '../actions/actionTypes';
import { ContractsAddSpecReducer }                                   from './ContractsAddSpec';
import { ContractsRemoveSoecReducer }                                from './ContractsRemoveSpec';
import { ContractsResetReducer }                                     from './ContractsReset';
import { ContractsNewReducer }                                       from './ContractsNew';
import { ContractsRemoveReducer }                                    from './ContractsRemove';
import { IVtxconfigSetWeb3, VtxconfigActions, VtxconfigActionTypes } from '../../vtxconfig/actions/actionTypes';
import { VtxconfigSetWeb3Reducer }                                   from './VtxconfigSetWeb3';

const initial_state: ContractsSection = {
    specs: {},
    instances: {},
    web3: null,
    alias: {}
};

export const ContractsReducer: Reducer<ContractsSection, ContractsActionTypes> =
    (state: ContractsSection = initial_state, action: ContractsActionTypes | VtxconfigActionTypes): ContractsSection => {
        switch (action.type) {
            case ContractsActions.ContractsAddSpec:
                return ContractsAddSpecReducer(state, action as IContractsAddSpec);
            case ContractsActions.ContractsRemoveSpec:
                return ContractsRemoveSoecReducer(state, action as IContractsRemoveSpec);
            case ContractsActions.ContractsReset:
                return ContractsResetReducer(state, action as IContractsReset);
            case ContractsActions.ContractsNew:
                return ContractsNewReducer(state, action as IContractsNew);
            case ContractsActions.ContractsRemove:
                return ContractsRemoveReducer(state, action as IContractsRemove);
            case VtxconfigActions.VtxconfigSetWeb3:
                return VtxconfigSetWeb3Reducer(state, action as IVtxconfigSetWeb3);
            default:
                return state;
        }
    };
