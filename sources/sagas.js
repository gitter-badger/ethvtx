"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const web3_sagas_1 = require("./web3/web3.sagas");
const tx_sagas_1 = require("./tx/tx.sagas");
const contracts_saga_1 = require("./contracts/contracts.saga");
const accounts_saga_1 = require("./accounts/accounts.saga");
const ipfs_saga_1 = require("./ipfs/ipfs.saga");
function* rootSaga() {
    yield effects_1.all([
        effects_1.fork(web3_sagas_1.Web3Sagas),
        effects_1.fork(tx_sagas_1.TxSagas),
        effects_1.fork(contracts_saga_1.ContractSagas),
        effects_1.fork(accounts_saga_1.AccountSagas),
        effects_1.fork(ipfs_saga_1.IPFSSagas)
    ]);
}
exports.default = rootSaga;
