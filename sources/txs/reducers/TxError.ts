import { Reducer }             from 'redux';
import { TxSection, TxStatus } from '../../state/txs';
import { ITxError }            from '../actions/actionTypes';

export const TxErrorReducer: Reducer<TxSection, ITxError> = (state: TxSection, action: ITxError): TxSection => ({
    ...state,
    [action.tx_hash]: {
        ...state[action.tx_hash],
        status: TxStatus.Error
    }
});
