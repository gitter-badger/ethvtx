"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sha1 = require("sha1");
const vortex_1 = require("../vortex");
const contracts_actions_1 = require("./contracts.actions");
class VortexContract {
    static callSignature(...methodArguments) {
        return (sha1(JSON.stringify({ methodArguments })));
    }
    getData(methodName, txArguments, ...methodArguments) {
        const _this = this;
        const signature = VortexContract.callSignature(...methodArguments);
        const dispatch = vortex_1.Vortex.get().Store.dispatch;
        _this.vortex = vortex_1.Vortex.get().Store.getState().contracts[_this.artifact.contractName][_this._address.toLowerCase()].instance.vortex;
        if ((_this.vortex[methodName])) {
            if (_this.vortex[methodName].vortexCache[signature]) {
                if (!_this.vortex[methodName].vortexCache[signature].synced)
                    dispatch(contracts_actions_1.ContractCall(_this.artifact.contractName, _this.options.address, methodName, txArguments, undefined, ...methodArguments));
            }
            else {
                _this.vortex[methodName].vortexCache[signature] = { synced: false };
                dispatch(contracts_actions_1.ContractCall(_this.artifact.contractName, _this.options.address, methodName, txArguments, undefined, ...methodArguments));
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
        _this.vortex = vortex_1.Vortex.get().Store.getState().contracts[_this.artifact.contractName][_this._address.toLowerCase()].instance.vortex;
        const dispatch = vortex_1.Vortex.get().Store.dispatch;
        const signature = VortexContract.callSignature(...methodArguments);
        if (_method_infos.constant) {
            if (_this.vortex[methodName].vortexCache[signature] === undefined) {
                _this.vortex[methodName].vortexCache[signature] = {};
                _this.vortex[methodName].vortexCache[signature].synced = false;
            }
            if (!_this.vortex[methodName].vortexCache[signature].synced) {
                dispatch(contracts_actions_1.ContractCall(_this.artifact.contractName, _this.options.address, methodName, txArguments, _resolvers, ...methodArguments));
            }
            else {
                return (new Promise((ok, ko) => {
                    ok(_this.vortex[methodName].vortexCache[signature].data);
                }));
            }
        }
        else {
            dispatch(contracts_actions_1.ContractSend(_this.artifact.contractName, _this.options.address, methodName, txArguments, _resolvers, ...methodArguments));
        }
        return (_ret);
    }
    constructor(artifact, address, coinbase, web3) {
        const contract_instance = new web3.eth.Contract(artifact.abi, address, {
            from: coinbase,
            data: artifact.deployedBytecode
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
                }
                else
                    _this.vortex[artifact.abi[abi_idx].name] = {};
                _this.vortex[artifact.abi[abi_idx].name].vortexSend = this.vortexCall.bind(this, artifact.abi[abi_idx].name, abi_idx);
            }
        }
    }
}
exports.VortexContract = VortexContract;
