import { Reducer }           from 'redux';
import { ContractsSection }  from '../../state/contracts';
import { IVtxconfigSetWeb3 } from '../../vtxconfig/actions/actionTypes';

export const VtxconfigSetWeb3Reducer: Reducer<ContractsSection, IVtxconfigSetWeb3> =
    (state: ContractsSection, action: IVtxconfigSetWeb3): ContractsSection => ({
        ...state,
        web3: action.web3
    });
