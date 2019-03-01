import { SagaIterator } from 'redux-saga';
import { Dispatch } from 'redux';
import { State } from '../../state';
export declare function VtxpollSagas(dispatch: Dispatch, state_getter: () => State): SagaIterator;
