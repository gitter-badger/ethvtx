import { VtxpollSection }   from '../../state/vtxpoll';
import { Reducer }          from 'redux';
import { IVtxpollIncTimer } from '../actions/actionTypes';

export const VtxpollIncTimerReducer: Reducer<VtxpollSection, IVtxpollIncTimer> =
    (state: VtxpollSection, action: IVtxpollIncTimer): VtxpollSection => ({
        ...state,
        timer: state.timer + 1
    });
