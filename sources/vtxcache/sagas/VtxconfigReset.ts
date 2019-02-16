import { IVtxconfigReset }               from '../../vtxconfig/actions/actionTypes';
import { SagaIterator }                  from 'redux-saga';
import { VtxcacheReset }                 from '../actions/actions';
import { put }                           from 'redux-saga/effects';
import { VtxconfigResetSectionComplete } from '../../vtxconfig/actions/actions';

export function* VtxconfigResetSaga(action: IVtxconfigReset): SagaIterator {
    yield put(VtxcacheReset());
    yield put(VtxconfigResetSectionComplete('vtxcache'));
}
