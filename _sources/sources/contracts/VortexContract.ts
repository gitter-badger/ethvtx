import ContractArtifact from 'truffle-contract-schema';
import * as sha1 from 'sha1';
import {Vortex} from "../vortex";
import {ContractCall, ContractSend} from "./contracts.actions";
import {TransactionArgumentState} from "../stateInterface";

interface FetchedData {
    data: any,
    synced: boolean,
    error: any
}

interface SignatureCalls {
    [key: string]: FetchedData;
}

interface CachedWaitingCalls {
    [key: string]: boolean;
}

export class VortexContract {

    public static callSignature(...methodArguments: any[]): string {
        return (sha1(JSON.stringify({methodArguments})));
    }

    private _wating_calls: CachedWaitingCalls = {};

    private getDataWithoutRefresh(methodName: string, txArguments: TransactionArgumentState, ...methodArguments: any[]): any {
        const _this: any = this;
        const signature = VortexContract.callSignature(...methodArguments);
        const dispatch = Vortex.get().Store.dispatch;
        _this.vortex = Vortex.get().Store.getState().contracts[_this.artifact.name][_this._address.toLowerCase()].instance.vortex;
        if ((_this.vortex[methodName])) {
            if (_this.waiting_calls[methodName + signature] || _this.vortex[methodName].vortexCache[signature]) {
                if (!_this.vortex[methodName].vortexCache[signature].disable_refresh)
                    _this.vortex[methodName].vortexCache[signature] = {synced: true, disable_refresh: false};
                if (this._wating_calls[methodName + signature] && _this.vortex[methodName].vortexCache[signature])
                    this._wating_calls[methodName + signature] = false;
                return (_this.vortex[methodName].vortexCache[signature].data);
            } else {
                _this.vortex[methodName].vortexCache[signature] = {synced: false, disable_refresh: true};
                dispatch(ContractCall(_this.artifact.name, _this.options.address, methodName, txArguments, undefined, ...methodArguments));
                this._wating_calls[methodName + signature] = true;
            }
            return (_this.vortex[methodName].vortexCache[signature].data);
        }
        return (undefined);
    }

    private getData(methodName: string, txArguments: TransactionArgumentState, ...methodArguments: any[]): any {
        const _this: any = this;
        const signature = VortexContract.callSignature(...methodArguments);
        const dispatch = Vortex.get().Store.dispatch;
        _this.vortex = Vortex.get().Store.getState().contracts[_this.artifact.name][_this._address.toLowerCase()].instance.vortex;
        if ((_this.vortex[methodName])) {
            if (_this.vortex[methodName].vortexCache[signature]) {
                if (_this.vortex[methodName].vortexCache[signature].disable_refresh)
                    _this.vortex[methodName].vortexCache[signature] = {..._this.vortex[methodName].vortexCache[signature], disable_refresh: false};
                if (!_this.vortex[methodName].vortexCache[signature].synced && !this._wating_calls[methodName + signature]) {
                    dispatch(ContractCall(_this.artifact.name, _this.options.address, methodName, txArguments, undefined, ...methodArguments));
                    this._wating_calls[methodName + signature] = true;
                } else if (_this.vortex[methodName].vortexCache[signature].synced && this._wating_calls[methodName + signature])
                    this._wating_calls[methodName + signature] = false;
            } else {
                _this.vortex[methodName].vortexCache[signature] = {synced: false, disable_refresh: false};
                dispatch(ContractCall(_this.artifact.name, _this.options.address, methodName, txArguments, undefined, ...methodArguments));
                this._wating_calls[methodName + signature] = true;
            }
            return (_this.vortex[methodName].vortexCache[signature].data);
        }
        return (undefined);
    }

    private vortexCall(methodName: string, methodAbiIndex: number, txArguments: TransactionArgumentState, ...methodArguments: any[]): Promise<any> {
        const _this: any = this;
        const _method_infos: any = _this._jsonInterface[methodAbiIndex];
        const _resolvers: any = {};
        const _ret: Promise<any> = new Promise<any>((ok: (arg?: any) => void, ko: (arg?: any) => void): void => {
            _resolvers.success = ok;
            _resolvers.error = ko;
        });

        if (!Vortex.get()) {
            console.error("Vortex is not initialized");
            return (_ret);
        }

        _this.vortex = Vortex.get().Store.getState().contracts[_this.artifact.name][_this._address.toLowerCase()].instance.vortex;
        const dispatch = Vortex.get().Store.dispatch;

        const signature = VortexContract.callSignature(...methodArguments);

        if (_method_infos.constant) {
            if (_this.vortex[methodName].vortexCache[signature] === undefined) {
                _this.vortex[methodName].vortexCache[signature] = {};
                _this.vortex[methodName].vortexCache[signature].synced = false;
            }
            if (!_this.vortex[methodName].vortexCache[signature].synced) {
                dispatch(ContractCall(_this.artifact.name, _this.options.address, methodName, txArguments, _resolvers, ...methodArguments));
            } else {
                return (new Promise<string>((ok: (arg: any) => void, ko: (arg: any) => void): void => {
                    ok(_this.vortex[methodName].vortexCache[signature].data);
                }));
            }
        } else {
            dispatch(ContractSend(_this.artifact.name, _this.options.address, methodName, txArguments, _resolvers, ...methodArguments));
        }

        return (_ret);
    }

    constructor(artifact: ContractArtifact, address: string, coinbase: string, web3: any) {

        const contract_instance = new web3.eth.Contract(artifact.abi, address, {
            from: coinbase,
            data: artifact.bytecode
        });

        contract_instance.vortex = {};

        Object.assign(this, contract_instance);
        const _this: any = this;

        _this.artifact = artifact;

        for (let abi_idx = 0; abi_idx < artifact.abi.length; ++ abi_idx) {
            if (artifact.abi[abi_idx].type === 'function') {
                if (artifact.abi[abi_idx].constant) {
                    _this.vortex[artifact.abi[abi_idx].name] = {};
                    _this.vortex[artifact.abi[abi_idx].name].vortexCall = this.vortexCall.bind(this, artifact.abi[abi_idx].name, abi_idx);
                    _this.vortex[artifact.abi[abi_idx].name].vortexCache = {} as SignatureCalls;
                    _this.vortex[artifact.abi[abi_idx].name].vortexData = this.getData.bind(this, artifact.abi[abi_idx].name);
                    _this.vortex[artifact.abi[abi_idx].name].vortexConstantData = this.getDataWithoutRefresh.bind(this, artifact.abi[abi_idx].name);
                } else
                    _this.vortex[artifact.abi[abi_idx].name] = {};
                _this.vortex[artifact.abi[abi_idx].name].vortexSend = this.vortexCall.bind(this, artifact.abi[abi_idx].name, abi_idx);
            }
        }

    }

}
