import { Saga } from '@redux-saga/types';
import { Store } from 'redux';
export declare const getSagas: (store: Store<any, import("redux").AnyAction>, custom_sagas?: Saga<any[]>[]) => Saga<any[]>;
