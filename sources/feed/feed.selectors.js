"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = require("reselect");
const getFeed = (state) => state.feed;
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
exports.FeedFilterTransactions = reselect_1.createSelector(getFeed, (feed) => {
    return feed.filter((elem) => !!((FeedTypeLinks[elem.action] ? FeedTypeLinks[elem.action] : -1) & FeedType.Transactions));
});
exports.FeedFilterContracts = reselect_1.createSelector(getFeed, (feed) => {
    return feed.filter((elem) => !!((FeedTypeLinks[elem.action] ? FeedTypeLinks[elem.action] : -1) & FeedType.Contracts));
});
exports.FeedFilterErrors = reselect_1.createSelector(getFeed, (feed) => {
    return feed.filter((elem) => !!((FeedTypeLinks[elem.action] ? FeedTypeLinks[elem.action] : -1) & FeedType.Errors));
});
