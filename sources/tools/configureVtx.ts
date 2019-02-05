import { State } from '../state';

export interface VtxConfigArguments {
    poll_timer: number;
    confirmation_treshold: number;
}

export const configureVtx = <T extends State = State>(initialState: T, config: VtxConfigArguments): T => {

    if (config.poll_timer) initialState.vtxconfig.poll_timer = config.poll_timer;
    if (config.confirmation_treshold) initialState.vtxconfig.confirmation_treshold = config.confirmation_treshold;

    return initialState;
};
