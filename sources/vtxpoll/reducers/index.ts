import { VtxpollSection }              from '../../state/vtxpoll';
import {
    IVtxpollSetIntervalId,
    VtxpollActions,
    VtxpollActionTypes
}                                      from '../actions/actionTypes';
import { Reducer }                     from 'redux';
import { VtxpollSetIntervalIdReducer } from './VtxpollSetIntervalId';
import { InitialState }                from '../../state/index';

export const VtxpollReducer: Reducer<VtxpollSection, VtxpollActionTypes> =
    (state: VtxpollSection = InitialState.vtxpoll, action: VtxpollActionTypes): VtxpollSection => {
        switch (action.type) {
            case VtxpollActions.VtxpollSetIntervalId:
                return VtxpollSetIntervalIdReducer(state, action as IVtxpollSetIntervalId);
            default:
                return state;
        }
    };
