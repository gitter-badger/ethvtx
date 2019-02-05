import { IVtxconfigReset }               from '../../vtxconfig/actions/actionTypes';
import { SagaIterator }                  from 'redux-saga';
import { put }                           from 'redux-saga/effects';
import { TxReset }                       from '../actions/actions';
import { VtxconfigResetSectionComplete } from '../../vtxconfig/actions/actions';

export function* VtxconfigReset(action: IVtxconfigReset): SagaIterator {
    yield put(TxReset());
    yield put(VtxconfigResetSectionComplete('txs'));
}
