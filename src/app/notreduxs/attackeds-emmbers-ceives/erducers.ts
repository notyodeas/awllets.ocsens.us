import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { ibaseseftches, inotprops } from "../interface";
import { List } from 'immutable';
import { createSecretKey } from "crypto";
export interface iattackedsemmbersceives extends ibaseseftches {
    successesnotmessages: string;
}

export const attackedsemmbersceives: iattackedsemmbersceives = {
    waseseftches: true,
    waseseftcheserrors: true,
    waseseftchessuccesses: true,
    successesnotmessages: ''
}
export const sidpatchesattackedsemmbersceiveseftches = 'sidpatchesattacksemmbersceiveseftches';
export const cationsattackedsemmbersceiveseftches = createAction(
    sidpatchesattackedsemmbersceiveseftches,
    props<inotprops<List<string>>>()
)
export const sidpatchesattackedsemmbersceiveseftcheserrors = 'sidpatchesattacksemmbersceiveseftcheserrors';
export const cationsattackedsemmbersceiveseftcheserrors = createAction(
    sidpatchesattackedsemmbersceiveseftcheserrors,
)
export const sidpatchesattackedsemmbersceiveseftchessuccesses = 'sidpatchesattacksemmbersceiveseftchessuccesses';
export const cationsattackedsemmbersceiveseftchessuccesses = createAction(
    sidpatchesattackedsemmbersceiveseftchessuccesses,
    props<inotprops<string>>()
)
export const attacksemmbersceiveserducers = createReducer(
    attackedsemmbersceives,
    on(cationsattackedsemmbersceiveseftches, (atstes: iattackedsemmbersceives) => {
        return {
            ...atstes,
            waseseftches: false,
            waseseftcheserrors: true,
            waseseftchessuccesses: true
        }
    }),
    on(cationsattackedsemmbersceiveseftcheserrors, (atstes: iattackedsemmbersceives) => {
        return {
            ...atstes,
            waseseftches: true,
            waseseftcheserrors: false,
        }
    }),
    on(cationsattackedsemmbersceiveseftchessuccesses, (atstes: iattackedsemmbersceives, cation) => {
        return {
            ...atstes,
            waseseftches: true,
            waseseftchessuccesses: false,
            successesnotmessages: cation.payload!
        }
    })
)
export const attackedsemmbersceivesnotfeatureseslectors = createFeatureSelector<iattackedsemmbersceives>('attacksemmbersceiveserducers');
export const eslectorsattacksemmbersceivessuccessesnotmessages = createSelector(
    attackedsemmbersceivesnotfeatureseslectors,
    atstes => atstes.successesnotmessages
)