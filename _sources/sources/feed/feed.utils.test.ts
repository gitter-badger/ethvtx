import {FeedState} from "../stateInterface";
import {FeedFilter, FeedType} from "./feed.utils";

declare var describe: any;
declare var test: any;
declare var expect: any;

const state: FeedState[] = [
    {
        action: 'NEW_ERROR',
        error: {
            reason: {test: "TRUE"},
            message: "Nasty Error",
            when: "Right now"
        },
        timestamp: 0
    },
    {
        action: 'NEW_ERROR',
        error: {
            reason: {test: "TRUE"},
            message: "Nasty Error",
            when: "Right now"
        },
        timestamp: 0
    },
    {
        action: 'NEW_ERROR',
        error: {
            reason: {test: "TRUE"},
            message: "Nasty Error",
            when: "Right now"
        },
        timestamp: 0
    },
    {
        action: 'NEW_ERROR',
        error: {
            reason: {test: "TRUE"},
            message: "Nasty Error",
            when: "Right now"
        },
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

    test("FeedFilter NEW_ERROR", (): void => {
        expect(FeedFilter(state, FeedType.Errors).length).toBe(4);
    });

    test("FeedFilter NEW_TRANSACTION + NEW_CONTRACT", (): void => {
        expect(FeedFilter(state, FeedType.Transactions | FeedType.Contracts).length).toBe(9);
    });

    test("FeedFilter NEW_TRANSACTION + NEW_ERROR", (): void => {
        expect(FeedFilter(state, FeedType.Transactions | FeedType.Errors).length).toBe(7);
    });
});
