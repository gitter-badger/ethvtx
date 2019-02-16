import { Reducer }                             from 'redux';
import { VtxcacheSection }                     from '../../state/vtxcache';
import { IVtxcacheSetData, IVtxcacheSetError } from '../actions/actionTypes';

export const VtxcacheSetErrorReducer: Reducer<VtxcacheSection, IVtxcacheSetError> =
    (state: VtxcacheSection, action: IVtxcacheSetError): VtxcacheSection => ({
        ...state,
        store: {
            ...state.store,
            [action.signature]: {
                ...state.store[action.signature],
                error: action.error,
                block: action.block,
                required: false
            }
        }
    });
