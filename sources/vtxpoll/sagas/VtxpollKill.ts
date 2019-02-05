import { SagaIterator }         from 'redux-saga';
import { State }                from '../../state';
import { put, select }          from 'redux-saga/effects';
import { IVtxpollKill }         from '../actions/actionTypes';
import { VtxpollSetIntervalId } from '../actions/action';

export function* VtxpollKill(action: IVtxpollKill): SagaIterator {
    const state: State = yield select();

    if (state.vtxpoll.interval_id) {
        clearInterval(state.vtxpoll.interval_id);
        yield put(VtxpollSetIntervalId(undefined));
    }
}
