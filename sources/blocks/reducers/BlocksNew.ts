import { Reducer }       from 'redux';
import { BlocksSection } from '../../state/blocks';
import { IBlocksNew }    from '../actions/actionTypes';

export const BlocksNewReducer: Reducer<BlocksSection, IBlocksNew> =
    (state: BlocksSection, action: IBlocksNew): BlocksSection => ({
        ...state,
        blocks: {
            ...state.blocks,
            [action.number]: action.block_infos
        }
    });
