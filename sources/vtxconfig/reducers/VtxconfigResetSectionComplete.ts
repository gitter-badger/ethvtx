import { Reducer }                        from 'redux';
import { VtxconfigSection }               from '../../state/vtxconfig';
import { IVtxconfigResetSectionComplete } from '../actions/actionTypes';

export const VtxconfigResetSectionCompleteReducer: Reducer<VtxconfigSection, IVtxconfigResetSectionComplete> =
    (state: VtxconfigSection, action: IVtxconfigResetSectionComplete): VtxconfigSection => {
        switch (action.section) {
            case 'txs':
                return {
                    ...state,
                    reset_status: {
                        ...state.reset_status,
                        txs: true
                    }
                };

            default:
                console.error(`Attempt to reset unknown section ${action.section}`);
                return state;
        }
    };
