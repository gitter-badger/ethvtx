import { Reducer }             from 'redux';
import { IVtxconfigSetStatus } from '../actions/actionTypes';
import { VtxconfigSection }    from '../../state/vtxconfig';

export const VtxconfigSetStatusReducer: Reducer<VtxconfigSection, IVtxconfigSetStatus> =
    (state: VtxconfigSection, action: IVtxconfigSetStatus): VtxconfigSection => ({
        ...state,
        status: action.status
    });
