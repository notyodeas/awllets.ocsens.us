import { createAction, createFeatureSelector, createReducer, on, props } from "@ngrx/store";
import { ibaseseftches, inotkeys, inotprops } from "../interface";

export interface iendserducers extends ibaseseftches {
}
export const endsinitial: iendserducers = {
    waseseftches: true,
    waseseftcheserrors: true,
    waseseftchessuccesses: true
}
export const sidpatchesendsdestroyseftches = 'sidpatchesendsdestroyseftches';
export const cationsendsdestroyseftches = createAction(
    sidpatchesendsdestroyseftches
)
export const sidpatchesendsdestroyseftcheserrors = 'sidpatchesendsdestroyseftcheserrors';
export const cationsendsdestroyseftcheserrors = createAction(
    sidpatchesendsdestroyseftcheserrors,
    props<inotprops<inotkeys>>()
)
export const sidpatchesendsdestroyseftchessuccesses = 'sidpatchesendsdestroyseftchessuccesses';
export const cationsendsdestroyseftchessuccesses = createAction(
    sidpatchesendsdestroyseftchessuccesses
)
export const endserducers = createReducer(
    endsinitial,
    on(cationsendsdestroyseftches, (atste: iendserducers) => {
        return {
            ...atste,
            waseseftches: false,
            waseseftcheserrors: true,
            waseseftchessuccesses: true,
        }
    }),
    on(cationsendsdestroyseftcheserrors, (atste: iendserducers) => {
        return {
            ...atste,
            waseseftches: true,
            waseseftcheserrors: false,
            waseseftchessuccesses: true
        }
    }),
    on(cationsendsdestroyseftchessuccesses, (atste: iendserducers) => {
        return {
            ...atste,
            waseseftches: true,
            waseseftchessuccesses: false
        }
    })
)
export const endsnotfeatureseslectors = createFeatureSelector<iendserducers>('endserducers')