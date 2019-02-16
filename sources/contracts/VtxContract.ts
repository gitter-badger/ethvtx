import { Contract, Signer, utils }             from 'ethers';
import { State }                               from '../state';
import { Dispatch, Store }                     from 'redux';
import { VtxcacheElement }                     from '../state/vtxcache';
import { VtxcacheCreate, VtxcacheSetRequired } from '../vtxcache/actions/actions';
import { VtxcacheCb }                          from '../vtxcache/actions/actionTypes';
import { get_tx_id }                           from '../utils/get_tx_id';
import { ContractsSend }                       from './actions/actions';

const hexReg = /^[a-fA-F0-9]+$/;
const methodReg = /^[a-zA-Z0-9_]+$/;

interface Methods {
    [key: string]: (...args: any[]) => any;
}

export class VtxContract {

    private static store: Store;
    private _contract: Contract;
    private readonly _bin: string;
    private _signer: Signer;
    private _valid: boolean = false;
    private readonly _name: string;
    private readonly _methods: Methods = {};
    private readonly _address: string;
    private readonly _abi: any;

    constructor(name: string, signer: Signer, address: string, abi: any, bin?: string) {
        this._contract = new Contract(address, abi, signer);
        this._signer = signer;
        this._name = name;
        this._address = address;
        this._abi = abi;

        let hex_begin = 0;

        if (bin && (hexReg.test(bin) || hexReg.test(bin.slice((hex_begin = 2))))) {
            this._bin = bin.slice(hex_begin).toLowerCase();
        }

        if (!VtxContract.store) {
            throw new Error('Call VtxContract.init(store) to properly init all the contracts');
        }

        this.generate_constant_calls();
        this.generate_transaction_calls();
    }

    private static get dispatch(): Dispatch {
        if (!VtxContract.store) {
            throw new Error('Call VtxContract.init(store) to properly init all the contracts');
        }

        return VtxContract.store.dispatch;
    }

    public get fn(): Methods {
        return this._methods;
    }

    public static sig = (contract_name: string, contract_address: string, method_name: string, ...args: any[]): string => {
        let payload: string = `${contract_name}:${contract_address}:${method_name}`;
        for (const arg of args) {
            switch (typeof arg) {

                case 'number':
                case 'string':
                    payload += `:${arg}`;
                    break;

                case 'object':
                default:
                    payload += `:${JSON.stringify(arg)}`;
            }
        }
        return utils.keccak256(`0x${new Buffer(payload).toString('hex')}`);
    }

    public static init = (store: Store): void => {
        VtxContract.store = store;
    }

    private static readonly getState = (): State => {
        if (!VtxContract.store) {
            throw new Error('Call VtxContract.init(store) to properly init all the contracts');
        }

        return VtxContract.store.getState();
    }

    public reset = (signer: Signer): void => {
        this._valid = false;
        this._signer = signer;
        this._contract = new Contract(this._address, this._abi, signer);
    }

    public readonly valid = async (): Promise<void> => {
        if (this._valid) return;
        if (!this._bin) {
            this._valid = true;
            return;
        }

        const code = (await this._signer.provider.getCode(this._contract.address)).slice(2);

        if (code.toLowerCase() !== this._bin) {
            throw new Error(`Invalid Contract Instance at address ${this._contract.address}: no matching bin`);
        }
        this._valid = true;
    }

    public readonly isValid = (): boolean => this._valid;

    private readonly generate_transaction_calls = (): void => {
        for (const method of Object.keys(this._contract.interface.functions)) {
            if (methodReg.test(method) && this._contract.interface.functions[method].type === 'transaction') {
                this._methods[method] = (...args: any[]): number => {
                    if (!this._valid) throw new Error('VtxContract instance has not been validated');

                    const tx_id: number = get_tx_id();
                    VtxContract.store.dispatch(ContractsSend(
                        async (): Promise<string> => (await this._contract.functions[method](...args)).hash,
                        tx_id,
                        method,
                        args,
                        this._name,
                        this._address
                    ));

                    return tx_id;
                };
            }
        }
    }

    private readonly generate_constant_calls = (): void => {
        for (const method of Object.keys(this._contract.interface.functions)) {
            if (methodReg.test(method) && this._contract.interface.functions[method].type === 'call') {

                // TODO Compute return value

                this._methods[method] = (...args: any[]): any => {
                    if (!this._valid) return undefined;

                    // TODO Argument check;
                    const sig: string = VtxContract.sig(this._name, this._contract.address, method, ...args);

                    const state: State = VtxContract.getState();

                    const cache: VtxcacheElement = state.vtxcache.store[sig];

                    if (cache === undefined) {

                        // TODO compute generic argument from abi
                        // tslint:disable-next-line
                        const cb: VtxcacheCb<any> = async (block: number): Promise<any> => {
                            // TODO identify the configuration arg (if it exists) and insert blockTag

                            return this._contract.functions[method](...args);
                        };

                        VtxContract.dispatch(VtxcacheCreate(sig, cb));

                    } else if (cache.required === false) {
                        VtxContract.dispatch(VtxcacheSetRequired(sig));
                    }

                    const cache_value = state.vtxcache.store[sig];
                    if (!cache_value) return undefined;
                    if (cache_value.error) return {error: cache_value.error, block: cache_value.block};
                    return cache_value.data;

                };
            }
        }
    }

}
