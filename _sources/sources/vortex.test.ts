declare var describe: any;
declare var test: any;
declare var expect: any;

import {Vortex} from "./vortex";

describe("Vortex", () => {
    test('Construction', () => {
        expect((new Vortex()).test).toBe("test");
    });
});