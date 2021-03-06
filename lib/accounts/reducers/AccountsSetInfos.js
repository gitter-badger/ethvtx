"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsSetInfosReducer = function (state, action) {
    var _a;
    return (__assign({}, state, { accounts: __assign({}, state.accounts, (_a = {}, _a[action.address] = __assign({}, state.accounts[action.address], { balance: action.balance, transaction_count: action.transaction_count, contract: action.contract !== undefined ? action.contract : (state.accounts[action.address] !== undefined ? state.accounts[action.address].contract : null) }), _a)) }));
};
