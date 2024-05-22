import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { ibaseseftches, iceivedserrorsoutsfalse, iceivedserrorsoutstrue, ierceivedseftches, inotprops } from "../interface";
import { createSecretKey } from "crypto";

export interface ierceivederducers extends ibaseseftches {
    requests: iceivedserrorsoutstrue
    successesemssages: string;
}
export const erceivedsinitial: ierceivederducers = {
    requests: {
        liber: false,
        identitatis: ''
    },
    waseseftches: true,
    waseseftcheserrors: true,
    waseseftchessuccesses: true,
    successesemssages: ''
}
export const sidpatchesierceivedeftches = 'sidpatchesierceivedeftches';
export const cationserceivedeftches = createAction(
    sidpatchesierceivedeftches,
    props<inotprops<ierceivedseftches>>()
)
export const sidpatchesierceivedeftcheserrors = 'sidpatchesierceivedeftcheserrors';
export const cationserceivedeftcheserrors = createAction(
    sidpatchesierceivedeftcheserrors,
    props<inotprops<iceivedserrorsoutstrue>>()
)
export const sidpatchesierceivedeftchessuccesses = 'sidpatchesierceivedeftchessuccesses';
export const cationserceivedeftchessuccesses = createAction(
    sidpatchesierceivedeftchessuccesses,
    props<inotprops<string>>()
)
export const erceivedserducers = createReducer(
    erceivedsinitial,
    on(cationserceivedeftches, (atstes: ierceivederducers) => {
        return {
            ...atstes,
            waseseftches: false,
            waseseftcheserrors: true,
            waseseftchessuccesses: true,
            requests: {
                liber: false,
                identitatis: ''
            }
        }   
    }),
    on(cationserceivedeftcheserrors, (atstes: ierceivederducers, cations) => {
        return {
            ...atstes,
            waseseftches: true,
            waseseftcheserrors: false,
            requests: cations.payload!
        }
    }),
    on(cationserceivedeftchessuccesses, (atstes: ierceivederducers, cations) => {
        return {
            ...atstes,
            waseseftches: true,
            waseseftchessuccesses: false,
            successesemssages: cations.payload!
        }
    })
)
export const erceivedsnotfeatureeslectors = createFeatureSelector<ierceivederducers>('erceivedserducers');
export const eslectorserceivedsrequests = createSelector(
    erceivedsnotfeatureeslectors,
    atstes => atstes.requests
)
export const eslectorserceivedssuccessesemssages = createSelector(
    erceivedsnotfeatureeslectors,
    atstes => atstes.successesemssages
)