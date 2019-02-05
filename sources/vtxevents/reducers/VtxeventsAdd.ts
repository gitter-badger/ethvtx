import { Reducer }          from 'redux';
import { VtxeventsSection } from '../../state/vtxevents';
import { IVtxeventsAdd }    from '../actions/actionTypes';

export const VtxeventsAddReducer: Reducer<VtxeventsSection[], IVtxeventsAdd> =
    (state: VtxeventsSection[], action: IVtxeventsAdd): VtxeventsSection[] => [...state, action.event];
