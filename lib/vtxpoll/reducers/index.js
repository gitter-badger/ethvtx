"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actions/actionTypes");
var VtxpollSetIntervalId_1 = require("./VtxpollSetIntervalId");
var core_polls_1 = require("../core_polls");
var initialState = {
    actions: core_polls_1.getCorePolls(),
    timer: 0
};
exports.VtxpollReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.VtxpollActions.VtxpollSetIntervalId:
            return VtxpollSetIntervalId_1.VtxpollSetIntervalIdReducer(state, action);
        default:
            return state;
    }
};
