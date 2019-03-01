"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actions/actionTypes");
var VtxeventsAdd_1 = require("./VtxeventsAdd");
exports.VtxeventsReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case actionTypes_1.VtxeventsActions.VtxeventsAdd:
            return VtxeventsAdd_1.VtxeventsAddReducer(state, action);
        default:
            return state;
    }
};
