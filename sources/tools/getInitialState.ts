import { InitialState, State } from '../state/index';

const VTX_SECTIONS_LIST: string[] = ['txs', 'vtxconfig', 'vtxevents', 'vtxpoll', 'contracts', 'blocks', 'vtxcache', 'accounts'];

export const getInitialState = <T extends {} = any>(custom_state?: T): State => {
    if (custom_state) {

        for (const section of Object.keys(custom_state)) {
            if (VTX_SECTIONS_LIST.indexOf(section) !== -1) {
                throw new Error(`Invalid state section name ${section}. This state section name is already used by ethvtx.`);
            }
        }

        return {
            ...InitialState,
            ...custom_state
        };

    }

    return InitialState;
};
