import { State }                 from '../state';
import { VtxStatus }             from '../state/vtxconfig';
import { getVtxStatus, getWeb3 } from '../vtxconfig/helpers/getters';

export const ready = (state: State): boolean =>
    !!getWeb3(state) && getVtxStatus(state) === VtxStatus.Loaded;
