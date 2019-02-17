import { Reducer }                                                                      from 'redux';
import { ContractAliasStore, ContractsSection, ContractsSpecStore, ContractsTypeStore } from '../../state/contracts';
import { IContractsReset }                                                              from '../actions/actionTypes';
import { Signer }                                                                       from 'ethers';
import { IVtxconfigSetWeb3 }                                                            from '../../vtxconfig/actions/actionTypes';

export const VtxconfigSetWeb3Reducer: Reducer<ContractsSection, IVtxconfigSetWeb3> =
    (state: ContractsSection, action: IVtxconfigSetWeb3): ContractsSection => ({
        ...state,
        web3: action.web3
    });
