import { State }        from '../state';
import { VtxStatus }    from '../state/vtxconfig';
import { getCorePolls } from '../vtxpoll/core_entities';

const VTX_SECTIONS_LIST: string[] = ['txs', 'vtxconfig', 'vtxevents', 'vtxpoll'];

export const getInitialState = <T extends {} = any>(custom_state?: T): State => {
    let state: State = {
        txs: {},
        vtxconfig: {
            web3: null,
            last_error: null,
            status: VtxStatus.Idle,
            reset_status: {
                txs: false
            },
            poll_timer: 100,
            confirmation_treshold: 12
        },
        vtxevents: [],
        vtxpoll: {
            timer: 0,
            actions: getCorePolls()
        }
    };

    if (custom_state) {

        for (const section of Object.keys(custom_state)) {
            if (VTX_SECTIONS_LIST.indexOf(section) !== -1) {
                throw new Error(`Invalid state section name ${section}. This state section name is already used by ethvtx.`);
            }
        }

        state = {
            ...state,
            ...custom_state
        };

    }

    return state;
};
