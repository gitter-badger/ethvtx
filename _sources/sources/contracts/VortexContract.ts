import ContractArtifact from 'truffle-contract-schema';
import * as sha1 from 'sha1';
import {Vortex} from "../vortex";
import {ContractCall, ContractSend} from "./contracts.actions";
import {TransactionArgumentState} from "../stateInterface";

interface FetchedData {
    data: any,
    synced: boolean
}

interface SignatureCalls {
    [key: string]: FetchedData;
}

export class VortexContract {

    public static callSignature(...methodArguments: any[]): string {
        return (sha1(JSON.stringify({methodArguments})));
    }

    private getData(methodName: string, txArguments: TransactionArgumentState, ...methodArguments: any[]): any {
        const _this: any = this;
        const signature = VortexContract.callSignature(...methodArguments);
        const dispatch = Vortex.get().Store.dispatch;
        if ((_this.methods[methodName])
            && (_this.methods[methodName].vortexCache[signature])) {
            if (!_this.methods[methodName].vortexCache[signature].synced)
                dispatch(ContractCall(_this.artifact.contractName, _this.options.address, methodName, txArguments, undefined, ...methodArguments));
            return (_this.methods[methodName].vortexCache[signature].data);
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

        const dispatch = Vortex.get().Store.dispatch;

        const signature = VortexContract.callSignature(...methodArguments);

        if (_method_infos.constant) {
            if (_this.methods[methodName].vortexCache[signature] === undefined) {
                _this.methods[methodName].vortexCache[signature] = {};
                _this.methods[methodName].vortexCache[signature].synced = false;
            }
            if (!_this.methods[methodName].vortexCache[signature].synced) {
                dispatch(ContractCall(_this.artifact.contractName, _this.options.address, methodName, txArguments, _resolvers, ...methodArguments));
            } else {
                return (new Promise<string>((ok: (arg: any) => void, ko: (arg: any) => void): void => {
                    ok(_this.methods[methodName].vortexCache[signature].data);
                }));
            }
        } else {
            dispatch(ContractSend(_this.artifact.contractName, _this.options.address, methodName, txArguments, _resolvers, ...methodArguments));
        }

        return (_ret);
    }

    constructor(artifact: ContractArtifact, address: string, coinbase: string, web3: any) {

        const contract_instance = new web3.eth.Contract(artifact.abi, address, {
            from: coinbase,
            data: artifact.deployedBytecode
        });

        Object.assign(this, contract_instance);
        const _this: any = this;

        _this.artifact = artifact;

        for (let abi_idx = 0; abi_idx < artifact.abi.length; ++ abi_idx) {
            if (artifact.abi[abi_idx].type === 'function') {
                if (artifact.abi[abi_idx].constant) {
                    _this.methods[artifact.abi[abi_idx].name].vortexCall = this.vortexCall.bind(this, artifact.abi[abi_idx].name, abi_idx);
                    _this.methods[artifact.abi[abi_idx].name].vortexCache = {} as SignatureCalls;
                    _this.methods[artifact.abi[abi_idx].name].vortexData = this.getData.bind(this, artifact.abi[abi_idx].name);
                } else
                    _this.methods[artifact.abi[abi_idx].name].vortexSend = this.vortexCall.bind(this, artifact.abi[abi_idx].name, abi_idx);
            }
        }

    }

}