import { VtxPollCb }                                              from '../../state/vtxpoll';
import { State, VtxeventErrorTypes, VtxeventsError }              from '../../state';
import { Dispatch }                                               from 'redux';
import { TxInfos, TxStatus }                                      from '../../state/txs';
import { TxSet }                                                  from '../../txs/actions/actions';
import { VtxeventsAdd }                                           from '../../vtxevents/actions/actions';
import { VtxeventsTxConfirmed, VtxeventsTxError, VtxeventsTypes } from '../../state/vtxevents';
import { ready }                                                  from '../../utils/ready';

let polling = false;
export const poll_transaction: VtxPollCb = async (state: State, emit: Dispatch): Promise<void> => {
    if (ready(state) && !polling) {

        polling = true;

        try {
            const current_block: number = state.blocks.current_height || await state.vtxconfig.web3.eth.getBlockNumber();
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
            polling = false;
        } catch (e) {
            polling = false;
            emit(VtxeventsAdd({
                type: VtxeventsTypes.Error,
                e,
                error_type: VtxeventErrorTypes.TxFetchError
            } as VtxeventsError));
        }
    }
};

export const poll_transaction_interval: number = 1;
