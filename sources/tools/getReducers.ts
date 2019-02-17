import { combineReducers, Reducer } from 'redux';
import { TxReducer }                from '../txs/reducers';
import { VtxconfigReducer }         from '../vtxconfig/reducers';
import { VtxeventsReducer }         from '../vtxevents/reducers';
import { VtxpollReducer }           from '../vtxpoll/reducers';
import { ContractsReducer }         from '../contracts/reducers';
import { BlocksReducer }            from '../blocks/reducers';
import { VtxcacheReducer }          from '../vtxcache/reducers';
import { AccountsReducer }          from '../accounts/reducers';

const VTX_REDUCERS_LIST: string[] = ['txs', 'vtxconfig', 'vtxevents', 'vtxpoll', 'contracts', 'blocks', 'vtxcache', 'accounts'];

interface IReducerMap {
    [key: string]: Reducer;
}

export const getReducers = (custom_reducers?: IReducerMap): Reducer => {
    let final_reducers: IReducerMap = {
        txs: TxReducer,
        contracts: ContractsReducer,
        blocks: BlocksReducer,
        accounts: AccountsReducer,
        vtxconfig: VtxconfigReducer,
        vtxevents: VtxeventsReducer,
        vtxpoll: VtxpollReducer,
        vtxcache: VtxcacheReducer
    };

    if (!custom_reducers) {
        custom_reducers = {};
    }

    for (const reducer of Object.keys(custom_reducers)) {
        if (VTX_REDUCERS_LIST.indexOf(reducer) !== -1) {
            throw new Error(`Invalid reducer ${reducer}. This reducer name is already used by ethvtx.`);
        }
    }

    final_reducers = {
        ...final_reducers,
        ...custom_reducers
    };

    return combineReducers(final_reducers);
};
