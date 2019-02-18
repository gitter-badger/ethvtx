import {
    IVtxpollKill,
    IVtxpollSetIntervalId,
    VtxpollActions
} from './actionTypes';

export const VtxpollSetIntervalId = (interval_id: NodeJS.Timeout): IVtxpollSetIntervalId => ({
    type: VtxpollActions.VtxpollSetIntervalId,
    interval_id
});

export const VtxpollKill = (): IVtxpollKill => ({
    type: VtxpollActions.VtxpollKill
});
