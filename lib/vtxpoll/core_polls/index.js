"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var poll_transactions_1 = require("./poll_transactions");
var poll_blocks_1 = require("./poll_blocks");
var poll_contracts_constant_calls_1 = require("./poll_contracts_constant_calls");
var poll_net_infos_1 = require("./poll_net_infos");
var poll_accounts_1 = require("./poll_accounts");
var poll_events_1 = require("./poll_events");
exports.getCorePolls = function () {
    return [
        {
            cb: poll_transactions_1.poll_transaction,
            interval: poll_transactions_1.poll_transaction_interval
        },
        {
            cb: poll_blocks_1.poll_blocks,
            interval: poll_blocks_1.poll_blocks_interval
        },
        {
            cb: poll_contracts_constant_calls_1.poll_contracts_constant_calls,
            interval: poll_contracts_constant_calls_1.poll_contracts_constant_calls_interval
        },
        {
            cb: poll_net_infos_1.poll_net_infos,
            interval: poll_net_infos_1.poll_net_infos_interval
        },
        {
            cb: poll_accounts_1.poll_accounts,
            interval: poll_accounts_1.poll_accounts_interval
        },
        {
            cb: poll_events_1.poll_events,
            interval: poll_events_1.poll_events_interval
        }
    ];
};
