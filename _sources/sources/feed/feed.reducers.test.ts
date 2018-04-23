declare var describe: any;
declare var test: any;
declare var expect: any;

import {feed} from './feed.reducers';
import {FeedNewContract, FeedNewTransaction} from "./feed.actions";

let state = undefined;

describe("Feed Reducers", (): void => {

   test("FeedNewTransaction", (): void => {
      state = feed(state, FeedNewTransaction("0xabcd"));
      expect(state[0].transaction_hash).toBe("0xabcd");
      expect(state[0].action).toBe("NEW_TRANSACTION");
   });

   test("FeedNewContract", (): void => {
      state = feed(state, FeedNewContract("Ballot", "0x1234"));
      expect(state[1].contract_name).toBe("Ballot");
      expect(state[1].contract_address).toBe("0x1234");
      expect(state[1].action).toBe("NEW_CONTRACT");
   });

});
