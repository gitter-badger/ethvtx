import { IVtxconfigResetSectionComplete }               from '../../vtxconfig/actions/actionTypes';
import { SagaIterator }                                 from 'redux-saga';
import { call, put, select }                            from 'redux-saga/effects';
import { VtxconfigResetSectionComplete }                from '../../vtxconfig/actions/actions';
import { BigNumber }                                    from 'ethers/utils';
import { AccountsAdd, AccountsReset, AccountsSetInfos } from '../actions/actions';

export function* VtxconfigResetSectionCompleteSaga(action: IVtxconfigResetSectionComplete): SagaIterator {
    if (action.section === 'vtxconfig') {

        yield put(AccountsReset());

        const state = yield select();

        const web3 = state.vtxconfig.web3;
        const coinbase = state.vtxconfig.coinbase;

        const tx_count = yield call(web3.eth.getTransactionCount, coinbase);
        const balance = new BigNumber(yield call(web3.eth.getBalance, coinbase));

        yield put(AccountsAdd(coinbase, '@coinbase'));
        yield put(AccountsSetInfos(coinbase, balance, tx_count, undefined));

        yield put(VtxconfigResetSectionComplete('accounts'));

    }
}
