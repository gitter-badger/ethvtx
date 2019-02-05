const TxHashRegex: any = /0x[a-fA-F0-9]{64}/;

export const tx_hash_checker = (tx_hash: string): string => {
    if (!TxHashRegex.test(tx_hash)) {
        throw new Error(`Invalid Transaction Hash ${tx_hash}`);
    }
    return tx_hash.toLowerCase();
};
