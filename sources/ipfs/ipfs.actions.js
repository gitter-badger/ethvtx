"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function IPFSLoad(hash) {
    return {
        type: 'IPFS_LOAD',
        hash
    };
}
exports.IPFSLoad = IPFSLoad;
function IPFSLoaded(hash, content) {
    return {
        type: 'IPFS_LOADED',
        hash,
        content
    };
}
exports.IPFSLoaded = IPFSLoaded;
function IPFSError(hash, reason) {
    return {
        type: 'IPFS_ERROR',
        hash,
        reason
    };
}
exports.IPFSError = IPFSError;
