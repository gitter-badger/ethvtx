import {all, call, fork, put, PutEffect, take, takeLatest} from 'redux-saga/effects';
import {Action, Unsubscribe} from "redux";
import {Web3Actions, Web3LoadAction, Web3LoadedAction, Web3LoadErrorAction} from "./web3.actions";
import {SagaIterator, eventChannel, END} from "redux-saga";
import {TxSendAction} from "../tx/tx.actions";
import {Vortex} from "../vortex";

// TODO check network id
// TODO take network id as arg in action

function* resolveWeb3(action: Web3LoadAction): SagaIterator {
    return eventChannel((emit: (arg?: any) => void): Unsubscribe => {

        action.loader.then((web3: any): void => {

            web3.eth.vortexSendTransaction = (txArgs: any): any => {
                let resolvers = {};
                let differed_return: Promise<string> = new Promise<string>((ok: (arg?: any) => void, ko: (arg?: any) => void): void => {
                    (<any>resolvers).success = ok;
                    (<any>resolvers).error = ko;
                });
                Vortex.get().Store.dispatch({
                    type: 'TX_SEND',
                    txArgs,
                    web3,
                    resolvers
                } as TxSendAction);
                return differed_return;
            };
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

export function* Web3Sagas(): any {
    yield takeLatest('LOAD_WEB3', callResolveWeb3);
}