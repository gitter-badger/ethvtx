import {FeedState, State} from "../stateInterface";

export enum FeedType {
    Transactions = 1,
    Contracts = 2,
    Errors = 4,
}


const FeedTypeLinks: any = {
    NEW_TRANSACTION: 1,
    NEW_CONTRACT: 2,
    NEW_ERROR: 4
};

// TODO create interface for each type with deeper setting (transaction from ?, to ?, data ? etc ...)

export function FeedFilter(state: FeedState[], type: FeedType): FeedState[] {
    return state.filter((elem: FeedState): boolean => !!((FeedTypeLinks[elem.action] ? FeedTypeLinks[elem.action] : -1) & type));
}