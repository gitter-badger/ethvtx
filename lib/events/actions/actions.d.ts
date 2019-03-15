import { IEventsCaught, IEventsFollow, IEventsSetHeight } from './actionTypes';
import { Web3Event } from '../../state/events';
export declare const EventsFollow: (event: string, args: any, contract: string, address: string, signature: string) => IEventsFollow;
export declare const EventsCaught: (signature: string, infos: Web3Event) => IEventsCaught;
export declare const EventsSetHeight: (signature: string, new_height: number) => IEventsSetHeight;
