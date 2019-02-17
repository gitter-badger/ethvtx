import { SagaIterator }                   from 'redux-saga';
import { put, select }                    from 'redux-saga/effects';
import { State }                          from '../../state';
import { IVtxconfigResetSectionComplete } from '../actions/actionTypes';
import { VtxconfigResetComplete }         from '../actions/actions';

export function* VtxconfigResetSectionComplete(action: IVtxconfigResetSectionComplete): SagaIterator {
    const state: State = yield select();

    if (state.vtxconfig.reset_status.txs
        && state.vtxconfig.reset_status.blocks
        && state.vtxconfig.reset_status.vtxcache
        && state.vtxconfig.reset_status.vtxconfig
        && state.vtxconfig.reset_status.contracts) {
        yield put(VtxconfigResetComplete());
    }
}
