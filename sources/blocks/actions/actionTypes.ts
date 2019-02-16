import { Action } from 'redux';
import { Block }  from '../../state/blocks';

export const BlocksActions = {
    BlocksInitialHeight: 'BLOCKS_INITIAL_HEIGHT',
    BlocksFetch: 'BLOCKS_FETCH',
    BlocksFetched: 'BLOCKS_FETCHED',
    BlocksFetchedHeight: 'BLOCKS_FETCHED_HEIGHT',
    BlocksNew: 'BLOCKS_NEW'
};

export interface IBlocksInitialHeight extends Action<string> {
    height: number;
}

export interface IBlocksFetch extends Action<string> {
    height: number;
}

export interface IBlocksFetchedHeight extends Action<string> {
    height: number;
}

export interface IBlocksFetched extends Action<string> {
    number: number;
    block_infos: Block;
}

export interface IBlocksNew extends Action<string> {
    number: number;
    block_infos: Block;
}

export type BlocksActionTypes =
    IBlocksInitialHeight
    | IBlocksFetch
    | IBlocksFetchedHeight
    | IBlocksNew
    | IBlocksFetched;
