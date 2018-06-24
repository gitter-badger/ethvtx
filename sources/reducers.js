"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_reducers_1 = require("./web3/web3.reducers");
const feed_reducers_1 = require("./feed/feed.reducers");
const tx_reducers_1 = require("./tx/tx.reducers");
const contracts_reducers_1 = require("./contracts/contracts.reducers");
const accounts_reducers_1 = require("./accounts/accounts.reducers");
const ipfs_reducers_1 = require("./ipfs/ipfs.reducers");
const backlink_reducers_1 = require("./backlink/backlink.reducers");
exports.reducers = {
    web3: web3_reducers_1.web3,
    tx: tx_reducers_1.tx,
    contracts: contracts_reducers_1.contracts,
    feed: feed_reducers_1.feed,
    accounts: accounts_reducers_1.accounts,
    ipfs: ipfs_reducers_1.ipfs,
    backlink: backlink_reducers_1.backlink
};
