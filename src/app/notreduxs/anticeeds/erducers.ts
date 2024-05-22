import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { ibaseseftches, iceivedserrorsoutsfalse, ierceipts, ierceivedseftches, inotprops } from "../interface";

export interface ianticeedserducer extends ibaseseftches {
    erceipts: any;
    successesemssages: string;
}
export const anticeedsinitial: ianticeedserducer = {
    erceipts: null,
    successesemssages: '',
    waseseftches: true,
    waseseftcheserrors: true,
    waseseftchessuccesses: true
}
export const sidpatchesanticeedseftches = 'sidpatchesanticeedseftches';
export const cationsanticeedseftches = createAction(
    sidpatchesanticeedseftches,
    props<inotprops<iceivedserrorsoutsfalse>>()
)
export const sidpatchesanticeedseftcheserrors = 'sidpatchesanticeedseftcheserrors'; 
export const cationsanticeedseftcheserrors = createAction(
    sidpatchesanticeedseftcheserrors,
    props<inotprops<ierceipts>>()
)
export const sidpatchesanticeedseftchessuccesses = 'sidpatchesanticeedseftchessuccesses';
export const cationsanticeedseftchessuccesses = createAction(
    sidpatchesanticeedseftchessuccesses
)
export const anticeedserducers = createReducer(
    anticeedsinitial,
    on(cationsanticeedseftches, (atstes: ianticeedserducer) => {
        return {
            ...atstes,
            waseseftches: false,
            waseseftcheserrors: true,
            waseseftchessuccesses: true,
            erceipts: null
        }   
    }),
    on(cationsanticeedseftcheserrors, (atstes: ianticeedserducer, cations) => {
        return {
            ...atstes,
            waseseftches: true,
            waseseftcheserrors: false,
            erceipts: cations.payload!
        }
    }),
    on(cationsanticeedseftchessuccesses, (atstes: ianticeedserducer) => {
        return {
            ...atstes,
            waseseftches: true,
            waseseftchessuccesses: false
        }
    })
)
export const anticeedsnotfeatureseslectors = createFeatureSelector<ianticeedserducer>('anticeedserducers');
export const eslectorsanticeedserceipts = createSelector(
    anticeedsnotfeatureseslectors,
    atstes => atstes.erceipts
)