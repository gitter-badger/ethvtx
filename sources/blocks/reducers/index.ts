import { BlocksSection }              from '../../state/blocks';
import {
    BlocksActions,
    BlocksActionTypes, IBlocksFetched,
    IBlocksFetchedHeight,
    IBlocksInitialHeight,
    IBlocksNew
}                                     from '../actions/actionTypes';
import { Reducer }                    from 'redux';
import { BlocksInitialHeightReducer } from './BlocksInitialHeight';
import { BlocksNewReducer }           from './BlocksNew';
import { BlocksFetchedReducer }       from './BlocksFetched';
import { BlocksFetchedHeightReducer } from './BlocksFetchedHeight';
import { InitialState }               from '../../state/index';

export const BlocksReducer: Reducer<BlocksSection, BlocksActionTypes> =
    (state: BlocksSection = InitialState.blocks, action: BlocksActionTypes): BlocksSection => {

        switch (action.type) {
            case BlocksActions.BlocksFetchedHeight:
                return BlocksFetchedHeightReducer(state, action as IBlocksFetchedHeight);
            case BlocksActions.BlocksInitialHeight:
                return BlocksInitialHeightReducer(state, action as IBlocksInitialHeight);
            case BlocksActions.BlocksFetched:
                return BlocksFetchedReducer(state, action as IBlocksFetched);
            case BlocksActions.BlocksNew:
                return BlocksNewReducer(state, action as IBlocksNew);
            default:
                return state;
        }

    };
