import { Reducer }          from 'redux';
import { VtxcacheSection }  from '../../state/vtxcache';
import { IVtxcacheSetData } from '../actions/actionTypes';

export const VtxcacheSetDataReducer: Reducer<VtxcacheSection, IVtxcacheSetData> =
    (state: VtxcacheSection, action: IVtxcacheSetData): VtxcacheSection => ({
        ...state,
        store: {
            ...state.store,
            [action.signature]: {
                ...state.store[action.signature],
                data: action.data,
                block: action.block,
                required: false
            }
        }
    });
