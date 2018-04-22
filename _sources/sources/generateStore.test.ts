declare var describe: any;
declare var test: any;
declare var expect: any;

import {generateStore} from './generateStore';
import * as Migrations from '../../setup/truffle/build/contracts/Migrations.json';
import {Reducer, Action, DeepPartial} from "redux";
import {State} from "./stateInterface";

describe("generateStore", () => {
    test("Instanciate with extended State and custom Reducers", () => {

        interface testAction extends Action {
            testProperty: number;
        }

        interface testState extends State {
            testStateProperty: number
        }

        let dummyreducer: Reducer<testState, testAction> = (state: testState, action: testAction): testState => {
            return state;
        };
        const store = generateStore<testState>([Migrations], dummyreducer, {testStateProperty: 23} as DeepPartial<testState>);
        let state: testState = store.getState();
        expect(state.testStateProperty).toBe(23);
    });
});

