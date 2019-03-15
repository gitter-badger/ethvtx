import { Store } from 'redux';

export const vtx_evm_event_height = async (store: Store, sig: string, height: number, max?: number): Promise<void> =>
    new Promise<void>(
        (ok: any, ko: any): void => {
            let idx: number = 0;
            const interval_id = setInterval((): void => {
                if (store.getState().events.followed[sig] && store.getState().events.followed[sig].last_fetched >= height) {
                    clearInterval(interval_id);
                    ok();
                }
                if (max !== undefined && idx >= max) {
                    clearInterval(interval_id);
                    ko(new Error('EVM event height not fetched in limit time'));
                }

                ++idx;
            }, 100);
        }
    );
