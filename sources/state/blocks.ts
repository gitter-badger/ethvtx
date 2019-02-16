export interface Block {
    number: number;
    hash: string;
    parentHash: string;
    mixHash: string;
    nonce: string;
    sha3Uncles: string;
    logsBloom: string;
    transactionsRoot: string;
    stateRoot: string;
    receiptsRoot: string;
    miner: string;
    difficulty: string;
    totalDifficulty: string;
    extraData: string;
    size: number;
    gasLimit: number;
    gasUsed: number;
    timestamp: number;
    transactions: string[];
    uncles: string[];
}

export interface BlockStore {
    [key: number]: Block;
}

export interface BlocksSection {
    initial_height: number;
    current_height: number;
    blocks: BlockStore;
}
