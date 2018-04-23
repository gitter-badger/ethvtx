import { all, fork } from 'redux-saga/effects'
import {web3Sagas} from './web3/web3.sagas';

export default function* rootSaga(): any {
    yield all([
        fork(web3Sagas)
    ])
}