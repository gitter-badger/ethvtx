"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actions/actionTypes");
var VtxpollSetIntervalId_1 = require("./VtxpollSetIntervalId");
var index_1 = require("../../state/index");
exports.VtxpollReducer = function (state, action) {
    if (state === void 0) { state = index_1.InitialState.vtxpoll; }
    switch (action.type) {
        case actionTypes_1.VtxpollActions.VtxpollSetIntervalId:
            return VtxpollSetIntervalId_1.VtxpollSetIntervalIdReducer(state, action);
        default:
            return state;
    }
};
