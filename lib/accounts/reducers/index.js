"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actions/actionTypes");
var AccountsAdd_1 = require("./AccountsAdd");
var AccountsRemove_1 = require("./AccountsRemove");
var AccountsSetInfos_1 = require("./AccountsSetInfos");
var AccountsReset_1 = require("./AccountsReset");
var index_1 = require("../../state/index");
exports.AccountsReducer = function (state, action) {
    if (state === void 0) { state = index_1.InitialState.accounts; }
    switch (action.type) {
        case actionTypes_1.AccountsActions.AccountsAdd:
            return AccountsAdd_1.AccountsAddReducer(state, action);
        case actionTypes_1.AccountsActions.AccountsRemove:
            return AccountsRemove_1.AccountsRemoveReducer(state, action);
        case actionTypes_1.AccountsActions.AccountsSetInfos:
            return AccountsSetInfos_1.AccountsSetInfosReducer(state, action);
        case actionTypes_1.AccountsActions.AccountsReset:
            return AccountsReset_1.AccountsResetReducer(state, action);
        default:
            return state;
    }
};
