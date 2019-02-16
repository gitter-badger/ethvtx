import { SagaIterator }                                  from 'redux-saga';
import { put }                                           from 'redux-saga/effects';
import { VtxeventsAdd }                                  from '../../vtxevents/actions/actions';
import { VtxeventsContractsSpecRemoved, VtxeventsTypes } from '../../state/vtxevents';
import { IContractsRemoveSpec }                          from '../actions/actionTypes';

export function* ContractsRemoveSpecSaga(action: IContractsRemoveSpec): SagaIterator {

    yield put(VtxeventsAdd({
        type: VtxeventsTypes.ContractsSpecRemoved,
        name: action.name
    } as VtxeventsContractsSpecRemoved));

}
