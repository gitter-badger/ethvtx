import {
    BlocksActions, IBlocksFetch,
    IBlocksFetchedHeight,
    IBlocksInitialHeight,
    IBlocksNew
}                from './actionTypes';
import { Block } from '../../state/blocks';

export const BlocksInitialHeight = (height: number): IBlocksInitialHeight => ({
    type: BlocksActions.BlocksInitialHeight,
    height
});

export const BlocksFetch = (height: number): IBlocksFetch => ({
    type: BlocksActions.BlocksFetch,
    height
});

export const BlocksFetchedHeight = (height: number): IBlocksFetchedHeight => ({
    type: BlocksActions.BlocksFetchedHeight,
    height
});

export const BlocksFetched = (number: number, block_infos: Block): IBlocksNew => ({
    type: BlocksActions.BlocksFetched,
    number,
    block_infos
});

export const BlocksNew = (number: number, block_infos: Block): IBlocksNew => ({
    type: BlocksActions.BlocksNew,
    number,
    block_infos
});
