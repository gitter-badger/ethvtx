import { SagaIterator }       from 'redux-saga';
import { put, select }        from 'redux-saga/effects';
import { IVtxconfigSetWeb3 }  from '../actions/actionTypes';
import { VtxconfigSetStatus } from '../actions/actions';
import { VtxStatus }          from '../../state/vtxconfig';
import { ethers }             from 'ethers';
import { ContractsSetSigner } from '../../contracts/actions/actions';

export function* VtxconfigSetWeb3Saga(action: IVtxconfigSetWeb3): SagaIterator {
    yield put(VtxconfigSetStatus(VtxStatus.Loading));
    const state = yield select();
    const signer = (new ethers.providers.Web3Provider(state.vtxconfig.web3.currentProvider)).getSigner();
    yield put(ContractsSetSigner(signer));
}
