import {FeedState} from "../stateInterface";
import {FeedFilter, FeedType} from "./feed.utils";

declare var describe: any;
declare var test: any;
declare var expect: any;

const state: FeedState[] = [
    {
        action: 'NEW_TRANSACTION',
        transaction_hash: "",
        timestamp: 0
    },
    {
        action: 'NEW_TRANSACTION',
        transaction_hash: "",
        timestamp: 0
    },
    {
        action: 'NEW_TRANSACTION',
        transaction_hash: "",
        timestamp: 0
    },
    {
        action: 'NEW_CONTRACT',
        contract_name: "",
        contract_address: "",
        timestamp: 0
    },
    {
        action: 'NEW_CONTRACT',
        contract_name: "",
        contract_address: "",
        timestamp: 0
    },
    {
        action: 'NEW_CONTRACT',
        contract_name: "",
        contract_address: "",
        timestamp: 0
    },
    {
        action: 'NEW_CONTRACT',
        contract_name: "",
        contract_address: "",
        timestamp: 0
    },
    {
        action: 'NEW_CONTRACT',
        contract_name: "",
        contract_address: "",
        timestamp: 0
    },
    {
        action: 'NEW_CONTRACT',
        contract_name: "",
        contract_address: "",
        timestamp: 0
    },
];

describe("Feed Utils", (): void => {

    test("FeedFilter NEW_CONTRACT", (): void => {
       expect(FeedFilter(state, FeedType.Contracts).length).toBe(6);
    });

    test("FeedFilter NEW_TRANSACTION", (): void => {
        expect(FeedFilter(state, FeedType.Transactions).length).toBe(3);
    });

});
