export declare enum VtxeventsTypes {
    Error = 0,
    TxBroadcasted = 1,
    TxFollowed = 2,
    TxConfirmed = 3,
    TxError = 4,
    TxInvalid = 5,
    ContractsSpecAdded = 6,
    ContractsSpecRemoved = 7,
    ContractsInstanceAdded = 8,
    ContractsInstanceRemoved = 9,
    ContractsTxBroadcasted = 10
}
export interface Vtxevent {
    type: VtxeventsTypes;
}
export declare enum VtxeventErrorTypes {
    TxBroadcastError = 0,
    TxFollowError = 1,
    BlockFetchError = 2,
    ContractInvalid = 3,
    ContractTxError = 4,
    TxFetchError = 5
}
export interface VtxeventsError extends Vtxevent {
    e: Error;
    error_type: VtxeventErrorTypes;
}
export interface VtxeventsTxBroadcasted extends Vtxevent {
    tx_hash: string;
}
export declare type VtxeventsTxAdded = VtxeventsTxBroadcasted;
export declare type VtxeventsTxConfirmed = VtxeventsTxBroadcasted;
export declare type VtxeventsTxError = VtxeventsTxBroadcasted;
export declare type VtxeventsTxInvalid = VtxeventsTxBroadcasted;
export interface VtxeventsContractsSpecAdded extends Vtxevent {
    name: string;
}
export declare type VtxeventsContractsSpecRemoved = VtxeventsContractsSpecAdded;
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
export declare type VtxeventsContractsInstanceRemove = VtxeventsContractsInstanceAdded;
export declare type VtxeventsSection = Vtxevent;
