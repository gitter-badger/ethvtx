import { TxSection }        from './txs';
import { VtxconfigSection } from './vtxconfig';
import { VtxeventsSection } from './vtxevents';
import { VtxpollSection }   from './vtxpoll';

export interface State {
    txs: TxSection;

    vtxconfig: VtxconfigSection;
    vtxevents: VtxeventsSection[];
    vtxpoll: VtxpollSection;
}
