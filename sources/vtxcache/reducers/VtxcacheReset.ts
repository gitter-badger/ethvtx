import { Reducer }         from 'redux';
import { VtxcacheSection } from '../../state/vtxcache';
import { IVtxcacheReset }  from '../actions/actionTypes';

export const VtxcacheResetReducer: Reducer<VtxcacheSection, IVtxcacheReset> =
    (state: VtxcacheSection, action: IVtxcacheReset): VtxcacheSection => ({
        store: {}
    });
