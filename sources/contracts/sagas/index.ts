import { SagaIterator }            from 'redux-saga';
import { takeEvery }               from 'redux-saga/effects';
import { ContractsActions }        from '../actions/actionTypes';
import { ContractsAddSpecSaga }    from './ContractsAddSpec';
import { ContractsRemoveSpecSaga } from './ContractsRemoveSpec';
import { VtxconfigActions }        from '../../vtxconfig/actions/actionTypes';
import { VtxconfigResetSaga }      from './VtxconfigReset';
import { ContractsSendSaga }       from './ContractsSend';
import { ContractsNewSaga }        from './ContractsNew';
import { ContractsRemoveSaga }     from './ContractsRemove';

export function* ContractsSagas(): SagaIterator {
    yield takeEvery(ContractsActions.ContractsAddSpec, ContractsAddSpecSaga);
    yield takeEvery(ContractsActions.ContractsRemoveSpec, ContractsRemoveSpecSaga);
    yield takeEvery(ContractsActions.ContractsSend, ContractsSendSaga);
    yield takeEvery(ContractsActions.ContractsNew, ContractsNewSaga);
    yield takeEvery(ContractsActions.ContractsRemove, ContractsRemoveSaga);

    yield takeEvery(VtxconfigActions.VtxconfigReset, VtxconfigResetSaga);
}
