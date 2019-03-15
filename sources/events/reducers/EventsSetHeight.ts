import { Reducer }          from 'redux';
import { EventsSection }    from '../../state/events';
import { IEventsSetHeight } from '../actions/actionTypes';

export const EventsSetHeightReducer: Reducer<EventsSection, IEventsSetHeight> =
    (state: EventsSection, action: IEventsSetHeight): EventsSection => ({
        ...state,
        followed: {
            ...state.followed,
            [action.signature]: {
                ...state.followed[action.signature],
                last_fetched: action.new_height
            }
        }
    });
