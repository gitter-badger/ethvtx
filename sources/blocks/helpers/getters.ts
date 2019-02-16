import { Block } from '../../state/blocks';
import { State } from '../../state';

/**
 * @description This method will return the block at specified height
 * @param state
 * @param height
 */
export const getBlock = (state: State, height: number): Block => state.blocks.blocks[height];
