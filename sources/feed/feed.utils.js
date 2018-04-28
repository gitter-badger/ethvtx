"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FeedType;
(function (FeedType) {
    FeedType[FeedType["Transactions"] = 1] = "Transactions";
    FeedType[FeedType["Contracts"] = 2] = "Contracts";
    FeedType[FeedType["Errors"] = 4] = "Errors";
})(FeedType = exports.FeedType || (exports.FeedType = {}));
const FeedTypeLinks = {
    NEW_TRANSACTION: 1,
    NEW_CONTRACT: 2,
    NEW_ERROR: 4
};
// TODO create interface for each type with deeper setting (transaction from ?, to ?, data ? etc ...)
function FeedFilter(state, type) {
    return state.filter((elem) => !!((FeedTypeLinks[elem.action] ? FeedTypeLinks[elem.action] : -1) & type));
}
exports.FeedFilter = FeedFilter;
