import { IVtxconfigReset }      from '../../vtxconfig/actions/actionTypes';
import { SagaIterator }         from 'redux-saga';
import { State }                from '../../state';
import { call, put, select }    from 'redux-saga/effects';
import { Dispatch }             from 'redux';
import { VtxpollSetIntervalId } from '../actions/action';
import { VtxpollEntity }        from '../../state/vtxpoll';

let timer = 0;

async function loop(dispatcher: Dispatch, state_getter: () => State): Promise<void> {
    ++timer;

    const state: State = state_getter();
    await Promise.all(
        state.vtxpoll.actions
            .filter((entity: VtxpollEntity): boolean => timer % entity.interval === 0)
            .map(async (entity: VtxpollEntity): Promise<void> => entity.cb(state, dispatcher))
    );
}

export function* VtxconfigReset(dispatch: Dispatch, state_getter: any, action: IVtxconfigReset): SagaIterator {
    const state: State = yield select();
    const clear = state.vtxconfig.web3 === null;

    if (state.vtxpoll.interval_id === undefined && !clear) {
        const interval_id: NodeJS.Timeout = yield call(
            setInterval,
            loop.bind(this, dispatch, state_getter),
            state.vtxconfig.poll_timer);
        yield put(VtxpollSetIntervalId(interval_id));
    }

    if (state.vtxpoll.interval_id !== undefined && clear) {
        clearInterval(state.vtxpoll.interval_id);
        yield put(VtxpollSetIntervalId(null));
    }
}
