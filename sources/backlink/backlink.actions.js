"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BacklinkConnect = (url) => {
    return {
        type: 'BACKLINK_CONNECT',
        url
    };
};
exports.BacklinkConnected = (instance, url) => {
    return {
        type: 'BACKLINK_CONNECTED',
        instance,
        url
    };
};
exports.BacklinkError = (error) => {
    return {
        type: 'BACKLINK_ERROR',
        error
    };
};
exports.BacklinkDisconnect = () => {
    return {
        type: 'BACKLINK_DISCONNECT'
    };
};
exports.BacklinkDisconnected = () => {
    return {
        type: 'BACKLINK_DISCONNECTED'
    };
};
exports.BacklinkDisable = () => {
    return {
        type: 'BACKLINK_DISABLE'
    };
};
exports.BacklinkCreateHook = (address, from, to, trigger) => {
    return {
        type: 'BACKLINK_CREATE_HOOK',
        address,
        from,
        to,
        trigger
    };
};
exports.BacklinkRemoveHook = (address) => {
    return {
        type: 'BACKLINK_REMOVE_HOOK',
        address
    };
};
exports.BacklinkNewBlockEvent = (block) => {
    return {
        type: 'BACKLINK_NEW_BLOCK_EVENT',
        block
    };
};
