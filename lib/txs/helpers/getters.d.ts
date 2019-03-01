import { Tx, TxInfos } from '../../state/txs';
import { State } from '../../state';
export declare const getTransaction: (state: State, tx_hash: string) => Tx;
export declare const getTransactionById: (state: State, tx_id: number) => Tx;
export declare const getTransactions: (state: State, tx_infos?: Partial<TxInfos>) => Tx[];
