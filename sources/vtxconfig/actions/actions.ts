import {
    IVtxconfigReset,
    IVtxconfigResetComplete,
    IVtxconfigResetSectionComplete,
    IVtxconfigSetStatus,
    IVtxconfigSetWeb3,
    VtxconfigActions
}                    from './actionTypes';
import { VtxStatus } from '../../state/vtxconfig';
import Web3 = require('web3');

export const VtxconfigSetWeb3 = (web3: Web3): IVtxconfigSetWeb3 => ({
    type: VtxconfigActions.VtxconfigSetWeb3,
    web3
});

export const VtxconfigSetStatus = (status: VtxStatus): IVtxconfigSetStatus => ({
    type: VtxconfigActions.VtxconfigSetStatus,
    status
});

export const VtxconfigReset = (): IVtxconfigReset => ({
    type: VtxconfigActions.VtxconfigReset
});

export const VtxconfigResetSectionComplete = (section: 'txs' | 'blocks' | 'vtxcache' | 'contracts'): IVtxconfigResetSectionComplete => ({
    type: VtxconfigActions.VtxconfigResetSectionComplete,
    section
});

export const VtxconfigResetComplete = (): IVtxconfigResetComplete => ({
    type: VtxconfigActions.VtxconfigResetComplete
});
