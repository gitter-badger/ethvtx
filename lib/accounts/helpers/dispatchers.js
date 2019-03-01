"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("../actions/actions");
exports.addAccount = function (dispatch, address, alias) {
    dispatch(actions_1.AccountsAdd(address, alias));
};
exports.removeAccount = function (dispatch, address_or_alias) {
    dispatch(actions_1.AccountsRemove(address_or_alias));
};
