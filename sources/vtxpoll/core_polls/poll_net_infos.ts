import { VtxPollCb }                      from '../../state/vtxpoll';
import { State }                          from '../../state';
import { Dispatch }                       from 'redux';
import { VtxconfigReset }                 from '../../vtxconfig/actions/actions';
import { address_checker }                from '../../utils/address_checker';

export const poll_net_infos: VtxPollCb = async (state: State, emit: Dispatch): Promise<void> => {
    const web3 = state.vtxconfig.web3;

    const current_coinbase: string = address_checker(await web3.eth.getCoinbase());

    if (current_coinbase !== state.vtxconfig.coinbase) {
        emit(VtxconfigReset());
        return ;
    }

    const current_net: number = await web3.eth.net.getId();

    if (current_net !== state.vtxconfig.net_id) {
        emit(VtxconfigReset());
        return ;
    }

};

export const poll_net_infos_interval: number = 10;
