import { VtxPollCb }                         from '../../state/vtxpoll';
import { State }                             from '../../state';
import { Dispatch }                          from 'redux';
import { ready }                             from '../../utils/ready';
import { VtxcacheSetData, VtxcacheSetError } from '../../vtxcache/actions/actions';

let polling: boolean = false;

export const poll_contracts_constant_calls: VtxPollCb = async (state: State, emit: Dispatch): Promise<void> => {
    if (ready(state) && !polling) {
        polling = true;

        const current_block: number = state.blocks.current_height;

        for (const sig of Object.keys(state.vtxcache.store)) {
            if (state.vtxcache.store[sig].required && state.vtxcache.store[sig].block !== current_block) {
                try {
                    const new_data: any = await state.vtxcache.store[sig].cb(current_block);
                    emit(VtxcacheSetData(sig, new_data, current_block));
                } catch (e) {
                    emit(VtxcacheSetError(sig, e, current_block));
                }
            }
        }

        polling = false;
    }
};

export const poll_contracts_constant_calls_interval: number = 5;
