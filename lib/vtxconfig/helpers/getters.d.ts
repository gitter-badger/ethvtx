import { State } from '../../state';
import { VtxStatus } from '../../state/vtxconfig';
export declare const getVtxStatus: (state: State) => VtxStatus;
export declare const getVtxLastError: (state: State) => Error;
export declare const getWeb3: (state: State) => any;
