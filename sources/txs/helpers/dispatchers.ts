import { Dispatch }                          from 'redux';
import { TxAdd, TxFollow, TxRemove, TxSend } from '../actions/actions';
import { TxInfos }                           from '../../state/txs';
import { get_tx_id }                         from '../../utils/get_tx_id';

export const addTransaction = (dispatch: Dispatch, tx_hash: string, tx_infos?: Partial<TxInfos>): void => {
    dispatch(TxAdd(tx_hash, tx_infos || {}));
};

export const removeTransaction = (dispatch: Dispatch, tx_hash: string): void => {
    dispatch(TxRemove(tx_hash));
};

export const sendTransaction = (dispatch: Dispatch, tx_infos: Partial<TxInfos>): number => {
    const tx_id = get_tx_id();
    dispatch(TxSend(tx_infos, tx_id));
    return tx_id;
};

export const followTransaction = (dispatch: Dispatch, tx_hash: string): number => {
    const tx_id = get_tx_id();
    dispatch(TxFollow(tx_hash, tx_id));
    return tx_id;
};
