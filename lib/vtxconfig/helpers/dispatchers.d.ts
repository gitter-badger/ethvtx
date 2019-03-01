import { Dispatch } from 'redux';
export declare const init: (dispatch: Dispatch<import("redux").AnyAction>, web3: any) => void;
export declare const setWeb3: (dispatch: Dispatch<import("redux").AnyAction>, web3: any) => void;
export declare const reset: (dispatch: Dispatch<import("redux").AnyAction>) => void;
export declare const start: (dispatch: Dispatch<import("redux").AnyAction>, enable?: () => Promise<void>) => void;
