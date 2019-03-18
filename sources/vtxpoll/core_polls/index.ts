import { VtxpollEntity }                                                         from '../../state/vtxpoll';
import {
    poll_transaction,
    poll_transaction_interval
}                                                                                from './poll_transactions';
import { poll_blocks, poll_blocks_interval }                                     from './poll_blocks';
import { poll_contracts_constant_calls, poll_contracts_constant_calls_interval } from './poll_contracts_constant_calls';
import { poll_net_infos, poll_net_infos_interval }                               from './poll_net_infos';
import { poll_accounts, poll_accounts_interval }                                 from './poll_accounts';
import { poll_events, poll_events_interval }                                     from './poll_events';

export const getCorePolls: () => VtxpollEntity[] = (): VtxpollEntity[] =>
    [
        {
            cb: poll_transaction,
            interval: poll_transaction_interval,
            name: 'poll_transaction'
        },
        {
            cb: poll_blocks,
            interval: poll_blocks_interval,
            name: 'poll_blocks'
        },
        {
            cb: poll_contracts_constant_calls,
            interval: poll_contracts_constant_calls_interval,
            name: 'poll_contracts_constant_calls'
        },
        {
            cb: poll_net_infos,
            interval: poll_net_infos_interval,
            name: 'poll_net_infos'
        },
        {
            cb: poll_accounts,
            interval: poll_accounts_interval,
            name: 'poll_accounts'
        },
        {
            cb: poll_events,
            interval: poll_events_interval,
            name: 'poll_events'
        }
    ];
