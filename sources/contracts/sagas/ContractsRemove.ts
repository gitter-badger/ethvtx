import { SagaIterator }                                    from 'redux-saga';
import { put }                                             from 'redux-saga/effects';
import { VtxeventsAdd }                                    from '../../vtxevents/actions/actions';
import { VtxeventsContractsInstanceAdded, VtxeventsTypes } from '../../state/vtxevents';
import { IContractsRemove }                                from '../actions/actionTypes';

export function* ContractsRemoveSaga(action: IContractsRemove): SagaIterator {

    yield put(VtxeventsAdd({
        type: VtxeventsTypes.ContractsInstanceRemoved,
        contract: action.contract,
        address: action.address_or_alias
    } as VtxeventsContractsInstanceAdded));

}
