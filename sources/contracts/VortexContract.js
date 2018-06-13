"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sha1 = require("sha1");
const vortex_1 = require("../vortex");
const contracts_actions_1 = require("./contracts.actions");
class VortexContract {
    constructor(artifact, address, coinbase, web3) {
        this._waiting_calls = {};
        const contract_instance = new web3.eth.Contract(artifact.abi, address, {
            from: coinbase,
            data: artifact.bytecode
        });
        contract_instance.vortex = {};
        Object.assign(this, contract_instance);
        const _this = this;
        _this.artifact = artifact;
        for (let abi_idx = 0; abi_idx < artifact.abi.length; ++abi_idx) {
            if (artifact.abi[abi_idx].type === 'function') {
                if (artifact.abi[abi_idx].constant) {
                    _this.vortex[artifact.abi[abi_idx].name] = {};
                    _this.vortex[artifact.abi[abi_idx].name].vortexCall = this.vortexCall.bind(this, artifact.abi[abi_idx].name, abi_idx);
                    _this.vortex[artifact.abi[abi_idx].name].vortexCache = {};
                    _this.vortex[artifact.abi[abi_idx].name].vortexData = this.getData.bind(this, artifact.abi[abi_idx].name);
                    _this.vortex[artifact.abi[abi_idx].name].vortexConstantData = this.getDataWithoutRefresh.bind(this, artifact.abi[abi_idx].name);
                }
                else
                    _this.vortex[artifact.abi[abi_idx].name] = {};
                _this.vortex[artifact.abi[abi_idx].name].vortexSend = this.vortexCall.bind(this, artifact.abi[abi_idx].name, abi_idx);
            }
        }
    }
    static callSignature(...methodArguments) {
        return (sha1(JSON.stringify({ methodArguments })));
    }
    getDataWithoutRefresh(methodName, txArguments, ...methodArguments) {
        const _this = this;
        const signature = VortexContract.callSignature(...methodArguments);
        const dispatch = vortex_1.Vortex.get().Store.dispatch;
        _this.vortex = vortex_1.Vortex.get().Store.getState().contracts[_this.artifact.name][_this._address.toLowerCase()].instance.vortex;
        if ((_this.vortex[methodName])) {
            if (_this._waiting_calls[methodName + signature] || _this.vortex[methodName].vortexCache[signature]) {
                if (!_this.vortex[methodName].vortexCache[signature].disable_refresh)
                    _this.vortex[methodName].vortexCache[signature] = { synced: true, disable_refresh: false };
                if (this._waiting_calls[methodName + signature] && _this.vortex[methodName].vortexCache[signature])
                    this._waiting_calls[methodName + signature] = false;
                return (_this.vortex[methodName].vortexCache[signature].data);
            }
            else {
                _this.vortex[methodName].vortexCache[signature] = { synced: false, disable_refresh: true };
                dispatch(contracts_actions_1.ContractCall(_this.artifact.name, _this.options.address, methodName, txArguments, undefined, ...methodArguments));
                this._waiting_calls[methodName + signature] = true;
            }
            return (_this.vortex[methodName].vortexCache[signature].data);
        }
        return (undefined);
    }
    getData(methodName, txArguments, ...methodArguments) {
        const _this = this;
        const signature = VortexContract.callSignature(...methodArguments);
        const dispatch = vortex_1.Vortex.get().Store.dispatch;
        _this.vortex = vortex_1.Vortex.get().Store.getState().contracts[_this.artifact.name][_this._address.toLowerCase()].instance.vortex;
        if ((_this.vortex[methodName])) {
            if (_this.vortex[methodName].vortexCache[signature]) {
                if (_this.vortex[methodName].vortexCache[signature].disable_refresh)
                    _this.vortex[methodName].vortexCache[signature] = Object.assign({}, _this.vortex[methodName].vortexCache[signature], { disable_refresh: false });
                if (!_this.vortex[methodName].vortexCache[signature].synced && !this._waiting_calls[methodName + signature]) {
                    dispatch(contracts_actions_1.ContractCall(_this.artifact.name, _this.options.address, methodName, txArguments, undefined, ...methodArguments));
                    this._waiting_calls[methodName + signature] = true;
                }
                else if (_this.vortex[methodName].vortexCache[signature].synced && this._waiting_calls[methodName + signature])
                    this._waiting_calls[methodName + signature] = false;
            }
            else {
                _this.vortex[methodName].vortexCache[signature] = { synced: false, disable_refresh: false };
                dispatch(contracts_actions_1.ContractCall(_this.artifact.name, _this.options.address, methodName, txArguments, undefined, ...methodArguments));
                this._waiting_calls[methodName + signature] = true;
            }
            return (_this.vortex[methodName].vortexCache[signature].data);
        }
        return (undefined);
    }
    vortexCall(methodName, methodAbiIndex, txArguments, ...methodArguments) {
        const _this = this;
        const _method_infos = _this._jsonInterface[methodAbiIndex];
        const _resolvers = {};
        const _ret = new Promise((ok, ko) => {
            _resolvers.success = ok;
            _resolvers.error = ko;
        });
        if (!vortex_1.Vortex.get()) {
            console.error("Vortex is not initialized");
            return (_ret);
        }
        _this.vortex = vortex_1.Vortex.get().Store.getState().contracts[_this.artifact.name][_this._address.toLowerCase()].instance.vortex;
        const dispatch = vortex_1.Vortex.get().Store.dispatch;
        const signature = VortexContract.callSignature(...methodArguments);
        if (_method_infos.constant) {
            if (_this.vortex[methodName].vortexCache[signature] === undefined) {
                _this.vortex[methodName].vortexCache[signature] = {};
                _this.vortex[methodName].vortexCache[signature].synced = false;
            }
            if (!_this.vortex[methodName].vortexCache[signature].synced) {
                dispatch(contracts_actions_1.ContractCall(_this.artifact.name, _this.options.address, methodName, txArguments, _resolvers, ...methodArguments));
            }
            else {
                return (new Promise((ok, ko) => {
                    ok(_this.vortex[methodName].vortexCache[signature].data);
                }));
            }
        }
        else {
            dispatch(contracts_actions_1.ContractSend(_this.artifact.name, _this.options.address, methodName, txArguments, _resolvers, ...methodArguments));
        }
        return (_ret);
    }
}
exports.VortexContract = VortexContract;
