import { Dispatch }                          from 'redux';
import { TxAdd, TxFollow, TxRemove, TxSend } from '../actions/actions';
import { TxInfos }                           from '../../state/txs';

export const addTransaction = (dispatch: Dispatch, tx_hash: string, tx_infos?: Partial<TxInfos>): void => {
    dispatch(TxAdd(tx_hash, tx_infos || {}));
};

export const removeTransaction = (dispatch: Dispatch, tx_hash: string): void => {
    dispatch(TxRemove(tx_hash));
};

let tx_id: number = 0;

export const sendTransaction = (dispatch: Dispatch, tx_infos: Partial<TxInfos>): number => {
    dispatch(TxSend(tx_infos, tx_id));
    ++tx_id;
    return tx_id - 1;
};

export const followTransaction = (dispatch: Dispatch, tx_hash: string): number => {
    dispatch(TxFollow(tx_hash, tx_id));
    ++tx_id;
    return tx_id - 1;
};
