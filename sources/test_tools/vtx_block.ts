import { Store } from 'redux';

export const vtx_block = async (store: Store, height: number, max?: number): Promise<void> =>
    new Promise<void>(
        (ok: any, ko: any): void => {
            let idx: number = 0;
            const interval_id = setInterval((): void => {
                if (store.getState().blocks.blocks[height] !== undefined) {
                    clearInterval(interval_id);
                    ok();
                }

                if (max !== undefined && idx >= max) {
                    clearInterval(interval_id);
                    ko(new Error('Cannot find block in store'));
                }

                ++idx;
            }, 100);
        }
    );
