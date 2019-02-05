import { TxInfos } from '../state/txs';
import { utils }   from 'ethers';

export const format_txinfos = (tx_infos: Partial<TxInfos>): Partial<TxInfos> => {
    if (tx_infos.from) tx_infos.from = utils.getAddress(tx_infos.from);
    if (tx_infos.to) tx_infos.to = utils.getAddress(tx_infos.to);
    return tx_infos;
};
