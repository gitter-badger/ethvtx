import {Action} from "redux";

export interface Web3LoadAction extends Action {
    loader: Promise<any>,
    networks: number[]
}

export function Web3Load(loader: Promise<any>, networks: number[]): Web3LoadAction {
    return ({
        type: 'LOAD_WEB3',
        loader,
        networks
    });
}

export interface Web3LoadedAction extends Action {
    _: any,
    networkId: number,
    coinbase: string
}

export function Web3Loaded(_: any, networkId: number, coinbase: string): Web3LoadedAction {
    return ({
        type: 'LOADED_WEB3',
        _,
        networkId,
        coinbase
    })
}

export interface Web3LoadErrorAction extends Action {
    error: any
}

export function Web3LoadError(error: any): Web3LoadErrorAction {
    return ({
        type: 'LOAD_ERROR_WEB3',
        error
    })
}

export interface Web3NetworkErrorAction extends Action {
    networkId: number
}

export function Web3NetworkError(networkId: number): Web3NetworkErrorAction {
    return ({
        type: 'NETWORK_ERROR_WEB3',
        networkId
    })
}

export type Web3Actions = Web3LoadAction | Web3LoadedAction | Web3LoadErrorAction | Web3NetworkErrorAction;
