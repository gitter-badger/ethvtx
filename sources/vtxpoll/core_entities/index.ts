import { VtxpollEntity } from '../../state/vtxpoll';
import {
    poll_transaction,
    poll_transaction_interval
}                        from './poll_transactions';

export const getCorePolls: () => VtxpollEntity[] = (): VtxpollEntity[] =>
    [
        {
            cb: poll_transaction,
            interval: poll_transaction_interval
        }
    ];
