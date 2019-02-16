import { Reducer }              from 'redux';
import { BlocksSection }        from '../../state/blocks';
import { IBlocksInitialHeight } from '../actions/actionTypes';

export const BlocksInitialHeightReducer: Reducer<BlocksSection, IBlocksInitialHeight> =
    (state: BlocksSection, action: IBlocksInitialHeight): BlocksSection => ({
        ...state,
        initial_height: action.height
    });
