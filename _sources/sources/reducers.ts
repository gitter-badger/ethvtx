import {combineReducers, Reducer, ReducersMapObject} from "redux";
import {ContractStoreState, FeedState, State, TransactionStoreState} from "./stateInterface";
import {web3} from './web3/web3.reducers';
import {feed} from "./feed/feed.reducers";
import {tx} from "./tx/tx.reducers";


export const reducers: ReducersMapObject<State> = {
    web3,
    tx,
    contracts: {} as Reducer<ContractStoreState>,
    feed
};
