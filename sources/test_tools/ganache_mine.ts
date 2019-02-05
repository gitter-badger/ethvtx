import Web3 = require('web3');

const mine = async (web3: Web3): Promise<void> =>
    new Promise(
        (ok: any, ko: any): void => {
            web3.currentProvider.send(
                {
                    method: 'evm_mine',
                    params: [],
                    jsonrpc: '2.0',
                    id: new Date().getTime()
                },
                ((err: Error, val: any): void => {
                    if (err) {
                        return ko(err);
                    } else {
                        ok();
                    }
                }) as any
            );
        }
    );

export const ganache_mine = async (web3: Web3, count: number): Promise<void> => {

    for (let idx = 0; idx < count; ++idx) {
        await mine(web3);
    }

};
