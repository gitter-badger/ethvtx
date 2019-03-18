import { VtxPollCb }                      from '../../state/vtxpoll';
import { State }                          from '../../state';
import { Dispatch }                       from 'redux';
import { Block }                          from '../../state/blocks';
import { BlocksFetchedHeight, BlocksNew } from '../../blocks/actions/actions';

const fetch_blocks = async (dispatch: Dispatch, state: State, blocks: number[]): Promise<void> => {

    try {
        for (const num of blocks) {
            const data: Block = await state.vtxconfig.web3.eth.getBlock(num);
            dispatch(BlocksNew(num, data));
        }
    } catch (e) {
    }

};

export const poll_blocks: VtxPollCb = async (state: State, emit: Dispatch, _: boolean): Promise<void> => {

    let current_height: number;
    try {
        current_height = await state.vtxconfig.web3.eth.getBlockNumber();
    } catch (e) {
        return ;
    }

    if (current_height === state.blocks.current_height) {
        return ;
    }

    let block_nums: number[];

    if (state.blocks.current_height === null) {
        block_nums = [...Array(current_height - state.blocks.initial_height + 1).keys()]
            .map((num: number) => state.blocks.initial_height + num);
    } else {
        block_nums = [...Array(current_height - state.blocks.current_height).keys()]
            .map((num: number) => state.blocks.current_height + num + 1);
    }

    await fetch_blocks(emit, state, block_nums);

    emit(BlocksFetchedHeight(current_height));

};

export const poll_blocks_interval: number = 10;
