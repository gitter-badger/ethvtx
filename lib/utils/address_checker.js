"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var AddressRegex = /0x[a-fA-F0-9]{40}/;
var Alias = /@[a-z]+/;
exports.address_checker = function (address) {
    if (!AddressRegex.test(address)) {
        if (!Alias.test(address)) {
            throw new Error("Invalid Ethereum Address " + address);
        }
        else {
            return address;
        }
    }
    return ethers_1.utils.getAddress(address);
};
