import { VtxeventsSection }    from '../../state/vtxevents';
import { Reducer }             from 'redux';
import {
    IVtxeventsAdd,
    VtxeventsActions,
    VtxeventsActionTypes
}                              from '../actions/actionTypes';
import { VtxeventsAddReducer } from './VtxeventsAdd';

export const VtxeventsReducer: Reducer<VtxeventsSection[], VtxeventsActionTypes> =
    (state: VtxeventsSection[] = [], action: VtxeventsActionTypes): VtxeventsSection[] => {
        switch (action.type) {
            case VtxeventsActions.VtxeventsAdd:
                return VtxeventsAddReducer(state, action as IVtxeventsAdd);
            default:
                return state;
        }
    };
