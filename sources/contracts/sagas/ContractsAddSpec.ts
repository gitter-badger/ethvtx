import { SagaIterator }                                from 'redux-saga';
import { put }                                         from 'redux-saga/effects';
import { VtxeventsAdd }                                from '../../vtxevents/actions/actions';
import { VtxeventsContractsSpecAdded, VtxeventsTypes } from '../../state/vtxevents';
import { IContractsAddSpec }                           from '../actions/actionTypes';

export function* ContractsAddSpecSaga(action: IContractsAddSpec): SagaIterator {

    yield put(VtxeventsAdd({
        type: VtxeventsTypes.ContractsSpecAdded,
        name: action.name
    } as VtxeventsContractsSpecAdded));

}
