import { Dispatch }         from 'redux';
import { VtxconfigSetWeb3 } from '../actions/actions';

export const setWeb3 = (dispatch: Dispatch, web3: any): void => {
    dispatch(VtxconfigSetWeb3(web3));
};
