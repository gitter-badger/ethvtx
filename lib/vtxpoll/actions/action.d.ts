/// <reference types="node" />
import { IVtxpollKill, IVtxpollSetIntervalId } from './actionTypes';
export declare const VtxpollSetIntervalId: (interval_id: NodeJS.Timeout) => IVtxpollSetIntervalId;
export declare const VtxpollKill: () => IVtxpollKill;
