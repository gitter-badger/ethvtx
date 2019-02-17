import { Reducer }                                  from 'redux';
import { VtxconfigSection, VtxStatus }              from '../../state/vtxconfig';
import { IVtxconfigReset } from '../actions/actionTypes';

export const VtxconfigResetReducer: Reducer<VtxconfigSection, IVtxconfigReset> =
    (state: VtxconfigSection, action: IVtxconfigReset): VtxconfigSection =>
        ({
            ...state,
            status: VtxStatus.Loading
        });
