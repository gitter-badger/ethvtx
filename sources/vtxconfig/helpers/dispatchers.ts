import { Dispatch }                         from 'redux';
import { VtxconfigReset, VtxconfigSetWeb3 } from '../actions/actions';

export const init = (dispatch: Dispatch, web3: any): void => {
    dispatch(VtxconfigSetWeb3(web3));
    dispatch(VtxconfigReset());
};

export const setWeb3 = (dispatch: Dispatch, web3: any): void => {
    dispatch(VtxconfigSetWeb3(web3));
};

export const reset = (dispatch: Dispatch): void => {
    dispatch(VtxconfigReset());
};

export const start = reset;
