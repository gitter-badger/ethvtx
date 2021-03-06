import { SagaIterator }                  from 'redux-saga';
import { takeEvery }                     from 'redux-saga/effects';
import { VtxconfigActions }              from '../actions/actionTypes';
import { VtxconfigResetSectionComplete } from './VtxconfigResetSectionComplete';
import { VtxconfigResetSaga }            from './VtxconfigReset';

export function* VtxconfigSagas(): SagaIterator {
    yield takeEvery(VtxconfigActions.VtxconfigResetSectionComplete, VtxconfigResetSectionComplete);
    yield takeEvery(VtxconfigActions.VtxconfigReset, VtxconfigResetSaga);
}
