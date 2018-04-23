import {combineReducers, Reducer, ReducersMapObject} from "redux";
import {ContractStoreState, FeedState, State, TransactionStoreState} from "./stateInterface";
import {web3} from './web3/web3.reducers';



export const reducers: ReducersMapObject<State> = {
    web3,
    tx: {} as Reducer<TransactionStoreState>,
    contracts: {} as Reducer<ContractStoreState>,
    feed: {} as Reducer<FeedState[]>
};
