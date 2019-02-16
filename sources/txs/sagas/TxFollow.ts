import { ITxFollow }         from '../actions/actionTypes';
import { SagaIterator }      from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { State }             from '../../state';
import { ready }             from '../../utils/ready';
import { getWeb3 }           from '../../vtxconfig/helpers/getters';
import { VtxeventsAdd }      from '../../vtxevents/actions/actions';
import {
    VtxeventErrorTypes,
    VtxeventsError,
    VtxeventsTxAdded, VtxeventsTxInvalid,
    VtxeventsTypes
}                            from '../../state/vtxevents';
import Web3 = require('web3');
import { TxAdd }             from '../actions/actions';
import { TxInfos }           from '../../state/txs';

export function* TxFollowSaga(action: ITxFollow): SagaIterator {
    const state: State = yield select();

    if (ready(state)) {
        const web3: Web3 = getWeb3(state);

        try {
            const tx_infos: TxInfos = yield call(
                web3.eth.getTransaction,
                action.tx_hash
            );

            if (tx_infos === null) {
                yield put(VtxeventsAdd({
                    type: VtxeventsTypes.TxInvalid,
                    tx_hash: action.tx_hash
                } as VtxeventsTxInvalid));
                return;
            }

            yield put(VtxeventsAdd({
                type: VtxeventsTypes.TxFollowed,
                tx_hash: action.tx_hash
            } as VtxeventsTxAdded));

            yield put(TxAdd(action.tx_hash, tx_infos, action.tx_id));
        } catch (e) {
            yield put(VtxeventsAdd({
                type: VtxeventsTypes.Error,
                e,
                error_type: VtxeventErrorTypes.TxFollowError
            } as VtxeventsError));
        }
    } else {
        console.error(`TxFollow was called while store was not ready`);
    }
}
