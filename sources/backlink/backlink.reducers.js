"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const BacklinkConnectedReducer = (state, action) => {
    return Object.assign({}, state, { status: 'CONNECTED', url: action.url, instance: action.instance });
};
const BacklinkErrorReducer = (state, action) => {
    return Object.assign({}, state, { status: 'ERROR', error: action.error, instance: undefined });
};
const BacklinkDisconnectedReducer = (state, action) => {
    return Object.assign({}, state, { status: 'DISCONNECTED', instance: undefined });
};
const BacklinkDisableReducer = (state, action) => {
    return Object.assign({}, state, { status: 'DISABLED', instance: undefined });
};
const BacklinkCreateHookReducer = (state, action) => {
    if (!state.hooks)
        state.hooks = {};
    if (!state.hooks[action.address.toLowerCase()])
        state.hooks[action.address.toLowerCase()] = [];
    state.hooks[action.address.toLowerCase()].push({
        from: action.from,
        to: action.to,
        trigger: action.trigger
    });
    return Object.assign({}, state, { hooks: Object.assign({}, state.hooks, { [action.address.toLowerCase()]: [
                ...state.hooks[action.address.toLowerCase()]
            ] }) });
};
const BacklinkRemoveHookReducer = (state, action) => {
    const _a = state.hooks, _b = action.address.toLowerCase(), _ = _a[_b], hooks = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    return Object.assign({}, state, { hooks: Object.assign({}, hooks) });
};
exports.backlink = (state = { status: 'DISABLED' }, action) => {
    switch (action.type) {
        case 'BACKLINK_CONNECTED':
            return (BacklinkConnectedReducer(state, action));
        case 'BACKLINK_ERROR':
            return (BacklinkErrorReducer(state, action));
        case 'BACKLINK_DISCONNECTED':
            return (BacklinkDisconnectedReducer(state, action));
        case 'BACKLINK_DISABLE':
            return (BacklinkDisableReducer(state, action));
        case 'BACKLINK_CREATE_HOOK':
            return (BacklinkCreateHookReducer(state, action));
        case 'BACKLINK_REMOVE_HOOK':
            return (BacklinkRemoveHookReducer(state, action));
        default:
            return state;
    }
};
