import { Reducer }                              from 'redux';
import {
    IVtxconfigResetComplete,
    IVtxconfigResetSectionComplete, IVtxconfigSetInfos,
    IVtxconfigSetStatus,
    IVtxconfigSetWeb3,
    VtxconfigActions,
    VtxconfigActionTypes
} from '../actions/actionTypes';
import { VtxconfigSection, VtxStatus }          from '../../state/vtxconfig';
import { VtxconfigSetWeb3Reducer }              from './VtxconfigSetWeb3';
import { VtxconfigSetStatusReducer }            from './VtxconfigSetStatus';
import { VtxconfigResetSectionCompleteReducer } from './VtxconfigResetSectionComplete';
import { VtxconfigResetCompleteReducer }        from './VtxconfigResetComplete';
import { VtxconfigSetInfosReducer }             from './VtxconfigSetInfos';

const initial: VtxconfigSection = {
    web3: null,
    last_error: null,
    status: VtxStatus.Idle,
    reset_status: {
        txs: false,
        blocks: false,
        vtxcache: false,
        contracts: false,
        vtxconfig: false
    },
    poll_timer: 100,
    confirmation_treshold: 12,
    coinbase: null,
    net: null
};

export const VtxconfigReducer: Reducer<VtxconfigSection, VtxconfigActionTypes> =
    (state: VtxconfigSection = initial, action: VtxconfigActionTypes): VtxconfigSection => {
        switch (action.type) {
            case VtxconfigActions.VtxconfigSetWeb3:
                return VtxconfigSetWeb3Reducer(state, action as IVtxconfigSetWeb3);
            case VtxconfigActions.VtxconfigSetStatus:
                return VtxconfigSetStatusReducer(state, action as IVtxconfigSetStatus);
            case VtxconfigActions.VtxconfigResetSectionComplete:
                return VtxconfigResetSectionCompleteReducer(state, action as IVtxconfigResetSectionComplete);
            case VtxconfigActions.VtxconfigResetComplete:
                return VtxconfigResetCompleteReducer(state, action as IVtxconfigResetComplete);
            case VtxconfigActions.VtxconfigSetInfos:
                return VtxconfigSetInfosReducer(state, action as IVtxconfigSetInfos);
            default:
                return state;
        }
    };
