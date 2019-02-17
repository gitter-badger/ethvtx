import { SagaIterator }                                                         from 'redux-saga';
import { call, put, select }                                                    from 'redux-saga/effects';
import { IVtxconfigReset }                                                      from '../actions/actionTypes';
import { VtxconfigResetSectionComplete, VtxconfigSetInfos, VtxconfigSetStatus } from '../actions/actions';
import { VtxStatus }                                                            from '../../state/vtxconfig';
import { address_checker }                                                      from '../../utils/address_checker';

export function* VtxconfigResetSaga(action: IVtxconfigReset): SagaIterator {

    if (action.enable) {
        yield put(VtxconfigSetStatus(VtxStatus.Authorizing));
        try {
            yield call(action.enable);
        } catch (e) {
            yield put(VtxconfigSetStatus(VtxStatus.Unauthorized));
            return ;
        }
    }

    const web3 = (yield select()).vtxconfig.web3;

    const coinbase = address_checker(yield call(web3.eth.getCoinbase));
    const net = yield call(web3.eth.net.getId);

    yield put(VtxconfigSetInfos(coinbase, net));

    yield put(VtxconfigResetSectionComplete('vtxconfig'));
}
