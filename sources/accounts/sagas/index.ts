import { SagaIterator }                      from 'redux-saga';
import { takeEvery }                         from 'redux-saga/effects';
import { VtxconfigResetSectionCompleteSaga } from './VtxconfigResetSectionComplete';
import { VtxconfigActions }                  from '../../vtxconfig/actions/actionTypes';

export function* AccountsSagas(): SagaIterator {
    yield takeEvery(VtxconfigActions.VtxconfigResetSectionComplete, VtxconfigResetSectionCompleteSaga);
}
