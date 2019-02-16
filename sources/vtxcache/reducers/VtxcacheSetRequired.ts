import { Reducer }              from 'redux';
import { VtxcacheSection }      from '../../state/vtxcache';
import { IVtxcacheSetRequired } from '../actions/actionTypes';

export const VtxcacheSetRequiredReducer: Reducer<VtxcacheSection, IVtxcacheSetRequired> =
    (state: VtxcacheSection, action: IVtxcacheSetRequired): VtxcacheSection => ({
        ...state,
        store: {
            ...state.store,
            [action.signature]: {
                ...state.store[action.signature],
                required: true
            }
        }
    });
