"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const web3_sagas_1 = require("./web3/web3.sagas");
const tx_sagas_1 = require("./tx/tx.sagas");
const contracts_saga_1 = require("./contracts/contracts.saga");
const accounts_saga_1 = require("./accounts/accounts.saga");
const ipfs_saga_1 = require("./ipfs/ipfs.saga");
const backlink_sagas_1 = require("./backlink/backlink.sagas");
exports.rootSagaBuilder = (...customSagas) => {
    return function* rootSaga(dispatch) {
        const sagas = ([web3_sagas_1.Web3Sagas, tx_sagas_1.TxSagas, contracts_saga_1.ContractSagas.bind(null, dispatch), accounts_saga_1.AccountSagas, ipfs_saga_1.IPFSSagas, backlink_sagas_1.BacklinkSagas.bind(null, dispatch), ...customSagas]).filter((elem) => !!elem).map((elem) => {
            return effects_1.fork(elem);
        });
        yield effects_1.all(sagas);
    };
};
