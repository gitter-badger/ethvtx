"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("./actionTypes");
var alias_checker_1 = require("../../utils/alias_checker");
var address_checker_1 = require("../../utils/address_checker");
exports.ContractsSend = function (call, id, method, args, contract, address) { return ({
    type: actionTypes_1.ContractsActions.ContractsSend,
    call: call,
    id: id,
    method: method,
    args: args,
    contract: contract,
    address: address_checker_1.address_checker(address)
}); };
exports.ContractsAddSpec = function (name, abi, options) { return ({
    type: actionTypes_1.ContractsActions.ContractsAddSpec,
    name: name,
    abi: abi,
    bin: options ? options.bin : null,
    permanent: options ? !!options.permanent : false
}); };
exports.ContractsRemoveSpec = function (name) { return ({
    type: actionTypes_1.ContractsActions.ContractsRemoveSpec,
    name: name
}); };
exports.ContractsNew = function (contract, address, options) { return ({
    type: actionTypes_1.ContractsActions.ContractsNew,
    contract: contract,
    address: address_checker_1.address_checker(address),
    alias: options ? alias_checker_1.alias_checker(options.alias) : null,
    permanent: options ? options.permanent : false
}); };
exports.ContractsReset = function () { return ({
    type: actionTypes_1.ContractsActions.ContractsReset
}); };
exports.ContractsRemove = function (contract, address_or_alias) { return ({
    type: actionTypes_1.ContractsActions.ContractsRemove,
    contract: contract,
    address_or_alias: address_checker_1.address_checker(address_or_alias)
}); };
