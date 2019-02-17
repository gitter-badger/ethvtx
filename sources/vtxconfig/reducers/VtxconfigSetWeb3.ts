import { Reducer }                     from 'redux';
import { IVtxconfigSetWeb3 }           from '../actions/actionTypes';
import { VtxconfigSection, VtxStatus } from '../../state/vtxconfig';

export const VtxconfigSetWeb3Reducer: Reducer<VtxconfigSection, IVtxconfigSetWeb3> =
    (state: VtxconfigSection, action: IVtxconfigSetWeb3): VtxconfigSection => ({
        ...state,
        web3: action.web3,
        last_error: null,
        status: VtxStatus.Loading,
        coinbase: null,
        net: null
    });
