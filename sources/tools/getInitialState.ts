import { State }        from '../state';
import { VtxStatus }    from '../state/vtxconfig';
import { getCorePolls } from '../vtxpoll/core_polls';

const VTX_SECTIONS_LIST: string[] = ['txs', 'vtxconfig', 'vtxevents', 'vtxpoll', 'contracts', 'blocks', 'vtxcache', 'accounts'];

export const getInitialState = <T extends {} = any>(custom_state?: T): State => {
    let state: State = {
        txs: {},
        contracts: {
            specs: {},
            instances: {},
            web3: null,
            alias: {}
        },
        blocks: {
            initial_height: null,
            current_height: null,
            blocks: {}
        },
        accounts: {
            accounts: {},
            alias: {}
        },

        vtxconfig: {
            web3: null,
            last_error: null,
            status: VtxStatus.Idle,
            reset_status: {
                txs: false,
                blocks: false,
                vtxcache: false,
                contracts: false,
                vtxconfig: false,
                accounts: false
            },
            poll_timer: 100,
            confirmation_treshold: 12,
            coinbase: null,
            net: null
        },
        vtxevents: [],
        vtxpoll: {
            timer: 0,
            actions: getCorePolls()
        },
        vtxcache: {
            store: {}
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
