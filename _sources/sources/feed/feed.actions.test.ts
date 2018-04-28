import {FeedNewContract, FeedNewError, FeedNewTransaction} from "./feed.actions";

declare var describe: any;
declare var test: any;
declare var expect: any;

describe("Feed Actions", (): void => {

    test("FeedNewTransaction", (): void => {
        const ret = FeedNewTransaction("0x54321");
        expect(ret.txHash).toBe("0x54321");
        expect(ret.type).toBe('FEED_NEW_TRANSACTION');
    });

    test("FeedNewContract", (): void => {
        const ret = FeedNewContract("Ballot", "0x1234");
        expect(ret.contractName).toBe("Ballot");
        expect(ret.address).toBe("0x1234");
        expect(ret.type).toBe('FEED_NEW_CONTRACT');
    });

    test("FeedNewError", (): void => {
        const ret = FeedNewError({test: 'TEST'}, "You made a mistake", "Doing some tests");
        expect(ret.reason.test).toBe('TEST');
        expect(ret.when).toBe('Doing some tests');
        expect(ret.message).toBe("You made a mistake");
        expect(ret.type).toBe('FEED_NEW_ERROR');
    });

});