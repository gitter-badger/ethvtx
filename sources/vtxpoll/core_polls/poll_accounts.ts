import { VtxPollCb }                      from '../../state/vtxpoll';
import { State }                          from '../../state';
import { Dispatch }                       from 'redux';
import { ready }                          from '../../utils/ready';
import { Block }                          from '../../state/blocks';
import { BlocksFetchedHeight, BlocksNew } from '../../blocks/actions/actions';
import { BigNumber }                      from 'ethers/utils';
import { AccountsSetInfos }               from '../../accounts/actions/actions';

let polling: boolean = false;
let last_block: number = null;

const null_accounts = (state: State): boolean => {
    for (const account of Object.keys(state.accounts.accounts)) {
        if (state.accounts.accounts[account].balance === null) return true;
    }
};

export const poll_accounts: VtxPollCb = async (state: State, emit: Dispatch): Promise<void> => {
    if (ready(state) && !polling) {
        polling = true;

        if (last_block === null) {
            if (!state.blocks.current_height) {
                last_block = state.blocks.initial_height;
            } else {
                last_block = state.blocks.current_height;
            }
        } else {

            if ((state.blocks.current_height === null || last_block >= state.blocks.current_height)
                && !null_accounts(state)) {
                polling = false;
                return;
            } else {
                last_block = state.blocks.current_height;
            }

        }

        const web3 = state.vtxconfig.web3;

        for (const account of Object.keys(state.accounts.accounts)) {

            const balance: BigNumber = new BigNumber(await web3.eth.getBalance(account));
            const transaction_count: number = await web3.eth.getTransactionCount(account);

            let contract = undefined;
            if (state.accounts.accounts[account].contract === null) {
                const code = (await web3.eth.getCode(account));
                contract = code !== '0x' && code !== '0x0';
            }

            if (state.accounts.accounts[account].balance !== balance || state.accounts.accounts[account].transaction_count !== transaction_count) {
                emit(AccountsSetInfos(account, balance, transaction_count, contract));
            }

        }

        polling = false;
    }
};

export const poll_accounts_interval: number = 5;
