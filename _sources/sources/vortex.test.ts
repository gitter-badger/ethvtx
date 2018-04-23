declare var describe: any;
declare var test: any;
declare var expect: any;

import {Vortex} from "./vortex";
import * as Migrations from '../../setup/truffle/build/contracts/Migrations.json';

describe("Vortex", () => {
    test('Instantiate', () => {
        const vtx = Vortex.factory([Migrations]);
        expect(vtx.Contracts[0].contractName).toBe("Migrations");
    });

    test('Recover Instance', () => {
        expect(Vortex._().Contracts[0].contractName).toBe("Migrations");
    });
});