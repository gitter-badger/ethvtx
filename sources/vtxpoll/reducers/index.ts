import { VtxpollSection }              from '../../state/vtxpoll';
import {
    IVtxpollIncTimer,
    IVtxpollSetIntervalId,
    VtxpollActions,
    VtxpollActionTypes
}                                      from '../actions/actionTypes';
import { Reducer }                     from 'redux';
import { VtxpollSetIntervalIdReducer } from './VtxpollSetIntervalId';
import { getCorePolls }                from '../core_entities';
import { VtxpollIncTimerReducer }      from './VtxpollIncTimer';

const initialState: VtxpollSection = {
    actions: getCorePolls(),
    timer: 0
};

export const VtxpollReducer: Reducer<VtxpollSection, VtxpollActionTypes> =
    (state: VtxpollSection = initialState, action: VtxpollActionTypes): VtxpollSection => {
        switch (action.type) {
            case VtxpollActions.VtxpollSetIntervalId:
                return VtxpollSetIntervalIdReducer(state, action as IVtxpollSetIntervalId);
            case VtxpollActions.VtxpollIncTimer:
                return VtxpollIncTimerReducer(state, action as IVtxpollIncTimer);
            default:
                return state;
        }
    };
