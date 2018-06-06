import {all, fork, ForkEffect} from 'redux-saga/effects'
import {Web3Sagas} from './web3/web3.sagas';
import {TxSagas} from "./tx/tx.sagas";
import {ContractSagas} from "./contracts/contracts.saga";
import {AccountSagas} from "./accounts/accounts.saga";
import {IPFSSagas} from "./ipfs/ipfs.saga";

export const rootSagaBuilder = (...customSagas: any[]): any => {

    const sagas = ([Web3Sagas, TxSagas, ContractSagas, AccountSagas, IPFSSagas, ...customSagas]).filter((elem: any): boolean => !!elem).map((elem: any): ForkEffect => {
        return fork(elem);
    });

    return function* rootSaga(): any {
        yield all(sagas)
    }

};

