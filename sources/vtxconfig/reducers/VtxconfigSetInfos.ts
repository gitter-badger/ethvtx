import { Reducer }            from 'redux';
import { IVtxconfigSetInfos } from '../actions/actionTypes';
import { VtxconfigSection }   from '../../state/vtxconfig';

export const VtxconfigSetInfosReducer: Reducer<VtxconfigSection, IVtxconfigSetInfos> =
    (state: VtxconfigSection, action: IVtxconfigSetInfos): VtxconfigSection => ({
        ...state,
        coinbase: action.coinbase,
        net: action.net
    });
