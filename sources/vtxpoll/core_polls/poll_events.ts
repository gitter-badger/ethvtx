import { VtxPollCb }                     from '../../state/vtxpoll';
import { State }                         from '../../state';
import { Dispatch }                      from 'redux';
import { ready }                         from '../../utils/ready';
import { EventsFollowed, Web3Event }     from '../../state/events';
import { VtxContract }                   from '../../contracts/VtxContract';
import { EventsCaught, EventsSetHeight } from '../../events/actions/actions';

let polling: boolean = false;

export const poll_events: VtxPollCb = async (state: State, emit: Dispatch): Promise<void> => {
    if (ready(state) && !polling && state.blocks.initial_height !== null && state.blocks.current_height !== null) {
        polling = true;

        const events: {[key: string]: EventsFollowed} = state.events.followed;

        for (const event_sig of Object.keys(events)) {

            const from: number = events[event_sig].last_fetched !== null ? (events[event_sig].last_fetched + 1) : state.blocks.initial_height;
            const to: number = state.blocks.current_height;

            if (from <= to) {
                const contract: VtxContract = state.contracts.instances[events[event_sig].contract][events[event_sig].address].instance;
                if (!contract) continue ;

                const caught_events: Web3Event[] = await contract.getPastEvents(events[event_sig].event, {
                    fromBlock: from,
                    toBlock: to,
                    filter: events[event_sig].arguments
                });

                for (const caught_event of caught_events) {
                    emit(EventsCaught(events[event_sig].signature, caught_event));
                }

                emit(EventsSetHeight(events[event_sig].signature, to));
            }

        }

        polling = false;
    }
};

export const poll_events_interval: number = 5;
