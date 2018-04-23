import {Reducer} from "redux";
import {FeedState} from "../stateInterface";
import {FeedActions, FeedNewContractAction, FeedNewTransactionAction} from "./feed.actions";

export const feed : Reducer<FeedState[], FeedActions> = (state: FeedState[] = [] as FeedState[], action: FeedActions): FeedState[] => {

    switch (action.type) {

        case 'FEED_NEW_TRANSACTION':
            state.push({
                action: 'NEW_TRANSACTION',
                transaction_hash: (<FeedNewTransactionAction>action).txHash,
                timestamp: Date.now()
            });
            return [
                ...state
            ];

        case 'FEED_NEW_CONTRACT':
            state.push({
                action: 'NEW_CONTRACT',
                contract_name: (<FeedNewContractAction>action).contractName,
                contract_address: (<FeedNewContractAction>action).address,
                timestamp: Date.now()
            });
            return [
                ...state
            ];

        default:
            return state;
    }
};
