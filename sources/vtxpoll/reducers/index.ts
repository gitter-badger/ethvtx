import { VtxpollSection }              from '../../state/vtxpoll';
import {
    IVtxpollSetIntervalId,
    VtxpollActions,
    VtxpollActionTypes
}                                      from '../actions/actionTypes';
import { Reducer }                     from 'redux';
import { VtxpollSetIntervalIdReducer } from './VtxpollSetIntervalId';
import { getCorePolls }                from '../core_polls';

const initialState: VtxpollSection = {
    actions: getCorePolls(),
    timer: 0
};

export const VtxpollReducer: Reducer<VtxpollSection, VtxpollActionTypes> =
    (state: VtxpollSection = initialState, action: VtxpollActionTypes): VtxpollSection => {
        switch (action.type) {
            case VtxpollActions.VtxpollSetIntervalId:
                return VtxpollSetIntervalIdReducer(state, action as IVtxpollSetIntervalId);
            default:
                return state;
        }
    };
