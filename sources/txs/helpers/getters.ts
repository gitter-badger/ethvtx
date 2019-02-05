import { Tx, TxInfos }    from '../../state/txs';
import { State }          from '../../state';
import { format_txinfos } from '../../utils/format_txinfos';

export const getTransaction = (state: State, tx_hash: string): Tx => {
    if (tx_hash) {
        return state.txs[tx_hash];
    }
};

export const getTransactionById = (state: State, tx_id: number): Tx =>
    Object.keys(state.txs)
        .map((key: string): Tx => state.txs[key])
        .filter((elem: Tx) => elem.id === tx_id)[0];

export const getTransactions = (state: State, tx_infos?: Partial<TxInfos>): Tx[] => {
    if (!tx_infos) {
        return Object.keys(state.txs).map((key: string) => state.txs[key]);
    } else {
        tx_infos = format_txinfos(tx_infos);
        return Object.keys(state.txs)
            .map((key: string) => state.txs[key])
            .filter((elem: Tx) => !tx_infos.from || tx_infos.from === elem.infos.from)
            .filter((elem: Tx) => !tx_infos.to || tx_infos.to === elem.infos.to)
            .filter((elem: Tx) => !tx_infos.input || tx_infos.input === elem.infos.input)
            .filter((elem: Tx) => !tx_infos.hash || tx_infos.hash === elem.infos.hash)
            .filter((elem: Tx) => !tx_infos.nonce || tx_infos.nonce === elem.infos.nonce)
            .filter((elem: Tx) => !tx_infos.blockHash || tx_infos.blockHash === elem.infos.blockHash)
            .filter((elem: Tx) => !tx_infos.blockNumber || tx_infos.blockNumber === elem.infos.blockNumber)
            .filter((elem: Tx) => !tx_infos.transactionIndex || tx_infos.transactionIndex === elem.infos.transactionIndex)
            .filter((elem: Tx) => !tx_infos.value || tx_infos.value === elem.infos.value)
            .filter((elem: Tx) => !tx_infos.gasPrice || tx_infos.gasPrice === elem.infos.gasPrice)
            .filter((elem: Tx) => !tx_infos.gas || tx_infos.gas === elem.infos.gas)
            .filter((elem: Tx) => !tx_infos.input || tx_infos.input === elem.infos.input)
            .filter((elem: Tx) => !tx_infos.r || tx_infos.r === elem.infos.r)
            .filter((elem: Tx) => !tx_infos.v || tx_infos.v === elem.infos.v)
            .filter((elem: Tx) => !tx_infos.s || tx_infos.s === elem.infos.s);
    }
};
