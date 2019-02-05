import { Reducer }   from 'redux';
import { TxSection } from '../../state/txs';
import { ITxRemove } from '../actions/actionTypes';

export const TxRemoveReducer: Reducer<TxSection, ITxRemove> = (state: TxSection, action: ITxRemove): TxSection => ({
    ...state,
    [action.tx_hash]: undefined
});
