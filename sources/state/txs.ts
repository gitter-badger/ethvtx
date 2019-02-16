export enum TxStatus {
    Broadcasted = 0,
    Confirming,
    Confirmed,
    Unknown,
    Error
}

export interface TxInfos {
    hash: string;
    nonce: number;
    blockHash: string;
    blockNumber: number;
    transactionIndex: number;
    from: string;
    to: string;
    value: string;
    gasPrice: string;
    gas: number;
    input: string;
    v?: string;
    r?: string;
    s?: string;
}

export interface Tx {
    infos: Partial<TxInfos>;
    status: TxStatus;
    e: Error;
    hash: string;
    id?: number;
}

export interface TxSection {
    [key: string]: Tx;
}
