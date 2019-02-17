export enum VtxeventsTypes {
    Error = 0,

    TxBroadcasted,
    TxFollowed,
    TxConfirmed,
    TxError,
    TxInvalid,

    ContractsSpecAdded,
    ContractsSpecRemoved,
    ContractsInstanceAdded,
    ContractsInstanceRemoved,
    ContractsTxBroadcasted
}

export interface Vtxevent {
    type: VtxeventsTypes;
}

export enum VtxeventErrorTypes {
    TxBroadcastError = 0,
    TxFollowError,
    BlockFetchError,
    ContractInvalid,
    ContractTxError
}

export interface VtxeventsError extends Vtxevent {
    e: Error;
    error_type: VtxeventErrorTypes;
}

export interface VtxeventsTxBroadcasted extends Vtxevent {
    tx_hash: string;
}

export type VtxeventsTxAdded = VtxeventsTxBroadcasted;
export type VtxeventsTxConfirmed = VtxeventsTxBroadcasted;
export type VtxeventsTxError = VtxeventsTxBroadcasted;
export type VtxeventsTxInvalid = VtxeventsTxBroadcasted;

export interface VtxeventsContractsSpecAdded extends Vtxevent {
    name: string;
}

export type VtxeventsContractsSpecRemoved = VtxeventsContractsSpecAdded;

export interface VtxeventsContractsInstanceAdded extends Vtxevent {
    contract: string;
    address: string;
}

export interface VtxeventsContractsTxBroadcasted extends Vtxevent {
    contract: string;
    address: string;
    method: string;
    args: any[];
    tx_hash: string;
}

export type VtxeventsContractsInstanceRemove = VtxeventsContractsInstanceAdded;

export type VtxeventsSection = Vtxevent;
