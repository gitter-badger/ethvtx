import { VtxeventsSection } from '../../state/vtxevents';
import {
    IVtxeventsAdd,
    VtxeventsActions,
}                           from './actionTypes';

export const VtxeventsAdd = (event: VtxeventsSection): IVtxeventsAdd => ({
    type: VtxeventsActions.VtxeventsAdd,
    event
});
