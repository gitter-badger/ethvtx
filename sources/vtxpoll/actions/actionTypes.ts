import { Action } from 'redux';

export const VtxpollActions = {
    VtxpollSetIntervalId: 'VTXPOLL_SET_INTERVAL_ID',
    VtxpollKill: 'VTXPOLL_KILL'
};

export interface IVtxpollSetIntervalId extends Action<string> {
    interval_id: NodeJS.Timeout;
}

export interface IVtxpollKill extends Action<string> {
}

export type VtxpollActionTypes =
    | IVtxpollSetIntervalId
    | IVtxpollKill;
