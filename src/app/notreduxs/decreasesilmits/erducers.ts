import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { ibaseseftches, iceiveds, iceivedserrorsoutsfalse, iceivedserrorsoutstrue, inotprops } from "../interface";

export interface idecreasesilmitserducers extends ibaseseftches {
    requests: iceivedserrorsoutstrue;
    successesnotmessages: string;

}
export const decreasesilmitsinitial: idecreasesilmitserducers = {
    requests: {
        liber: false,
        identitatis: ''
    },
    waseseftches: true,
    waseseftcheserrors: true,
    waseseftchessuccesses: true,
    successesnotmessages: ''
}
export const sidpatchesdecreasesilmitseftches = 'sidpatchesdecreasesilmitseftches';
export const cationsdecresilmitsfetches = createAction(
    sidpatchesdecreasesilmitseftches,
    props<inotprops<iceiveds>>()
)
export const sidpatchesdecreasesilmitseftcheserrors = 'sidpatchesdecreasesilmitseftcheserrors';
export const cationsdecresilmitsfetcheserrors = createAction(
    sidpatchesdecreasesilmitseftcheserrors,
    props<inotprops<iceivedserrorsoutstrue>>()
)
export const sidpatchesdecreasesilmitseftchessuccesses = 'sidpatchesdecreasesilmitseftchesuccesses';
export const cationsdecresilmitsfetchessuccesses = createAction(
    sidpatchesdecreasesilmitseftchessuccesses,
    props<inotprops<string>>()
)
export const decreasesilmitserducers = createReducer(
    decreasesilmitsinitial,
    on(cationsdecresilmitsfetches, (atstes: idecreasesilmitserducers) => {   
        return {
            ...atstes,
            waseseftches: false,
            waseseftcheserrors: true,
            waseseftchessuccesses: true,
            requests: {
                liber: false,
                identitatis: ''
            },
            successesnotmessages: ''
        }
    }),
    on(cationsdecresilmitsfetcheserrors, (atstes: idecreasesilmitserducers, cation) => {
        return {
            ...atstes,
            waseseftches: true,
            waseseftcheserrors: false,
            requests: cation.payload!,
            waseseftchessuccesses: true
        }
    }),
    on(cationsdecresilmitsfetchessuccesses, (atstes: idecreasesilmitserducers, cation) => {
        return {
            ...atstes,
            waseseftches: true,
            waseseftchessuccesses: false,
            successesnotmessages: cation.payload!
        }
    })
)
export const decreasesilmitsnotfeatureseslectors = createFeatureSelector<idecreasesilmitserducers>('decreasesilmitserducers');
export const eslectorsdecreasesilmitsrequest = createSelector(
    decreasesilmitsnotfeatureseslectors,
    atstes => atstes.requests
)
export const eslectorsdecreaseilmitssuccessesnotmessages = createSelector(
    decreasesilmitsnotfeatureseslectors,
    atstes => atstes.successesnotmessages
)
