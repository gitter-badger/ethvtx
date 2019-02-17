import { Action }    from 'redux';
import { VtxStatus } from '../../state/vtxconfig';
import Web3 = require('web3');

export const VtxconfigActions = {
    VtxconfigSetWeb3: 'VTXCONFIG_SET_WEB3',
    VtxconfigSetStatus: 'VTXCONFIG_SET_STATUS',
    VtxconfigReset: 'VTXCONFIG_RESET',
    VtxconfigResetSectionComplete: 'VTXCONFIG_RESET_SECTION_COMPLETE',
    VtxconfigResetComplete: 'VTXCONFIG_RESET_COMPLETE',
    VtxconfigSetInfos: 'VTXCONFIG_SET_INFOS'
};

export interface IVtxconfigSetInfos extends Action<string> {
    coinbase: string;
    net: number;
}

export interface IVtxconfigSetWeb3 extends Action<string> {
    web3: Web3;
}

export interface IVtxconfigSetStatus extends Action<string> {
    status: VtxStatus;
}

export interface IVtxconfigReset extends Action<string> {
    enable?: () => Promise<void>;
}

export interface IVtxconfigResetSectionComplete extends Action<string> {
    section: string;
}

export interface IVtxconfigResetComplete extends Action<string> {
}

export type VtxconfigActionTypes =
    | IVtxconfigSetWeb3
    | IVtxconfigSetStatus
    | IVtxconfigReset
    | IVtxconfigResetSectionComplete
    | IVtxconfigResetComplete
    | IVtxconfigSetInfos;
