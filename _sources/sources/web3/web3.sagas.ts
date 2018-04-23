import {all, call, fork, put, take, takeLatest} from 'redux-saga/effects';
import {Action, Unsubscribe} from "redux";
import {Web3Actions, Web3LoadAction, Web3LoadedAction, Web3LoadErrorAction} from "./web3.actions";
import {SagaIterator, eventChannel, END} from "redux-saga";

// TODO check network id
// TODO take network id as arg in action

function* resolveWeb3(action: Web3LoadAction): SagaIterator {

    return eventChannel((emit: (arg?: any) => void): Unsubscribe => {

        action.loader.then((web3: any): void => {
            emit({type: 'LOADED_WEB3',
                _: web3,
                networkId: 0} as Web3LoadedAction);
            emit(END);
        }).catch((reason: any): void => {
            emit({type: 'LOAD_ERROR_WEB3',
                error: reason} as Web3LoadErrorAction);
            emit(END);
        });

        return ((): void => {}) as Unsubscribe;

    });

}

function* callResolveWeb3(action: Web3LoadAction): SagaIterator {
    const web3 = yield call(resolveWeb3, action);
    try {
        while (true) {
            const event = yield take(web3);
            yield put(event)
        }
    } finally {
        web3.close()
    }
}

export function* web3Sagas(): any {
    yield takeLatest('LOAD_WEB3', callResolveWeb3);
}