import {FeedState, State} from "../stateInterface";

export enum FeedType {
    Transactions = 0,
    Contracts = 1
}

const FeedTypeStrings: string[] = [
    "NEW_TRANSACTION",
    "NEW_CONTRACT"
];

// TODO create interface for each type with deeper setting (transaction from ?, to ?, data ? etc ...)

export function FeedFilter(state: FeedState[], type: FeedType): FeedState[] {
    return state.filter((elem: FeedState): boolean => FeedTypeStrings[type] === elem.action);
}