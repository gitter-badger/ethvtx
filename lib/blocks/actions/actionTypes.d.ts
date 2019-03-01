import { Action } from 'redux';
import { Block } from '../../state/blocks';
export declare const BlocksActions: {
    BlocksInitialHeight: string;
    BlocksFetch: string;
    BlocksFetched: string;
    BlocksFetchedHeight: string;
    BlocksNew: string;
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
export declare type BlocksActionTypes = IBlocksInitialHeight | IBlocksFetch | IBlocksFetchedHeight | IBlocksNew | IBlocksFetched;
