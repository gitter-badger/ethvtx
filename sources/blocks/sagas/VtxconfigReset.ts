import { IVtxconfigReset }               from '../../vtxconfig/actions/actionTypes';
import { SagaIterator }                  from 'redux-saga';
import { call, put, select }             from 'redux-saga/effects';
import { VtxconfigResetSectionComplete } from '../../vtxconfig/actions/actions';
import { State }                         from '../../state/index';
import { BlocksInitialHeight }           from '../actions/actions';

export function* VtxconfigResetSaga(action: IVtxconfigReset): SagaIterator {

    const state: State = yield select();

    if (state.blocks.initial_height === null) {
        const current_height: number = yield call(state.vtxconfig.web3.eth.getBlockNumber);
        yield put(BlocksInitialHeight(current_height));
    }

    yield put(VtxconfigResetSectionComplete('blocks'));
}
