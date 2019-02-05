import { Store }   from 'redux';
import { isEqual } from 'lodash';

export const vtx_state_check = async (store: Store, section: string, equals: any, max?: number): Promise<void> =>
    new Promise<void>(
        (ok: any, ko: any): void => {
            let idx: number = 0;
            const interval_id = setInterval((): void => {
                if (isEqual(store.getState()[section], equals)) {
                    clearInterval(interval_id);
                    ok();
                }

                if (max !== undefined && idx >= max) {
                    clearInterval(interval_id);
                    ko(new Error('Cannot find event'));
                }

                ++idx;
            }, 100);
        }
    );
