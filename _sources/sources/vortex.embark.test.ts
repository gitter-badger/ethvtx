import {
    FeedNewContractState,
    FeedNewTransactionState,
    IPFSContentState,
    IPFSErrorState,
    Web3LoadedState
} from "./stateInterface";

declare var describe: any;
declare var test: any;
declare var expect: any;
declare var Buffer: any;
declare var global: any;

import {Vortex} from "./vortex";
import * as SimpleStorage from '../../setup/embark/dist/contracts/SimpleStorage.json';
import * as Chains from '../../setup/embark/chains.json';
import {FeedNewTransaction, FeedNewContract} from "./feed/feed.actions";
import * as Web3 from "web3";

import * as IPFSApi from 'ipfs-api';
import {IPFSLoad} from "./ipfs/ipfs.actions";
const IPFS = IPFSApi('ipfs.infura.io', '5001', {protocol: 'https'});
let IPFS_hash;
const IPFS_fake_hash = "QmaoJEsqFkHETuCzGukYtfdJFCgNa2JKVNmdMbNdtRwszB";
const IPFS_dir_hash = "QmTuXY7UC29GVEDEhzNHB3CJ7GD2GDBDhn9DNQoDdkWhDb";
const to_ipfs = new Buffer("ABCDEF");

let _web3;
_web3 = new (<any>Web3)(new (<any>Web3).providers.HttpProvider("http://localhost:8546"));

const getWeb3: Promise<any> = new Promise<any>((ok: (arg?: any) => void, ko: (arg?: any) => void): void => {
    try {
        ok(_web3);
    } catch (e) {
        ko(e);
    }
});

describe("Vortex", () => {
    test('Instantiate', () => {
        console.log(global.caca);
        const vtx = Vortex.factory({
            type: "embark",
            contracts: {
                SimpleStorage: new _web3.eth.Contract(SimpleStorage.abi, "0xc7E4d433eb912f78244A54bac86ba757E4e8641F", {
                    data: SimpleStorage.real_runtime_bytecode
                })
            },
            preloaded_contracts: ["SimpleStorage"],
            chains: Chains
        }, getWeb3);
        expect(vtx.Contracts.contracts["SimpleStorage"]).not.toBe(undefined);
    });

    test("IPFS Push", (done) => {
        IPFS.files.add(to_ipfs).then((res) => {
            IPFS_hash = res[0].hash;
            done();
        })
    }, 60000);

    test('Recover Instance', () => {
        expect(Vortex.get().Contracts.contracts["SimpleStorage"]).not.toBe(undefined);
    });

    test('Run Instance', () => {
        Vortex.get().run();
    });

    test('Load Web3', () => {
        Vortex.get().loadWeb3();
    });

    test('Check Coinbase Balance', (done) => {
        setTimeout((): void => {
            done(expect(Vortex.get().Store.getState().accounts.coinbase).not.toBe(undefined));
        }, 1000);
    });

    test('Get accounts and follow them', (done) => {
        _web3.eth.getAccounts().then(acc => {
            Vortex.get().subscribeAccount(acc[1]);
            setTimeout((): void => {
                done(expect(Vortex.get().Store.getState().accounts[acc[1]]).not.toBe(undefined));
            }, 1000);
        });
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
                case 4:
                    const txHash = (<FeedNewTransactionState>state.feed[3]).transaction_hash;
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
                case 5:
                    const txHash = (<FeedNewTransactionState>state.feed[4]).transaction_hash;
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
        expect(Vortex.get().Store.getState().feed[5].action).toBe('NEW_TRANSACTION');
    });

    test('Adding New Contract to Feed', () => {
        Vortex.get().Store.dispatch(FeedNewContract("Dummy Tx", "0xabcd"));
        expect(Vortex.get().Store.getState().feed[6].action).toBe('NEW_CONTRACT');
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

        contract.vortex.set.vortexSend({from: coinbase}, 23).then((_txHash: string): void => {
            let intervalId = setInterval(() => {
                const state = Vortex.get().Store.getState();
                switch (state.feed.length) {
                    case 8  :
                        const txHash = (<FeedNewTransactionState>state.feed[7]).transaction_hash;
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
        Vortex.get().loadContract("SimpleStorage", (<Web3LoadedState>Vortex.get().Store.getState().web3).coinbase);
        let intervalId = setInterval(() => {
            const state = Vortex.get().Store.getState();
            switch (state.feed.length) {
                case 9:
                    if (state.feed[8].action === 'NEW_CONTRACT' && (<FeedNewContractState>state.feed[8]).contract_name === 'SimpleStorage' && (<FeedNewContractState>state.feed[8]).contract_address === (<Web3LoadedState>Vortex.get().Store.getState().web3).coinbase)
                        done();
                    else
                        done(new Error("Invalid Feed element"));
                    break ;
                default:
                    break ;
            }
        }, 1000);
    }, 10000);

    test('Recover IPFS hash previously uploaded', (done) => {
        Vortex.get().Store.dispatch(IPFSLoad(IPFS_hash));
        let intervalId = setInterval(() => {
            const state = Vortex.get().Store.getState();
            if (state.ipfs[IPFS_hash]) {
                if ((<IPFSErrorState>state.ipfs[IPFS_hash]).error) {
                    done((<IPFSErrorState>state.ipfs[IPFS_hash]).error);
                } else if ((<IPFSContentState>state.ipfs[IPFS_hash]).content) {
                    clearInterval(intervalId);
                    done();
                }
            }
        }, 1000);
    }, 30000);

    test('Recover False IPFS hash', (done) => {
        Vortex.get().Store.dispatch(IPFSLoad(IPFS_fake_hash));
        let intervalId = setInterval(() => {
            const state = Vortex.get().Store.getState();
            if (state.ipfs[IPFS_fake_hash]) {
                if ((<IPFSErrorState>state.ipfs[IPFS_fake_hash]).error) {
                    clearInterval(intervalId);
                    done();
                } else if ((<IPFSContentState>state.ipfs[IPFS_fake_hash]).content) {
                    done(new Error("Should have thrown"));
                }
            }
        }, 1000);
    }, 300000);

    test('Recover Dir IPFS hash', (done) => {
        Vortex.get().Store.dispatch(IPFSLoad(IPFS_dir_hash));
        let intervalId = setInterval(() => {
            const state = Vortex.get().Store.getState();
            if (state.ipfs[IPFS_dir_hash]) {
                if ((<IPFSErrorState>state.ipfs[IPFS_dir_hash]).error) {
                    done(new Error("Should have thrown"));
                } else if ((<IPFSContentState>state.ipfs[IPFS_dir_hash]).content) {
                    clearInterval(intervalId);
                    done();
                }
            }
        }, 1000);
    }, 30000);

});
