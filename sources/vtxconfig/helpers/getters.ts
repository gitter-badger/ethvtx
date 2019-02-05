import { State }     from '../../state';
import { VtxStatus } from '../../state/vtxconfig';
import Web3 = require('web3');

export const getVtxStatus = (state: State): VtxStatus =>
    state.vtxconfig.status;

export const getVtxLastError = (state: State): Error =>
    state.vtxconfig.last_error;

export const getWeb3 = (state: State): Web3 =>
    state.vtxconfig.web3;
