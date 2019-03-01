import { Reducer } from 'redux';
interface IReducerMap {
    [key: string]: Reducer;
}
export declare const getReducers: (custom_reducers?: IReducerMap) => Reducer<any, import("redux").AnyAction>;
export {};
