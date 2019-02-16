import { Reducer }              from 'redux';
import { BlocksSection }        from '../../state/blocks';
import { IBlocksFetchedHeight } from '../actions/actionTypes';

export const BlocksFetchedHeightReducer: Reducer<BlocksSection, IBlocksFetchedHeight> =
    (state: BlocksSection, action: IBlocksFetchedHeight): BlocksSection => ({
        ...state,
        current_height: action.height
    });
