import { Action } from 'redux';

export const VtxpollActions = {
    VtxpollSetIntervalId: 'VTXPOLL_SET_INTERVAL_ID',
    VtxpollIncTimer: 'VTXPOLL_INC_TIMER',
    VtxpollKill: 'VTXPOLL_KILL'
};

export interface IVtxpollSetIntervalId extends Action<string> {
    interval_id: NodeJS.Timeout;
}

export interface IVtxpollIncTimer extends Action<string> {
}

export interface IVtxpollKill extends Action<string> {
}

export type VtxpollActionTypes =
    | IVtxpollSetIntervalId
    | IVtxpollIncTimer
    | IVtxpollKill;
