import { IBlocksFetch, IBlocksFetchedHeight, IBlocksInitialHeight, IBlocksNew } from './actionTypes';
import { Block } from '../../state/blocks';
export declare const BlocksInitialHeight: (height: number) => IBlocksInitialHeight;
export declare const BlocksFetch: (height: number) => IBlocksFetch;
export declare const BlocksFetchedHeight: (height: number) => IBlocksFetchedHeight;
export declare const BlocksFetched: (number: number, block_infos: Block) => IBlocksNew;
export declare const BlocksNew: (number: number, block_infos: Block) => IBlocksNew;
