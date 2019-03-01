import { Dispatch } from 'redux';
import { TxInfos } from '../../state/txs';
export declare const addTransaction: (dispatch: Dispatch<import("redux").AnyAction>, tx_hash: string, tx_infos?: Partial<TxInfos>) => void;
export declare const removeTransaction: (dispatch: Dispatch<import("redux").AnyAction>, tx_hash: string) => void;
export declare const sendTransaction: (dispatch: Dispatch<import("redux").AnyAction>, tx_infos: Partial<TxInfos>) => number;
export declare const followTransaction: (dispatch: Dispatch<import("redux").AnyAction>, tx_hash: string) => number;
