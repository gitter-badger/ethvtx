/// <reference types="node" />
import { State } from './index';
import { Dispatch } from 'redux';
export declare type VtxPollCb = (state: State, emit: Dispatch, new_block: boolean) => Promise<void>;
export interface VtxpollEntity {
    interval: number;
    cb: VtxPollCb;
    name: string;
}
export interface VtxpollSection {
    actions: VtxpollEntity[];
    timer: number;
    interval_id?: NodeJS.Timeout;
}
