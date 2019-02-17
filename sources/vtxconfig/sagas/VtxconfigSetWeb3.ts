import { SagaIterator }       from 'redux-saga';
import { call, put }          from 'redux-saga/effects';
import { IVtxconfigSetWeb3 }  from '../actions/actionTypes';
import { VtxconfigSetStatus } from '../actions/actions';
import { VtxStatus }          from '../../state/vtxconfig';

export function* VtxconfigSetWeb3Saga(action: IVtxconfigSetWeb3): SagaIterator {
    yield put(VtxconfigSetStatus(VtxStatus.Loading));
}
