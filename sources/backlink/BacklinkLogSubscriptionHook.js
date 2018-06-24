"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BacklinkSubscriptionHook_1 = require("./BacklinkSubscriptionHook");
// TODO Rename into NBH
class BacklinkLogSubscriptionHook extends BacklinkSubscriptionHook_1.BacklinkSubscriptionHook {
    constructor(hook_name, options, event_callback, error_callback, web3) {
        super(hook_name);
        this.subscription = web3.eth.subscribe('newBlockHeaders', console.log)
            .on("data", console.log)
            .on("error", console.error);
    }
}
exports.BacklinkLogSubscriptionHook = BacklinkLogSubscriptionHook;
