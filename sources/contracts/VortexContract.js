"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sha1 = require("sha1");
const vortex_1 = require("../vortex");
const contracts_actions_1 = require("./contracts.actions");
const TransactionArgumentList = [
    "from",
    "to",
    "gas",
    "gasPrice",
    "value",
    "data",
    "nonce"
];
class VortexContract {
    constructor(artifact, address, coinbase, web3) {
        this._waiting_calls = {};
        const contract_instance = new web3.eth.Contract(artifact.abi, address, {
            from: coinbase,
            data: artifact.bytecode
        });
        contract_instance.vortexMethods = {};
        Object.assign(this, contract_instance);
        const _this = this;
        _this.artifact = artifact;
        for (let abi_idx = 0; abi_idx < artifact.abi.length; ++abi_idx) {
            if (artifact.abi[abi_idx].type === 'function') {
                _this.vortexMethods[artifact.abi[abi_idx].name] = {};
                if (artifact.abi[abi_idx].constant) {
                    _this.vortexMethods[artifact.abi[abi_idx].name].call = this.vortexCall.bind(this, artifact.abi[abi_idx].name, abi_idx);
                    _this.vortexMethods[artifact.abi[abi_idx].name].cache = {};
                    _this.vortexMethods[artifact.abi[abi_idx].name].data = this.getData.bind(this, artifact.abi[abi_idx].name);
                    _this.vortexMethods[artifact.abi[abi_idx].name].constantData = this.getDataWithoutRefresh.bind(this, artifact.abi[abi_idx].name);
                }
                else {
                    _this.vortexMethods[artifact.abi[abi_idx].name].send = this.vortexCall.bind(this, artifact.abi[abi_idx].name, abi_idx);
                }
            }
        }
    }
    static callSignature(...methodArguments) {
        return (sha1(JSON.stringify({ methodArguments })));
    }
    getDataWithoutRefresh(methodName, ...methodArguments) {
        let txArguments = {};
        if (methodArguments.length && typeof methodArguments[methodArguments.length - 1] === 'object') {
            for (let attribute_idx = 0; attribute_idx < Object.keys(methodArguments[methodArguments.length - 1]).length; ++attribute_idx) {
                if (TransactionArgumentList.indexOf(Object.keys(methodArguments[methodArguments.length - 1])[attribute_idx]) === -1) {
                    break;
                }
            }
            txArguments = methodArguments[methodArguments.length - 1];
            methodArguments.pop();
        }
        const _this = this;
        const signature = VortexContract.callSignature(...methodArguments);
        const dispatch = vortex_1.Vortex.get().Store.dispatch;
        _this.vortexMethods = vortex_1.Vortex.get().Store.getState().contracts[_this.artifact.name][_this._address.toLowerCase()].instance.vortexMethods;
        if ((_this.vortexMethods[methodName])) {
            if (_this._waiting_calls[methodName + signature] || _this.vortexMethods[methodName].cache[signature]) {
                if (!_this.vortexMethods[methodName].cache[signature].disable_refresh)
                    _this.vortexMethods[methodName].cache[signature] = { synced: true, disable_refresh: false };
                if (this._waiting_calls[methodName + signature] && _this.vortexMethods[methodName].cache[signature])
                    this._waiting_calls[methodName + signature] = false;
                return (_this.vortexMethods[methodName].cache[signature].data);
            }
            else {
                _this.vortexMethods[methodName].cache[signature] = { synced: false, disable_refresh: true };
                dispatch(contracts_actions_1.ContractCall(_this.artifact.name, _this.options.address, methodName, txArguments, undefined, ...methodArguments));
                this._waiting_calls[methodName + signature] = true;
            }
            return (_this.vortexMethods[methodName].cache[signature].data);
        }
        return (undefined);
    }
    getData(methodName, ...methodArguments) {
        let txArguments = {};
        if (methodArguments.length && typeof methodArguments[methodArguments.length - 1] === 'object') {
            for (let attribute_idx = 0; attribute_idx < Object.keys(methodArguments[methodArguments.length - 1]).length; ++attribute_idx) {
                if (TransactionArgumentList.indexOf(Object.keys(methodArguments[methodArguments.length - 1])[attribute_idx]) === -1) {
                    break;
                }
            }
            txArguments = methodArguments[methodArguments.length - 1];
            methodArguments.pop();
        }
        const _this = this;
        const signature = VortexContract.callSignature(...methodArguments);
        const dispatch = vortex_1.Vortex.get().Store.dispatch;
        _this.vortexMethods = vortex_1.Vortex.get().Store.getState().contracts[_this.artifact.name][_this._address.toLowerCase()].instance.vortexMethods;
        if ((_this.vortexMethods[methodName])) {
            if (_this.vortexMethods[methodName].cache[signature]) {
                if (_this.vortexMethods[methodName].cache[signature].disable_refresh)
                    _this.vortexMethods[methodName].cache[signature] = Object.assign({}, _this.vortexMethods[methodName].cache[signature], { disable_refresh: false });
                if (!_this.vortexMethods[methodName].cache[signature].synced && !this._waiting_calls[methodName + signature]) {
                    dispatch(contracts_actions_1.ContractCall(_this.artifact.name, _this.options.address, methodName, txArguments, undefined, ...methodArguments));
                    this._waiting_calls[methodName + signature] = true;
                }
                else if (_this.vortexMethods[methodName].cache[signature].synced && this._waiting_calls[methodName + signature])
                    this._waiting_calls[methodName + signature] = false;
            }
            else {
                _this.vortexMethods[methodName].cache[signature] = { synced: false, disable_refresh: false };
                dispatch(contracts_actions_1.ContractCall(_this.artifact.name, _this.options.address, methodName, txArguments, undefined, ...methodArguments));
                this._waiting_calls[methodName + signature] = true;
            }
            return (_this.vortexMethods[methodName].cache[signature].data);
        }
        return (undefined);
    }
    vortexCall(methodName, methodAbiIndex, ...methodArguments) {
        let txArguments = {};
        if (methodArguments.length && typeof methodArguments[methodArguments.length - 1] === 'object') {
            for (let attribute_idx = 0; attribute_idx < Object.keys(methodArguments[methodArguments.length - 1]).length; ++attribute_idx) {
                if (TransactionArgumentList.indexOf(Object.keys(methodArguments[methodArguments.length - 1])[attribute_idx]) === -1) {
                    break;
                }
            }
            txArguments = methodArguments[methodArguments.length - 1];
            methodArguments.pop();
        }
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
        _this.vortexMethods = vortex_1.Vortex.get().Store.getState().contracts[_this.artifact.name][_this._address.toLowerCase()].instance.vortexMethods;
        const dispatch = vortex_1.Vortex.get().Store.dispatch;
        const signature = VortexContract.callSignature(...methodArguments);
        if (_method_infos.constant) {
            if (_this.vortexMethods[methodName].cache[signature] === undefined) {
                _this.vortexMethods[methodName].cache[signature] = {};
                _this.vortexMethods[methodName].cache[signature].synced = false;
            }
            if (!_this.vortexMethods[methodName].cache[signature].synced) {
                dispatch(contracts_actions_1.ContractCall(_this.artifact.name, _this.options.address, methodName, txArguments, _resolvers, ...methodArguments));
            }
            else {
                return (new Promise((ok, ko) => {
                    ok(_this.vortexMethods[methodName].cache[signature].data);
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
