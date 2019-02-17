import { SagaIterator }   from 'redux-saga';
import {
    call,
    put
}                         from 'redux-saga/effects';
import { VtxeventsAdd }   from '../../vtxevents/actions/actions';
import { IContractsSend } from '../actions/actionTypes';
import {
    TxAdd,
    TxError,
    TxFollow
}                         from '../../txs/actions/actions';
import {
    VtxeventErrorTypes,
    VtxeventsContractsTxBroadcasted,
    VtxeventsError,
    VtxeventsTxError,
    VtxeventsTypes
}                         from '../../state/vtxevents';

export function* ContractsSendSaga(action: IContractsSend): SagaIterator {

    try {
        const tx_hash = yield call(action.call);

        yield put(TxFollow(tx_hash, action.id));

        yield put(VtxeventsAdd({
                type: VtxeventsTypes.ContractsTxBroadcasted,
                contract: action.contract,
                address: action.address,
                method: action.method,
                args: action.args,
                tx_hash
            } as VtxeventsContractsTxBroadcasted
        ));

    } catch (e) {
        if (e.hashes && e.hashes.length >= 1) {
            yield put(VtxeventsAdd({
                    type: VtxeventsTypes.ContractsTxBroadcasted,
                    contract: action.contract,
                    address: action.address,
                    method: action.method,
                    args: action.args,
                    tx_hash: e.hashes[0]
                } as VtxeventsContractsTxBroadcasted
            ));
            yield put(VtxeventsAdd({
                    type: VtxeventsTypes.TxError,
                    tx_hash: e.hashes[0],
                    e
                } as VtxeventsTxError
            ));
            yield put(TxAdd(e.hashes[0], {}, action.id));
            yield put(TxError(e.hashes[0], e));
        } else {
            yield put(VtxeventsAdd({
                type: VtxeventsTypes.Error,
                error_type: VtxeventErrorTypes.ContractTxError,
                e
            } as VtxeventsError));
        }
    }

}
