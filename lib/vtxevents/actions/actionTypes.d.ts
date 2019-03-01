import { VtxeventsSection } from '../../state/vtxevents';
import { Action } from 'redux';
export declare const VtxeventsActions: {
    VtxeventsAdd: string;
};
export interface IVtxeventsAdd extends Action<string> {
    event: VtxeventsSection;
}
export declare type VtxeventsActionTypes = IVtxeventsAdd;
