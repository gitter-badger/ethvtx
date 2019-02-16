import { Reducer }             from 'redux';
import { ContractsSection }    from '../../state/contracts';
import { IContractsSetSigner } from '../actions/actionTypes';

export const ContractsSetSignerReducer: Reducer<ContractsSection, IContractsSetSigner> =
    (state: ContractsSection, action: IContractsSetSigner): ContractsSection => ({
        ...state,
        signer: action.signer
    });
