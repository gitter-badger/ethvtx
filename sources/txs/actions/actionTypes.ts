import { Action }            from 'redux';
import { TxInfos, TxStatus } from '../../state/txs';

export const TxActions = {
    TxAdd: 'TX_ADD',
    TxRemove: 'TX_REMOVE',
    TxSet: 'TX_SET',
    TxError: 'TX_ERROR',
    TxSend: 'TX_SEND',
    TxReset: 'TX_RESET',
    TxFollow: 'TX_FOLLOW'
};

export interface ITxAdd extends Action<string> {
    tx_hash: string;
    tx_infos: Partial<TxInfos>;
    tx_id?: number;
}

export interface ITxRemove extends Action<string> {
    tx_hash: string;
}

export interface ITxSet extends Action<string> {
    tx_hash: string;
    tx_infos: Partial<TxInfos>;
    status?: TxStatus;
}

export interface ITxError extends Action<string> {
    tx_hash: string;
    e: Error;
}

export interface ITxSend extends Action<string> {
    tx_infos: Partial<TxInfos>;
    tx_id?: number;
}

export interface ITxFollow extends Action<string> {
    tx_hash: string;
    tx_id?: number;
}

export interface ITxReset extends Action<string> {
}

export type TxActionTypes =
    | ITxAdd
    | ITxRemove
    | ITxSet
    | ITxError
    | ITxSend
    | ITxReset
    | ITxFollow;
