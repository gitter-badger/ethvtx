"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TxStatus;
(function (TxStatus) {
    TxStatus[TxStatus["Broadcasted"] = 0] = "Broadcasted";
    TxStatus[TxStatus["Confirming"] = 1] = "Confirming";
    TxStatus[TxStatus["Confirmed"] = 2] = "Confirmed";
    TxStatus[TxStatus["Unknown"] = 3] = "Unknown";
    TxStatus[TxStatus["Error"] = 4] = "Error";
})(TxStatus = exports.TxStatus || (exports.TxStatus = {}));
