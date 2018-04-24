import { all, fork } from 'redux-saga/effects'
import {Web3Sagas} from './web3/web3.sagas';
import {TxSagas} from "./tx/tx.sagas";

export default function* rootSaga(): any {
    yield all([
        fork(Web3Sagas),
        fork(TxSagas)
    ])
}