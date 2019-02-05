import { VtxeventsSection } from '../../state/vtxevents';
import { Action }           from 'redux';

export const VtxeventsActions = {
    VtxeventsAdd: 'VTXEVENTS_ADD'
};

export interface IVtxeventsAdd extends Action<string> {
    event: VtxeventsSection;
}

export type VtxeventsActionTypes = IVtxeventsAdd;
