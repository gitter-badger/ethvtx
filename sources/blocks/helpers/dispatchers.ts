import { Dispatch }    from 'redux';
import { BlocksFetch } from '../actions/actions';

/**
 * @desc This methods will tell the redux store to fetch the given block height
 * @param dispatch
 * @param height
 */
export const fetchBlock = (dispatch: Dispatch, height: number): void => {
    dispatch(BlocksFetch(height));
};
