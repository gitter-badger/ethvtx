import { SagaIterator }     from 'redux-saga';
import { takeEvery }        from 'redux-saga/effects';
import { VtxconfigActions } from '../../vtxconfig/actions/actionTypes';
import { VtxconfigReset }   from './VtxconfigReset';
import { Dispatch }         from 'redux';
import { State }            from '../../state';
import { VtxpollActions }   from '../actions/actionTypes';
import { VtxpollKill }      from './VtxpollKill';

export function* VtxpollSagas(dispatch: Dispatch, state_getter: () => State): SagaIterator {
    yield takeEvery(VtxconfigActions.VtxconfigReset, VtxconfigReset, dispatch, state_getter);
    yield takeEvery(VtxpollActions.VtxpollKill, VtxpollKill);
}
