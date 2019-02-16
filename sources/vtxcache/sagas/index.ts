import { SagaIterator }       from 'redux-saga';
import { takeEvery }          from 'redux-saga/effects';
import { VtxconfigActions }   from '../../vtxconfig/actions/actionTypes';
import { VtxconfigResetSaga } from './VtxconfigReset';

export function* VtxcacheSagas(): SagaIterator {
    yield takeEvery(VtxconfigActions.VtxconfigReset, VtxconfigResetSaga);
}
