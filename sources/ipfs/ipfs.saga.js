"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const redux_saga_1 = require("redux-saga");
const ipfs_actions_1 = require("./ipfs.actions");
const IPFSApi = require("ipfs-api");
const feed_actions_1 = require("../feed/feed.actions");
const IsIPFS = require("is-ipfs");
function* IPFSFetchData(action) {
    const config = (yield effects_1.select()).ipfs.config;
    return redux_saga_1.eventChannel((emit) => {
        config.instance.files.get(action.hash).then((result) => {
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
            emit(feed_actions_1.FeedNewError(e, e.message, "[ipfs.saga.ts][IPFSFetchData] Trying to fetch ipfs hash " + action.hash));
            emit(redux_saga_1.END);
        });
        return (() => { });
    });
}
function* onLoadRequest(action) {
    const ipfs = (yield effects_1.select()).ipfs;
    const config = ipfs.config;
    if (!config.active) {
        yield effects_1.put(feed_actions_1.FeedNewError(new Error("IPFS not active"), "IPFS not active", "[ipfs.saga.ts][IPFSFetchData] Trying to fetch ipfs hash " + action.hash));
        return;
    }
    if (!action.hash || !IsIPFS.multihash(action.hash)) {
        yield effects_1.put(feed_actions_1.FeedNewError(new Error("Invalid IPFS Hash " + action.hash), "Invalid IPFS Hash " + action.hash, "[ipfs.saga.ts][onLoadRequest] Trying to fetch ipfs hash " + action.hash));
        return;
    }
    const exists = ipfs[action.hash];
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
function* initializeRequest(action) {
    const ipfs_config = (yield effects_1.select()).ipfs.config;
    if (ipfs_config.config) {
        try {
            const IPFS = IPFSApi(ipfs_config.config.host, ipfs_config.config.port, ipfs_config.config.options);
            yield effects_1.put(ipfs_actions_1.IPFSConnect(IPFS));
        }
        catch (e) {
            console.warn("[IPFS] Error while trying to connect to provided endpoint");
        }
    }
}
function* IPFSSagas() {
    yield effects_1.takeEvery('LOAD_WEB3', initializeRequest);
    yield effects_1.takeEvery('IPFS_LOAD', onLoadRequest);
}
exports.IPFSSagas = IPFSSagas;
