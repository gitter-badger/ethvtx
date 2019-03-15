import { TxSection } from './txs';
import { VtxconfigSection } from './vtxconfig';
import { VtxeventsSection } from './vtxevents';
import { VtxpollSection } from './vtxpoll';
import { ContractsSection } from './contracts';
import { BlocksSection } from './blocks';
import { VtxcacheSection } from './vtxcache';
import { AccountsSection } from './accounts';
import { EventsSection } from './events';
export interface State {
    txs: TxSection;
    contracts: ContractsSection;
    blocks: BlocksSection;
    accounts: AccountsSection;
    events: EventsSection;
    vtxconfig: VtxconfigSection;
    vtxevents: VtxeventsSection[];
    vtxpoll: VtxpollSection;
    vtxcache: VtxcacheSection;
}
export declare const InitialState: State;
