import { SagaIterator }      from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { VtxeventsAdd }      from '../../vtxevents/actions/actions';
import { State }             from '../../state/index';
import {
    VtxeventErrorTypes,
    VtxeventsContractsInstanceAdded,
    VtxeventsError,
    VtxeventsTypes
}                            from '../../state/vtxevents';
import { IContractsNew }     from '../actions/actionTypes';

export function* ContractsNewSaga(action: IContractsNew): SagaIterator {

    const state: State = yield select();

    try {

        yield call(state.contracts.instances[action.contract][action.address].instance.valid);

        yield put(VtxeventsAdd({
            type: VtxeventsTypes.ContractsInstanceAdded,
            contract: action.contract,
            address: action.address
        } as VtxeventsContractsInstanceAdded));

    } catch (e) {
        yield put(VtxeventsAdd({
            type: VtxeventsTypes.Error,
            e,
            error_type: VtxeventErrorTypes.ContractInvalid
        } as VtxeventsError));
    }

}
