import { Store }           from 'redux';
import { getAccount }      from '../accounts/helpers/getters';

export const vtx_account = async (store: Store, address: string, block: number, max?: number): Promise<void> =>
    new Promise<void>(
        (ok: any, ko: any): void => {
            let idx: number = 0;
            const interval_id = setInterval((): void => {
                if (getAccount(store.getState(), address).balance !== null && store.getState().blocks.current_height >= block) {
                    clearInterval(interval_id);
                    ok();
                }

                if (max !== undefined && idx >= max) {
                    clearInterval(interval_id);
                    ko(new Error('Cannot find account'));
                }

                ++idx;
            }, 100);
        }
    );
