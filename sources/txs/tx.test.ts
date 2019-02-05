import { applyMiddleware, compose, createStore, Reducer, Store } from 'redux';
import { getInitialState }                                       from '../tools/getInitialState';
import { getReducers }                                           from '../tools/getReducers';
import { getSagas }                                              from '../tools/getSagas';
import { Saga }                                                  from '@redux-saga/types';
import { State }                                                 from '../state';
import createSagaMiddleware, { SagaMiddleware }                  from 'redux-saga';
import { TxAdd, TxError, TxRemove, TxSet }                       from './actions/actions';
import { Tx, TxStatus }                                          from '../state/txs';
import {
    getTransaction,
    getTransactionById,
    getTransactions
}                                                                from './helpers/getters';
import {
    addTransaction,
    followTransaction,
    removeTransaction,
    sendTransaction
}                                                                from './helpers/dispatchers';
import * as Ganache                                              from 'ganache-core';
import { setWeb3 }                                               from '../vtxconfig/helpers/dispatchers';
import {
    vtx_event,
    vtx_state_check,
    vtx_status,
    ganache_mine
}                                                                from '../test_tools';
import { VtxStatus }                                             from '../state/vtxconfig';
import { VtxeventsTypes }                                        from '../state/vtxevents';
const Web3 = require('web3');
import { configureVtx }                                          from '../tools/configureVtx';
import { VtxpollKill }                                           from '../vtxpoll/actions/action';

const FROM_ADDRESS_BOB: string = '0xb91d3009398b4619f08b6c0c272c47a430900b27';
const FROM_ADDRESS_MARC: string = '0x2d9a858f3929c132372af2b94a79ac92a54da75b';
const FROM_ADDRESS_MIKE: string = '0x5fe200f1fb031b3f5abf295ce2314a9b4dc1b552';

const TO_ADDRESS_GEORGE: string = '0x87b1598147cd55fd04c70fd8ff10493149823f7f';
const TO_ADDRESS_LISA: string = '0x979d159187166b10dac376e792e064c78f426c81';
const TO_ADDRESS_MARIE: string = '0xa4579f60ba01af0fc79223dd77d6811c35fa4753';

const TX_HASH_ONE: string =
    '0xd8138c6d640967893034aacb5430aed9446e66bc8596104d98da0057116f932d';
const TX_HASH_TWO: string =
    '0x5000851ef95f21276b56e0b16faac7c57636947c2092f960655c6919e4caa96f';
const TX_HASH_THREE: string =
    '0x3731daab117c68285aa03793f1def0db194eb9e1752c89fe57f927a4d936686a';
const TX_HASH_FOUR: string =
    '0x02f24c33863f85d7b0de1f8c2a039e4f1fc5116d8d24bedc8212025cbd1de53b';

const GANACHE_ARGS: any = (time: number): any => ({
    accounts: [
        {
            secretKey:
                '0x56d43a2846c97ce04a4334f2e86fe0fa4775e921f198e86e6e0d62721c393591',
            balance: '0x123456789101112'
        },
        {
            secretKey:
                '0x523acfb597f8537a7cd43e67d7be462b04e3c0e00eccc63c75412bdc7fdcfad5',
            balance: '0x123456789101112'
        },
        {
            secretKey:
                '0xa547f9a86eda975b05b52f9769f280ff7aeff57cbc131d68370d43640f605b98',
            balance: '0x123456789101112'
        },
        {
            secretKey:
                '0x0889ce176536c787aeb457dcdbb0c7d2c975f79f6ef72b3b308961bd3d5d2553',
            balance: '0x123456789101112'
        },
        {
            secretKey:
                '0x57d6d3b4f151a1fd769ebca96110e38afcdc42009b06aa39ca70adbf5f2064db',
            balance: '0x123456789101112'
        },
        {
            secretKey:
                '0xbb9e009be4621685ba371f3e52065a22b13f7c36d84fd4daa5ab67288b5770c0',
            balance: '0x123456789101112'
        }
    ],
    blockTime: time
});

const buildTestWeb3 = (time?: number): Web3 =>
    new Web3(Ganache.provider(GANACHE_ARGS(time)));

const buildStore = (): Store => {
    const composer = compose;
    const initial_state: State = configureVtx(getInitialState(), {
        poll_timer: 10,
        confirmation_treshold: 3
    });
    const reducers: Reducer = getReducers();

    const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware<any>();

    const store: Store = createStore<State, any, any, { test: string }>(
        reducers,
        initial_state,
        composer(applyMiddleware(sagaMiddleware))
    );

    const sagas: Saga = getSagas(store);

    sagaMiddleware.run(sagas);

    return store;
};

const killStore = (store: Store): void => {
    store.dispatch(VtxpollKill());
};

