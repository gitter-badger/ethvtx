"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const redux_saga_1 = require("redux-saga");
const ipfs_actions_1 = require("./ipfs.actions");
const IPFSApi = require("ipfs-api");
const feed_actions_1 = require("../feed/feed.actions");
const IPFS = IPFSApi('ipfs.infura.io', '5001', { protocol: 'https' });
function* IPFSFetchData(action) {
    return redux_saga_1.eventChannel((emit) => {
        IPFS.files.get(action.hash).then((result) => {
            for (let idx = 0; idx < result.length; ++idx) {
                if (result[idx].content) {
                    emit(ipfs_actions_1.IPFSLoaded(action.hash, result[idx].content));
                }
                else {
                    emit(ipfs_actions_1.IPFSLoaded(action.hash, null));
                }
                emit(feed_actions_1.FeedNewIPFSContent(action.hash));
            }
            emit(redux_saga_1.END);
        }).catch((e) => {
            emit(ipfs_actions_1.IPFSError(action.hash, e));
            emit(feed_actions_1.FeedNewError(e, e.message, "[ipfs.saga.ts][IPFSFetchData] Trying to fetch ipfs hash"));
            emit(redux_saga_1.END);
        });
        return (() => { });
    });
}
function* onLoadRequest(action) {
    if (!action.hash)
        return;
    const exists = (yield effects_1.select()).ipfs[action.hash];
    if (exists && exists.content)
        return;
    const fetch = yield effects_1.call(IPFSFetchData, action);
    try {
        while (true) {
            const event = yield effects_1.take(fetch);
            yield effects_1.put(event);
        }
    }
    finally {
        fetch.close();
    }
}
function* IPFSSagas() {
    yield effects_1.takeEvery('IPFS_LOAD', onLoadRequest);
}
exports.IPFSSagas = IPFSSagas;
