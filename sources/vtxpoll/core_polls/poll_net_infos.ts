import { VtxPollCb }                      from '../../state/vtxpoll';
import { State }                          from '../../state';
import { Dispatch }                       from 'redux';
import { ready }                          from '../../utils/ready';
import { Block }                          from '../../state/blocks';
import { BlocksFetchedHeight, BlocksNew } from '../../blocks/actions/actions';
import { VtxconfigReset }                 from '../../vtxconfig/actions/actions';

let polling: boolean = false;

export const poll_net_infos: VtxPollCb = async (state: State, emit: Dispatch): Promise<void> => {
    if (ready(state) && !polling) {
        polling = true;

        const web3 = state.vtxconfig.web3;

        const current_coinbase: string = await web3.eth.getCoinbase();

        if (current_coinbase !== state.vtxconfig.coinbase) {
            emit(VtxconfigReset());
            polling = false;
            return ;
        }

        const current_net: number = await web3.eth.net.getId();

        if (current_net !== state.vtxconfig.net) {
            emit(VtxconfigReset());
            polling = false;
            return ;
        }

        polling = false;
    }
};

export const poll_net_infos_interval: number = 5;
