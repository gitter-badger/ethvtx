"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FeedType;
(function (FeedType) {
    FeedType[FeedType["Transactions"] = 0] = "Transactions";
    FeedType[FeedType["Contracts"] = 1] = "Contracts";
})(FeedType = exports.FeedType || (exports.FeedType = {}));
const FeedTypeStrings = [
    "NEW_TRANSACTION",
    "NEW_CONTRACT"
];
// TODO create interface for each type with deeper setting (transaction from ?, to ?, data ? etc ...)
function FeedFilter(state, type) {
    return state.filter((elem) => FeedTypeStrings[type] === elem.action);
}
exports.FeedFilter = FeedFilter;
