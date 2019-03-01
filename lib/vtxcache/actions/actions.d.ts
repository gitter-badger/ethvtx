import { IVtxcacheCreate, IVtxcacheReset, IVtxcacheSetData, IVtxcacheSetError, IVtxcacheSetRequired, VtxcacheCb } from './actionTypes';
export declare const VtxcacheCreate: <T = any>(signature: string, cb: VtxcacheCb<T>) => IVtxcacheCreate<any>;
export declare const VtxcacheSetData: <T = any>(signature: string, data: T, block: number) => IVtxcacheSetData<any>;
export declare const VtxcacheSetRequired: (signature: string) => IVtxcacheSetRequired;
export declare const VtxcacheSetError: (signature: string, error: Error, block: number) => IVtxcacheSetError;
export declare const VtxcacheReset: () => IVtxcacheReset;
