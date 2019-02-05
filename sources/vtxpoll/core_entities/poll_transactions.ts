import { VtxPollCb }         from '../../state/vtxpoll';
import { State }             from '../../state';
import { Dispatch }          from 'redux';
import { TxInfos, TxStatus } from '../../state/txs';
import { TxSet }             from '../../txs/actions/actions';
import { VtxeventsAdd }      from '../../vtxevents/actions/actions';
import {
    VtxeventsTxConfirmed,
    VtxeventsTxError,
    VtxeventsTypes
}                            from '../../state/vtxevents';

export const poll_transaction: VtxPollCb = async (state: State, emit: Dispatch): Promise<void> => {
    if (state.vtxconfig.web3) {
        const current_block: number = await state.vtxconfig.web3.eth.getBlockNumber();
        const treshold: number = state.vtxconfig.confirmation_treshold;

        for (const tx of Object.keys(state.txs)) {
            switch (state.txs[tx].status) {
                case TxStatus.Unknown:
                    const infos: TxInfos = await state.vtxconfig.web3.eth.getTransaction(tx);
                    emit(TxSet(tx, infos, TxStatus.Confirming));

                case TxStatus.Confirming:
                    const receipt: any = await state.vtxconfig.web3.eth.getTransactionReceipt(tx);
                    if (receipt.status === 1) {
                        emit(TxSet(tx, {}, TxStatus.Error));
                        emit(VtxeventsAdd({
                            type: VtxeventsTypes.TxError,
                            tx_hash: tx
                        } as VtxeventsTxError));
                    } else if (current_block - receipt.blockNumber >= treshold) {
                        emit(TxSet(tx, {}, TxStatus.Confirmed));
                        emit(VtxeventsAdd({
                            type: VtxeventsTypes.TxConfirmed,
                            tx_hash: tx
                        } as VtxeventsTxConfirmed));
                    }
            }
        }
    }
};

export const poll_transaction_interval: number = 5;
