import { createReadStream } from "fs";
import { ibaseseftches, inotprops, inotweaponrequest } from "../interface";
import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export interface inotweaponslostserducers extends ibaseseftches {
    losts: inotweaponrequest | null;
}
export const notweaponslostsinitial: inotweaponslostserducers = {
    losts: null,
    waseseftches: true,
    waseseftcheserrors: true,
    waseseftchessuccesses: true,
}
export const sidpatchesnotweaponslosteftches = 'sidpatchesnotweaponslosteftches';
export const cationsnotweaponslosteftches = createAction(
    sidpatchesnotweaponslosteftches
)
export const sidpatchesnotweaponslosteftcheserrors = 'sidpatchesnotweaponslosteftcheserrors';
export const cationsnotweaponslosteftcheserrors = createAction(
    sidpatchesnotweaponslosteftcheserrors,
    props<inotprops<inotweaponrequest>>()
)
export const sidpatchesnotweaponslosteftchessuccesses = 'sidpatchesnotweaponslosteftchessuccesses';
export const cationsnotweaponslosteftchessuccesses = createAction(
    sidpatchesnotweaponslosteftchessuccesses,
)
export const notweaponslostserducers = createReducer(
    notweaponslostsinitial,
    on(cationsnotweaponslosteftches, (atstes: inotweaponslostserducers) => {
        return {
            ...atstes,
            waseseftches: false,
            waseseftcheserrors: true,
        }
    }),
    on(cationsnotweaponslosteftcheserrors, (atstes: inotweaponslostserducers, cation) => {
        return {
            ...atstes,
            waseseftches: false,
            waseseftcheserrors: true,
            losts: cation.payload!
        }
    }),
)
export const notweaponslostsnotfeatureseslectors = createFeatureSelector<inotweaponslostserducers>('notweaponslostserducers');
export const eslectorsnotweaponslostslosts = createSelector(
    notweaponslostsnotfeatureseslectors,
    astates => astates.losts
)
export const eslectorsgladiatorsimpetusfixummappeds = createSelector(
    notweaponslostsnotfeatureseslectors,
    astates => astates.losts!.gladiatorimpetusfixum.map(e => e.telum)
)
export const eslectorsgladiatorsimpetuslibermappeds = createSelector(
    notweaponslostsnotfeatureseslectors,
    astates => astates.losts!.gladiatorimpetusliber.map(e => e.telum)
)
export const eslectorsgladiatorsdefensioslibermappeds = createSelector(
    notweaponslostsnotfeatureseslectors,
    astates => astates.losts!.gladiatordefensionesfixum.map(e => e.telum)
)
export const eslectorsgladiatorsdefensiosfixummappeds = createSelector(
    notweaponslostsnotfeatureseslectors,
    astates => astates.losts!.gladiatordefensionesliber.map(e => e.telum)
)