import {
    IVtxcacheCreate, IVtxcacheReset,
    IVtxcacheSetData,
    IVtxcacheSetError,
    IVtxcacheSetRequired,
    VtxcacheActions,
    VtxcacheCb
} from './actionTypes';

export const VtxcacheCreate = <T = any>(signature: string, cb: VtxcacheCb<T>): IVtxcacheCreate => ({
    type: VtxcacheActions.VtxcacheCreate,
    signature,
    cb
});

export const VtxcacheSetData = <T = any>(signature: string, data: T, block: number): IVtxcacheSetData => ({
    type: VtxcacheActions.VtxcacheSetData,
    signature,
    data,
    block
});

export const VtxcacheSetRequired = (signature: string): IVtxcacheSetRequired => ({
    type: VtxcacheActions.VtxcacheSetRequired,
    signature
});

export const VtxcacheSetError = (signature: string, error: Error, block: number): IVtxcacheSetError => ({
    type: VtxcacheActions.VtxcacheSetError,
    signature,
    error,
    block
});

export const VtxcacheReset = (): IVtxcacheReset => ({
    type: VtxcacheActions.VtxcacheReset
});
