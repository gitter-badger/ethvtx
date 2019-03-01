"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actions/actionTypes");
var vtxconfig_1 = require("../../state/vtxconfig");
var VtxconfigSetWeb3_1 = require("./VtxconfigSetWeb3");
var VtxconfigSetStatus_1 = require("./VtxconfigSetStatus");
var VtxconfigResetSectionComplete_1 = require("./VtxconfigResetSectionComplete");
var VtxconfigResetComplete_1 = require("./VtxconfigResetComplete");
var VtxconfigSetInfos_1 = require("./VtxconfigSetInfos");
var VtxconfigReset_1 = require("./VtxconfigReset");
var initial = {
    web3: null,
    last_error: null,
    status: vtxconfig_1.VtxStatus.Idle,
    reset_status: {
        txs: false,
        blocks: false,
        vtxcache: false,
        contracts: false,
        vtxconfig: false,
        accounts: false
    },
    poll_timer: 100,
    confirmation_treshold: 12,
    coinbase: null,
    net_id: null,
    allowed_nets: null
};
exports.VtxconfigReducer = function (state, action) {
    if (state === void 0) { state = initial; }
    switch (action.type) {
        case actionTypes_1.VtxconfigActions.VtxconfigSetWeb3:
            return VtxconfigSetWeb3_1.VtxconfigSetWeb3Reducer(state, action);
        case actionTypes_1.VtxconfigActions.VtxconfigSetStatus:
            return VtxconfigSetStatus_1.VtxconfigSetStatusReducer(state, action);
        case actionTypes_1.VtxconfigActions.VtxconfigResetSectionComplete:
            return VtxconfigResetSectionComplete_1.VtxconfigResetSectionCompleteReducer(state, action);
        case actionTypes_1.VtxconfigActions.VtxconfigResetComplete:
            return VtxconfigResetComplete_1.VtxconfigResetCompleteReducer(state, action);
        case actionTypes_1.VtxconfigActions.VtxconfigSetInfos:
            return VtxconfigSetInfos_1.VtxconfigSetInfosReducer(state, action);
        case actionTypes_1.VtxconfigActions.VtxconfigReset:
            return VtxconfigReset_1.VtxconfigResetReducer(state, action);
        default:
            return state;
    }
};
