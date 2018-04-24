"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_reducers_1 = require("./web3/web3.reducers");
const feed_reducers_1 = require("./feed/feed.reducers");
const tx_reducers_1 = require("./tx/tx.reducers");
exports.reducers = {
    web3: web3_reducers_1.web3,
    tx: tx_reducers_1.tx,
    contracts: {},
    feed: feed_reducers_1.feed
};
