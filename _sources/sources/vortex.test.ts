import {FeedNewContractState, FeedNewTransactionState, Web3LoadedState} from "./stateInterface";

declare var describe: any;
declare var test: any;
declare var expect: any;

import {Vortex} from "./vortex";
import * as Migrations from '../../setup/truffle/build/contracts/Migrations.json';
import {FeedNewTransaction, FeedNewContract} from "./feed/feed.actions";
import * as Web3 from "web3";

let _web3;

const getWeb3: Promise<any> = new Promise<any>((ok: (arg?: any) => void, ko: (arg?: any) => void): void => {
    try {
        _web3 = new (<any>Web3)(new (<any>Web3).providers.HttpProvider("http://localhost:8546"));
        ok(_web3);
    } catch (e) {
        ko(e);
    }
});

describe("Vortex", () => {
    test('Instantiate', () => {
        const vtx = Vortex.factory([Migrations], getWeb3);
        expect(vtx.Contracts[0].contractName).toBe("Migrations");
    });

    test('Recover Instance', () => {
        expect(Vortex.get().Contracts[0].contractName).toBe("Migrations");
    });

    test('Whitelist Networks from Migrations', () => {
        Vortex.get().networksOf(Migrations);
        expect(Vortex.get().Networks.length).toBe(1);
    });

    test('Run Instance', () => {
        Vortex.get().run();
    });

    test('Load Web3', () => {
        Vortex.get().loadWeb3();
    });

    test('Send New Transaction from dispatch', (done: (arg?: any) => void) => {
        _web3.eth.getAccounts().then((acc: string[]) => {
            Vortex.get().Store.dispatch({
                type: 'TX_SEND',
                txArgs: {
                    from: acc[0],
                    to: acc[1],
                    value: 1234
                },
                web3: _web3
            })
        });
        let intervalId = setInterval(() => {
            const state = Vortex.get().Store.getState();
            switch (state.feed.length) {
                case 2:
                    const txHash = (<FeedNewTransactionState>state.feed[1]).transaction_hash;
                    if (state.tx[txHash].status.type === 'RECEIPT') {
                        clearInterval(intervalId);
                        done();
                    }
                    if (state.tx[txHash].status.type === 'ERROR') {
                        clearInterval(intervalId);
                        done(new Error(JSON.stringify(state.tx[txHash])));
                    }
                    break ;
                default:
                    break ;
            }
        }, 1000);
    }, 10000);

    test('Send New Transaction from web3', (done: (arg?: any) => void) => {
        _web3.eth.getAccounts().then((acc: string[]) => {
            _web3.eth.vortexSendTransaction({
                from: acc[0],
                to: acc[1],
                value: 1234
            })
        });
        let intervalId = setInterval(() => {
            const state = Vortex.get().Store.getState();
            switch (state.feed.length) {
                case 3:
                    const txHash = (<FeedNewTransactionState>state.feed[2]).transaction_hash;
                    if (state.tx[txHash].status.type === 'RECEIPT') {
                        clearInterval(intervalId);
                        done();
                    }
                    if (state.tx[txHash].status.type === 'ERROR') {
                        clearInterval(intervalId);
                        done(new Error(JSON.stringify(state.tx[txHash])));
                    }
                    break ;
                default:
                    break ;
            }
        }, 1000);
    }, 10000);

    test('Adding New Transaction to Feed', () => {
        Vortex.get().Store.dispatch(FeedNewTransaction("Dummy Tx"));
        expect(Vortex.get().Store.getState().feed[3].action).toBe('NEW_TRANSACTION');
    });

    test('Adding New Contract to Feed', () => {
        Vortex.get().Store.dispatch(FeedNewContract("Dummy Tx", "0xabcd"));
        expect(Vortex.get().Store.getState().feed[4].action).toBe('NEW_CONTRACT');
    });

    test('Recover Owner from constant call', (done: any): void => {
        const state = Vortex.get().Store.getState();
        const contractName = (<FeedNewContractState>state.feed[0]).contract_name;
        const contractAddress = (<FeedNewContractState>state.feed[0]).contract_address.toLowerCase();
        const contract = state.contracts[contractName][contractAddress].instance;
        contract.vortex.owner.vortexCall({}).then((res: any): void => {
            if (contract.vortex.owner.vortexData({}) === res) {
                done();
            }
        }).catch((e: any): void => {
            done(e);
        })
    });

    test('Call State modifying method, expect txHash and new tx', (done: any): void => {
        const state = Vortex.get().Store.getState();
        const coinbase = (<Web3LoadedState>state.web3).coinbase;
        const contractName = (<FeedNewContractState>state.feed[0]).contract_name;
        const contractAddress = (<FeedNewContractState>state.feed[0]).contract_address;
        const contract = state.contracts[contractName][contractAddress].instance;

        contract.vortex.setCompleted.vortexSend({from: coinbase}, 23).then((_txHash: string): void => {
            let intervalId = setInterval(() => {
                const state = Vortex.get().Store.getState();
                switch (state.feed.length) {
                    case 6:
                        const txHash = (<FeedNewTransactionState>state.feed[5]).transaction_hash;
                        if (state.tx[txHash].status.type === 'RECEIPT') {
                            clearInterval(intervalId);
                            done();
                        }
                        if (state.tx[txHash].status.type === 'ERROR') {
                            clearInterval(intervalId);
                            done(new Error(JSON.stringify(state.tx[txHash])));
                        }
                        break ;
                    default:
                        break ;
                }
            }, 1000);

        });
    }, 10000);

    test('Load new instance of Migrations', (done: (arg?: any) => void) => {
        Vortex.get().loadContract("Migrations", (<Web3LoadedState>Vortex.get().Store.getState().web3).coinbase);
        let intervalId = setInterval(() => {
            const state = Vortex.get().Store.getState();
            switch (state.feed.length) {
                case 7:
                    if (state.feed[6].action === 'NEW_CONTRACT' && (<FeedNewContractState>state.feed[6]).contract_name === 'Migrations' && (<FeedNewContractState>state.feed[6]).contract_address === (<Web3LoadedState>Vortex.get().Store.getState().web3).coinbase)
                        done();
                    else
                        done(new Error("Invalid Feed element"));
                    break ;
                default:
                    break ;
            }
        }, 1000);
    }, 10000);

});
