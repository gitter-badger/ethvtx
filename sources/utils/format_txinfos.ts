import { TxInfos } from '../state/txs';
import { encode } from 'eip55';

export const format_txinfos = (tx_infos: Partial<TxInfos>): Partial<TxInfos> => {
    if (tx_infos.from) tx_infos.from = encode(tx_infos.from);
    if (tx_infos.to) tx_infos.to = encode(tx_infos.to);
    return tx_infos;
};
