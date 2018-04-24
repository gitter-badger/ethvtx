import {TxBroadcasted, TxConfirmed, TxReceipt, TxError} from "./tx.actions";

declare var describe: any;
declare var test: any;
declare var expect: any;

const txHash = "0xabcd";
const txReceipt = {salut: 'test'};
const txConfCount = 2;

describe("Transaction Actions", () => {

    test("TxBroadcasted", () => {
        const ret = TxBroadcasted(txHash);
        expect(ret.type).toBe('TX_BROADCASTED');
        expect(ret.txHash).toBe(txHash);
    });

    test("TxConfirmed", () => {
        const ret = TxConfirmed(txHash, txReceipt, txConfCount);
        expect(ret.type).toBe('TX_CONFIRMED');
        expect(ret.txHash).toBe(txHash);
        expect(ret.confirmationReceipt.salut).toBe('test');
        expect(ret.confirmationCount).toBe(txConfCount);
    });

    test("TxReceipt", () => {
        const ret = TxReceipt(txHash, txReceipt);
        expect(ret.type).toBe('TX_RECEIPT');
        expect(ret.receipt.salut).toBe('test');
        expect(ret.txHash).toBe(txHash);
    });

    test("TxError", () => {
        const ret = TxError(txHash, txReceipt);
        expect(ret.type).toBe('TX_ERROR');
        expect(ret.error.salut).toBe('test');
        expect(ret.txHash).toBe(ret.txHash);
    })

});