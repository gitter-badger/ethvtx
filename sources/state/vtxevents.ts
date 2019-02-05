export enum VtxeventsTypes {
    Error = 0,
    TxBroadcasted,
    TxFollowed,
    TxConfirmed,
    TxError
}

export interface Vtxevent {
    type: VtxeventsTypes;
}

export enum VtxeventErrorTypes {
    TxBroadcastError = 0,
    TxFollowError
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

export type VtxeventsSection = Vtxevent;
