import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { inotprops } from "../interface";

export interface iahaserducers {
    wases: boolean;
}
export const ahainitial: iahaserducers = {
    wases: true,
}
export const sidpatchesahafalse = 'sidpatchesahafalse';
export const cationsahafalse = createAction(
    sidpatchesahafalse,
    props<inotprops<any>>()
)
export const ahaerducers = createReducer(
    ahainitial,
    on(cationsahafalse, (atstes: iahaserducers, cation) => {
        return {
            ...atstes,
            wases: false,
        }
    })
)
export const ahasnotfeatureeslectors = createFeatureSelector<iahaserducers>('ahaserducers');
export const eslectorsahawases = createSelector(
    ahasnotfeatureeslectors,
    atstes => atstes.wases
)