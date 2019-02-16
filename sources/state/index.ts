import { TxSection }        from './txs';
import { VtxconfigSection } from './vtxconfig';
import { VtxeventsSection } from './vtxevents';
import { VtxpollSection }   from './vtxpoll';
import { ContractsSection } from './contracts';
import { BlocksSection }    from './blocks';
import { VtxcacheSection }  from './vtxcache';

export interface State {
    txs: TxSection;
    contracts: ContractsSection;
    blocks: BlocksSection;

    vtxconfig: VtxconfigSection;
    vtxevents: VtxeventsSection[];
    vtxpoll: VtxpollSection;
    vtxcache: VtxcacheSection;
}
