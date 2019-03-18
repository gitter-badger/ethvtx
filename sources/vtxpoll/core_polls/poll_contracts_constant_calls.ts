import { VtxPollCb }                         from '../../state/vtxpoll';
import { State }                             from '../../state';
import { Dispatch }                          from 'redux';
import { VtxcacheSetData, VtxcacheSetError } from '../../vtxcache/actions/actions';

export const poll_contracts_constant_calls: VtxPollCb = async (state: State, emit: Dispatch, new_block: boolean): Promise<void> => {

        const current_block: number = state.blocks.current_height;

        for (const sig of Object.keys(state.vtxcache.store)) {

            if (!new_block && state.vtxcache.store[sig].block !== null) continue ;

            if (state.vtxcache.store[sig].required && state.vtxcache.store[sig].block !== current_block) {
                try {
                    const new_data: any = await state.vtxcache.store[sig].cb(current_block);
                    emit(VtxcacheSetData(sig, new_data, current_block));
                } catch (e) {
                    emit(VtxcacheSetError(sig, e, current_block));
                }
            }
        }

};

export const poll_contracts_constant_calls_interval: number = 1;
