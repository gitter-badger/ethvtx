import {Web3LoadAction} from "./web3/web3.actions";

declare var describe: any;
declare var test: any;
declare var expect: any;

import {generateStore} from './generateStore';
import * as Migrations from '../../setup/truffle/build/contracts/Migrations.json';
import {Reducer, Action, DeepPartial, ReducersMapObject} from "redux";
import {State} from "./stateInterface";
import {dummyReducer} from "./dummyReducer";

let store;

describe("generateStore", () => {

    describe("Normal State", () => {
        test("Instanciate with Normal State", () => {


            store = generateStore([Migrations]);
            let state: State = store.getState();
            expect(state.web3.status).toBe("LOADING");
        });

        test("Load dummy web3", (done: (err?: any) => void) => {

            const dummyLoader: Promise<any> = new Promise<any>((ok: (value?: any) => void, ko: (reason?: any) => void): void => {
                setTimeout((): void => {
                    ok({dummy: "YES"});
                }, 1000);
            });

            store.subscribe(() => {
                if (store.getState().web3 && store.getState().web3._ && store.getState().web3._.dummy === "YES")
                    done();
            });

            store.dispatch({
                type: 'LOAD_WEB3',
                loader: dummyLoader
            } as Web3LoadAction);

        }, 10000)
    });

    describe("Extended State", () => {
        test("Instanciate with extended State and custom Reducers", () => {

            interface testAction extends Action {
                testProperty: number;
            }

            interface testState extends State {
                testStateProperty: number
            }

            let dummyreducer: Reducer<number, testAction> = (state: number = 0, action: testAction): number => {
                return state;
            };

            let reducermap: ReducersMapObject<testState> = {
                ...dummyReducer,
                testStateProperty: dummyreducer
            };

            store = generateStore<testState>([Migrations], reducermap, {testStateProperty: 23} as DeepPartial<testState>);
            let state: testState = store.getState();
            expect(state.testStateProperty).toBe(23);
        });

        test("Load dummy web3", (done: (err?: any) => void) => {

            const dummyLoader: Promise<any> = new Promise<any>((ok: (value?: any) => void, ko: (reason?: any) => void): void => {
                setTimeout((): void => {
                    ok({dummy: "YES"});
                }, 1000);
            });

            store.subscribe(() => {
                if (store.getState().web3 && store.getState().web3._ && store.getState().web3._.dummy === "YES")
                    done();
            });

            store.dispatch({
                type: 'LOAD_WEB3',
                loader: dummyLoader
            } as Web3LoadAction);

        }, 10000)
    });
});

