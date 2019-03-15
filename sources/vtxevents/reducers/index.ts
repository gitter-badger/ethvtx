import { VtxeventsSection }    from '../../state/vtxevents';
import { Reducer }             from 'redux';
import {
    IVtxeventsAdd,
    VtxeventsActions,
    VtxeventsActionTypes
}                              from '../actions/actionTypes';
import { VtxeventsAddReducer } from './VtxeventsAdd';
import { InitialState }        from '../../state/index';

export const VtxeventsReducer: Reducer<VtxeventsSection[], VtxeventsActionTypes> =
    (state: VtxeventsSection[] = InitialState.vtxevents, action: VtxeventsActionTypes): VtxeventsSection[] => {
        switch (action.type) {
            case VtxeventsActions.VtxeventsAdd:
                return VtxeventsAddReducer(state, action as IVtxeventsAdd);
            default:
                return state;
        }
    };
