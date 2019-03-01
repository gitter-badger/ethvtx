import { Store } from 'redux';
interface Methods {
    [key: string]: (...args: any[]) => any;
}
export declare class VtxContract {
    private static store;
    private _contract;
    private readonly _bin;
    private _valid;
    private readonly _name;
    private readonly _methods;
    private readonly _address;
    private readonly _abi;
    constructor(web3: Web3, name: string, address: string, abi: any, bin?: string);
    private static readonly dispatch;
    readonly fn: Methods;
    static sig: (contract_name: string, contract_address: string, method_name: string, ...args: any[]) => string;
    static init: (store: Store<any, import("redux").AnyAction>) => void;
    private static readonly getState;
    reset: (web3: any) => void;
    readonly valid: () => Promise<void>;
    readonly isValid: () => boolean;
    private static readonly tx_inspect_args;
    private readonly generate_transaction_calls;
    private static readonly const_inspect_args;
    private readonly generate_constant_calls;
}
export {};
