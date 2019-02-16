import { Action } from 'redux';

export const VtxcacheActions = {
    VtxcacheCreate: 'VTXCACHE_CREATE',
    VtxcacheSetData: 'VTXCACHE_SET_DATA',
    VtxcacheSetError: 'VTXCACHE_SET_ERROR',
    VtxcacheSetRequired: 'VTXCACHE_SET_REQUIRED',
    VtxcacheReset: 'VTXCACHE_RESET'
};

export type VtxcacheCb<T> = (block: number) => Promise<T>;

export interface IVtxcacheCreate<T = any> extends Action<string> {
    signature: string;
    cb: VtxcacheCb<T>;
}

export interface IVtxcacheSetData<T = any> extends Action<string> {
    signature: string;
    data: T;
    block: number;
}

export interface IVtxcacheSetRequired extends Action<string> {
    signature: string;
}

export interface IVtxcacheSetError extends Action<string> {
    signature: string;
    error: Error;
    block: number;
}

export interface IVtxcacheReset extends Action<string> {
}

export type VtxcacheActionTypes =
    IVtxcacheCreate
    | IVtxcacheSetData
    | IVtxcacheSetRequired
    | IVtxcacheSetError
    | IVtxcacheReset;
