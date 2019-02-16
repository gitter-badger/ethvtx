import { Reducer }        from 'redux';
import { BlocksSection }  from '../../state/blocks';
import { IBlocksFetched } from '../actions/actionTypes';

export const BlocksFetchedReducer: Reducer<BlocksSection, IBlocksFetched> =
    (state: BlocksSection, action: IBlocksFetched): BlocksSection => ({
        ...state,
        blocks: {
            ...state.blocks,
            [action.number]: action.block_infos
        }
    });
