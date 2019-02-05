import { VtxpollSection }        from '../../state/vtxpoll';
import { Reducer }               from 'redux';
import { IVtxpollSetIntervalId } from '../actions/actionTypes';

export const VtxpollSetIntervalIdReducer: Reducer<VtxpollSection, IVtxpollSetIntervalId> =
    (state: VtxpollSection, action: IVtxpollSetIntervalId): VtxpollSection => ({
        ...state,
        interval_id: action.interval_id
    });
