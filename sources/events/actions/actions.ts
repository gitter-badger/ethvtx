import { EventsActions, IEventsCaught, IEventsFollow, IEventsSetHeight } from './actionTypes';
import { address_checker }                                               from '../../utils/address_checker';
import { Web3Event }                                                     from '../../state/events';

export const EventsFollow = (event: string, args: any, contract: string, address: string, signature: string): IEventsFollow => ({
    type: EventsActions.EventsFollow,
    event,
    arguments: args,
    address: address_checker(address),
    contract,
    signature
});

export const EventsCaught = (signature: string, infos: Web3Event): IEventsCaught => ({
    type: EventsActions.EventsCaught,
    signature,
    infos: {
        ...infos,
        address: address_checker(infos.address)
    }
});

export const EventsSetHeight = (signature: string, new_height: number): IEventsSetHeight => ({
    type: EventsActions.EventsSetHeight,
    signature,
    new_height
});
