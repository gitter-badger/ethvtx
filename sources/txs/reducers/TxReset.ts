import { Reducer }   from 'redux';
import { TxSection } from '../../state/txs';
import { ITxReset }  from '../actions/actionTypes';

export const TxResetReducer: Reducer<TxSection, ITxReset> = (state: TxSection, action: ITxReset): TxSection => ({});