describe('[txs]', (): void => {

    test('Add basic transaction', (): void => {
        const store: Store = buildStore();

        store.dispatch(
            TxAdd(TX_HASH_ONE, {
                from: FROM_ADDRESS_BOB,
                to: TO_ADDRESS_GEORGE
            })
        );

        expect(getTransaction(store.getState(), TX_HASH_ONE).infos.from.toLowerCase())
            .toEqual(FROM_ADDRESS_BOB.toLowerCase());

        killStore(store);
    });

    test('Add basic transaction + Set transaction', (): void => {
        const store: Store = buildStore();

        store.dispatch(
            TxAdd(TX_HASH_ONE, {
                from: FROM_ADDRESS_BOB,
                to: TO_ADDRESS_GEORGE
            })
        );

        store.dispatch(TxSet(TX_HASH_ONE, {}, TxStatus.Error));

        expect(getTransaction(store.getState(), TX_HASH_ONE).infos.from.toLowerCase())
            .toEqual(FROM_ADDRESS_BOB.toLowerCase());
        expect(getTransaction(store.getState(), TX_HASH_ONE).status).toEqual(
            TxStatus.Error
        );

        killStore(store);
    });

    test('Add basic transaction + Error transaction', (): void => {
        const store: Store = buildStore();

        store.dispatch(
            TxAdd(TX_HASH_ONE, {
                from: FROM_ADDRESS_BOB,
                to: TO_ADDRESS_GEORGE
            })
        );

        store.dispatch(TxError(TX_HASH_ONE, new Error('test')));

        expect(getTransaction(store.getState(), TX_HASH_ONE).infos.from.toLowerCase())
            .toEqual(FROM_ADDRESS_BOB.toLowerCase());
        expect(getTransaction(store.getState(), TX_HASH_ONE).status).toEqual(TxStatus.Error);

        killStore(store);
    });

    test('Add basic transaction + Remove transaction', (): void => {
        const store: Store = buildStore();

        store.dispatch(
            TxAdd(TX_HASH_ONE, {
                from: FROM_ADDRESS_BOB,
                to: TO_ADDRESS_GEORGE
            })
        );

        store.dispatch(TxRemove(TX_HASH_ONE));

        expect(getTransaction(store.getState(), TX_HASH_ONE)).toEqual(undefined);

        killStore(store);
    });

    test('Add 4 basic transactions + get two', (): void => {
        const store: Store = buildStore();

        store.dispatch(
            TxAdd(TX_HASH_ONE, {
                from: FROM_ADDRESS_BOB,
                to: TO_ADDRESS_GEORGE
            })
        );

        store.dispatch(
            TxAdd(TX_HASH_TWO, {
                from: FROM_ADDRESS_BOB,
                to: TO_ADDRESS_LISA
            })
        );

        store.dispatch(
            TxAdd(TX_HASH_THREE, {
                from: FROM_ADDRESS_MIKE,
                to: TO_ADDRESS_LISA
            })
        );

        store.dispatch(
            TxAdd(TX_HASH_FOUR, {
                from: FROM_ADDRESS_MARC,
                to: TO_ADDRESS_MARIE
            })
        );

        expect(getTransactions(store.getState(), {from: FROM_ADDRESS_BOB}))
            .toHaveLength(2);

        killStore(store);
    });

    test('Use addTransaction helper', (): void => {
        const store: Store = buildStore();

        addTransaction(store.dispatch, TX_HASH_ONE);

        expect(getTransaction(store.getState(), TX_HASH_ONE)).toBeDefined();

        killStore(store);
    });

    test('Use removeTransaction helper', (): void => {
        const store: Store = buildStore();

        addTransaction(store.dispatch, TX_HASH_ONE);
        removeTransaction(store.dispatch, TX_HASH_ONE);

        expect(getTransaction(store.getState(), TX_HASH_ONE)).not.toBeDefined();

        killStore(store);
    });

    test('Use sendTransaction helper', async (done: jest.DoneCallback): Promise<void> => {
            const store: Store = buildStore();

            const web3: Web3 = buildTestWeb3(1);
            setWeb3(store.dispatch, web3);
            await vtx_status(store, VtxStatus.Loaded, 10);
            const initial_length: number = store.getState().vtxevents.length;
            const id: number = sendTransaction(store.dispatch, {
                from: FROM_ADDRESS_MIKE,
                to: TO_ADDRESS_GEORGE,
                value: '123',
                gasPrice: '123456'
            });

            await vtx_event(store, initial_length, VtxeventsTypes.TxBroadcasted, 10);
            await ganache_mine(web3, 10);
            await vtx_event(store, initial_length, VtxeventsTypes.TxConfirmed, 10);
            const tx: Tx = getTransactionById(store.getState(), id);

            if (tx === undefined) {
                return done(
                    new Error('Should not return undefined when requesting tx by its id')
                );
            }

            killStore(store);

            done();
        },
        60 * 1000
    );

    test('Use sendTransaction helper, reset and check transaction', async (done: jest.DoneCallback): Promise<void> => {
        const store: Store = buildStore();

        const web3: Web3 = buildTestWeb3();
        setWeb3(store.dispatch, web3);
        await vtx_status(store, VtxStatus.Loaded, 10);
        const initial_length: number = store.getState().vtxevents.length;
        sendTransaction(store.dispatch, {
            from: FROM_ADDRESS_MIKE,
            to: TO_ADDRESS_GEORGE,
            value: '123',
            gasPrice: '123456'
        });

        await vtx_event(store, initial_length, VtxeventsTypes.TxBroadcasted, 10);
        setWeb3(store.dispatch, web3);
        await vtx_state_check(store, 'txs', {}, 50);

        killStore(store);
        done();
    });

    test('Use followTransaction helper', async (done: jest.DoneCallback): Promise<void> => {
        const store: Store = buildStore();

        const web3: Web3 = buildTestWeb3();
        setWeb3(store.dispatch, web3);
        await vtx_status(store, VtxStatus.Loaded, 10);
        const initial_length: number = store.getState().vtxevents.length;
        const out_tx = await web3.eth.sendTransaction({
            from: FROM_ADDRESS_MIKE,
            to: TO_ADDRESS_GEORGE,
            value: '123',
            gasPrice: '123456'
        });
        const id: number = followTransaction(
            store.dispatch,
            out_tx.transactionHash
        );

        await vtx_event(store, initial_length, VtxeventsTypes.TxFollowed, 10);
        await ganache_mine(web3, 10);
        await vtx_event(store, initial_length, VtxeventsTypes.TxConfirmed, 10);
        const tx: Tx = getTransactionById(store.getState(), id);

        if (tx === undefined) {
            return done(
                new Error('Should not return undefined when requesting tx by its id')
            );
        }

        killStore(store);
        done();
    });
});
