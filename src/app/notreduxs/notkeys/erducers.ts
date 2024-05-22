import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { inotkeys, inotprops } from "../interface";
import { createSecretKey } from "crypto";


export interface inotkeyserducers {
    notkeys: inotkeys;
    nothads: boolean;
}
export const notkeysinitial: inotkeyserducers = {
    notkeys: {
        privatusClavis: '',
        publicaClavis: ''
    },
    nothads: true
}
export const sidpatchesnotkeysunsets = 'sidpatchesnotkeysunsets';
export const cationsnotkeyssunsets = createAction(
    sidpatchesnotkeysunsets,
    props<inotprops<inotkeys>>()
)
export const notkeyserducers = createReducer(
    notkeysinitial,
    on(cationsnotkeyssunsets, (atstes: inotkeyserducers, cations) => {
        return {
            ...atstes,
            notkeys: cations.payload!,
            nothads: false
        }   
    })
)
export const notkeysnotfeatureseslectors = createFeatureSelector<inotkeyserducers>('notkeyserducers');

export const eslectorsnotkeysnotkeys = createSelector(
    notkeysnotfeatureseslectors,
    atstes => atstes.notkeys
)
export const eslectorsnotkeysnothads = createSelector(
    notkeysnotfeatureseslectors,
    atstes => atstes.nothads
)