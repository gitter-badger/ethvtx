"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VtxeventsTypes;
(function (VtxeventsTypes) {
    VtxeventsTypes[VtxeventsTypes["Error"] = 0] = "Error";
    VtxeventsTypes[VtxeventsTypes["TxBroadcasted"] = 1] = "TxBroadcasted";
    VtxeventsTypes[VtxeventsTypes["TxFollowed"] = 2] = "TxFollowed";
    VtxeventsTypes[VtxeventsTypes["TxConfirmed"] = 3] = "TxConfirmed";
    VtxeventsTypes[VtxeventsTypes["TxError"] = 4] = "TxError";
    VtxeventsTypes[VtxeventsTypes["TxInvalid"] = 5] = "TxInvalid";
    VtxeventsTypes[VtxeventsTypes["ContractsSpecAdded"] = 6] = "ContractsSpecAdded";
    VtxeventsTypes[VtxeventsTypes["ContractsSpecRemoved"] = 7] = "ContractsSpecRemoved";
    VtxeventsTypes[VtxeventsTypes["ContractsInstanceAdded"] = 8] = "ContractsInstanceAdded";
    VtxeventsTypes[VtxeventsTypes["ContractsInstanceRemoved"] = 9] = "ContractsInstanceRemoved";
    VtxeventsTypes[VtxeventsTypes["ContractsTxBroadcasted"] = 10] = "ContractsTxBroadcasted";
})(VtxeventsTypes = exports.VtxeventsTypes || (exports.VtxeventsTypes = {}));
var VtxeventErrorTypes;
(function (VtxeventErrorTypes) {
    VtxeventErrorTypes[VtxeventErrorTypes["TxBroadcastError"] = 0] = "TxBroadcastError";
    VtxeventErrorTypes[VtxeventErrorTypes["TxFollowError"] = 1] = "TxFollowError";
    VtxeventErrorTypes[VtxeventErrorTypes["BlockFetchError"] = 2] = "BlockFetchError";
    VtxeventErrorTypes[VtxeventErrorTypes["ContractInvalid"] = 3] = "ContractInvalid";
    VtxeventErrorTypes[VtxeventErrorTypes["ContractTxError"] = 4] = "ContractTxError";
    VtxeventErrorTypes[VtxeventErrorTypes["TxFetchError"] = 5] = "TxFetchError";
})(VtxeventErrorTypes = exports.VtxeventErrorTypes || (exports.VtxeventErrorTypes = {}));
