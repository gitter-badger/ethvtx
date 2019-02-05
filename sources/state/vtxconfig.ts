import Web3 = require('web3');

export enum VtxStatus {
    Loading = 0,
    Idle,
    Loaded,
    WrongNet,
    Error
}

export interface VtxResetStatus {
    txs: boolean;
}

export interface VtxconfigSection {
    web3: Web3;
    last_error: Error;
    status: VtxStatus;
    reset_status: VtxResetStatus;
    poll_timer: number;
    confirmation_treshold: number;
}
