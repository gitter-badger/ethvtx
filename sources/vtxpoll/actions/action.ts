import {
    IVtxpollIncTimer,
    IVtxpollKill,
    IVtxpollSetIntervalId,
    VtxpollActions
} from './actionTypes';

export const VtxpollSetIntervalId = (interval_id: NodeJS.Timeout): IVtxpollSetIntervalId => ({
    type: VtxpollActions.VtxpollSetIntervalId,
    interval_id
});

export const VtxpollIncTimer = (): IVtxpollIncTimer => ({
    type: VtxpollActions.VtxpollIncTimer
});

export const VtxpollKill = (): IVtxpollKill => ({
    type: VtxpollActions.VtxpollKill
});
