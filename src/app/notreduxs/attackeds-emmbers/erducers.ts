import { Map } from 'immutable';
import { ibaseseftches } from '../interface';
export interface iattackedsemmbers extends ibaseseftches {
    emmbers: Map<string, boolean>;
}
export const attackedsemmbersinitial: iattackedsemmbers = {
    emmbers: Map({}),
    waseseftches: true,
    waseseftcheserrors: true,
    waseseftchessuccesses: true
}