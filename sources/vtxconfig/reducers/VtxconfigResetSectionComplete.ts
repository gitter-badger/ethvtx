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

            case 'blocks':
                return {
                    ...state,
                    reset_status: {
                        ...state.reset_status,
                        blocks: true
                    }
                };

            case 'vtxcache':
                return {
                    ...state,
                    reset_status: {
                        ...state.reset_status,
                        vtxcache: true
                    }
                };

            case 'contracts':
                return {
                    ...state,
                    reset_status: {
                        ...state.reset_status,
                        contracts: true
                    }
                };

            default:
                console.error(`Attempt to reset unknown section ${action.section}`);
                return state;
        }
    };
