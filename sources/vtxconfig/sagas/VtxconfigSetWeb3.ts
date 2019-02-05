import { SagaIterator }                       from 'redux-saga';
import { put }                                from 'redux-saga/effects';
import { IVtxconfigSetWeb3 }                  from '../actions/actionTypes';
import { VtxconfigReset, VtxconfigSetStatus } from '../actions/actions';
import { VtxStatus }                          from '../../state/vtxconfig';

export function* VtxconfigSetWeb3Saga(action: IVtxconfigSetWeb3): SagaIterator {
    yield put(VtxconfigSetStatus(VtxStatus.Loading));
    yield put(VtxconfigReset());
}
