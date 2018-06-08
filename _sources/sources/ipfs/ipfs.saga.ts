import {call, put, take, takeEvery, select} from 'redux-saga/effects';

import {SagaIterator, eventChannel, END} from "redux-saga";
import {IPFSError, IPFSLoadAction, IPFSLoaded} from "./ipfs.actions";
import * as IPFSApi from 'ipfs-api';
import {FeedNewError, FeedNewIPFSContent} from "../feed/feed.actions";

const IPFS = IPFSApi('ipfs.infura.io', '5001', {protocol: 'https'});

function* IPFSFetchData(action: IPFSLoadAction): SagaIterator {
    return eventChannel((emit: (arg: any) => void) => {
        IPFS.files.get(action.hash).then((result: any) => {
            for (let idx = 0; idx < result.length; ++idx) {
                if (result[idx].content) {
                    emit(IPFSLoaded(action.hash, result[idx].content));
                } else {
                    emit(IPFSLoaded(action.hash, null));
                }
                emit(FeedNewIPFSContent(action.hash));
            }
            emit(END);
        }).catch((e: any) => {
            emit(IPFSError(action.hash, e));
            emit(FeedNewError(e, e.message, "[ipfs.saga.ts][IPFSFetchData] Trying to fetch ipfs hash " + action.hash));
            emit(END);
        });
        return ((): void => {})
    });
}

function* onLoadRequest(action: IPFSLoadAction): SagaIterator {
    if (!action.hash)
        return ;
    const exists = (yield select()).ipfs[action.hash];
    if (exists && exists.content)
        return ;

    const fetch = yield call(IPFSFetchData, action);

    try {
        while (true) {
            const event = yield take(fetch);
            yield put(event);
        }
    } finally {
        fetch.close();
    }
}

export function* IPFSSagas(): any {
    yield takeEvery('IPFS_LOAD', onLoadRequest)
}
