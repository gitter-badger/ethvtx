declare var test: any;
declare var expect: any;

import {Vortex} from "./vortex";

test('Construction', () => {
    expect((new Vortex()).test).toBe("test");
});