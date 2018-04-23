declare var describe: any;
declare var test: any;
declare var expect: any;

import {Vortex} from "./vortex";
import * as Migrations from '../../setup/truffle/build/contracts/Migrations.json';
import {FeedNewTransaction} from "./feed/feed.actions";

describe("Vortex", () => {
    test('Instantiate', () => {
        const vtx = Vortex.factory([Migrations]);
        expect(vtx.Contracts[0].contractName).toBe("Migrations");
    });

    test('Recover Instance', () => {
        expect(Vortex.get().Contracts[0].contractName).toBe("Migrations");
    });

    test('Run Instance', () => {
        Vortex.get().run();
    });

    test('Adding New Feed Element', () => {
        Vortex.get().Store.dispatch(FeedNewTransaction("Dummy Tx"));
        expect(Vortex.get().Store.getState().feed[0].action).toBe('NEW_TRANSACTION');
    });
});