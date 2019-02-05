import { Store }     from 'redux';
import { VtxStatus } from '../state/vtxconfig';

export const vtx_status = async (store: Store, status: VtxStatus, max?: number): Promise<void> =>
    new Promise<void>(
        (ok: any, ko: any): void => {
            let idx: number = 0;
            const interval_id = setInterval((): void => {
                if (store.getState().vtxconfig.status === status) {
                    clearInterval(interval_id);
                    ok();
                }

                if (max !== undefined && idx >= max) {
                    clearInterval(interval_id);
                    ko(new Error('Cannot have required status'));
                }

                ++idx;
            }, 100);
        }
    );
