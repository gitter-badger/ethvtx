"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
exports.format_txinfos = function (tx_infos) {
    if (tx_infos.from)
        tx_infos.from = ethers_1.utils.getAddress(tx_infos.from);
    if (tx_infos.to)
        tx_infos.to = ethers_1.utils.getAddress(tx_infos.to);
    return tx_infos;
};
