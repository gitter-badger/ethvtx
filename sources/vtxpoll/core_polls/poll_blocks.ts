import { VtxPollCb }                      from '../../state/vtxpoll';
import { State }                          from '../../state';
import { Dispatch }                       from 'redux';
import { ready }                          from '../../utils/ready';
import { Block }                          from '../../state/blocks';
import { BlocksFetchedHeight, BlocksNew } from '../../blocks/actions/actions';

let polling: boolean = false;

const fetch_blocks = async (dispatch: Dispatch, state: State, blocks: number[]): Promise<void> => {

    try {
        for (const num of blocks) {
            const data: Block = await state.vtxconfig.web3.eth.getBlock(num);
            dispatch(BlocksNew(num, data));
        }
    } catch (e) {
        polling = false;
    }

};

export const poll_blocks: VtxPollCb = async (state: State, emit: Dispatch): Promise<void> => {
    if (ready(state) && !polling) {
        polling = true;

        let current_height: number;
        try {
            current_height = await state.vtxconfig.web3.eth.getBlockNumber();
        } catch (e) {
            polling = false;
            return ;
        }

        if (current_height === state.blocks.current_height) {
            polling = false;
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

        polling = false;
    }
};

export const poll_blocks_interval: number = 5;
