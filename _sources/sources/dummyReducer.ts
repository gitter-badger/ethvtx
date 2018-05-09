import {Reducer, ReducersMapObject} from "redux";
import {
    AccountStoreState,
    ContractStoreState,
    FeedState,
    State,
    TransactionStoreState,
    Web3State
} from "./stateInterface";

export const dummyReducer: ReducersMapObject<State> = {
    web3: {} as Reducer<Web3State>,
    tx: {} as Reducer<TransactionStoreState>,
    contracts: {} as Reducer<ContractStoreState>,
    feed: {} as Reducer<FeedState[]>,
    accounts: {} as Reducer<AccountStoreState>
};
