import { VtxpollEntity }                                                         from '../../state/vtxpoll';
import {
    poll_transaction,
    poll_transaction_interval
}                                                                                from './poll_transactions';
import { poll_blocks, poll_blocks_interval }                                     from './poll_blocks';
import { poll_contracts_constant_calls, poll_contracts_constant_calls_interval } from './poll_contracts_constant_calls';
import { poll_net_infos, poll_net_infos_interval }                               from './poll_net_infos';

export const getCorePolls: () => VtxpollEntity[] = (): VtxpollEntity[] =>
    [
        {
            cb: poll_transaction,
            interval: poll_transaction_interval
        },
        {
            cb: poll_blocks,
            interval: poll_blocks_interval
        },
        {
            cb: poll_contracts_constant_calls,
            interval: poll_contracts_constant_calls_interval
        },
        {
            cb: poll_net_infos,
            interval: poll_net_infos_interval
        }
    ];
