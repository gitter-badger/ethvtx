import { Reducer }                      from 'redux';
import { EventsSection }                from '../../state/events';
import { IEventsCaught } from '../actions/actionTypes';

export const EventsCaughtReducer: Reducer<EventsSection, IEventsCaught> =
    (state: EventsSection, action: IEventsCaught): EventsSection => {
        if (state.data[action.signature]) {
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.signature]: [
                        ...state.data[action.signature],
                        action.infos
                    ]
                }
            };
        } else {
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.signature]: [
                        action.infos
                    ]
                }
            };
        }

    };
