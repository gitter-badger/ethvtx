/// <reference types="node" />
import { Action } from 'redux';
export declare const VtxpollActions: {
    VtxpollSetIntervalId: string;
    VtxpollKill: string;
};
export interface IVtxpollSetIntervalId extends Action<string> {
    interval_id: NodeJS.Timeout;
}
export interface IVtxpollKill extends Action<string> {
}
export declare type VtxpollActionTypes = IVtxpollSetIntervalId | IVtxpollKill;
