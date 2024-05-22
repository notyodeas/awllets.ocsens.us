import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { cationsdecresilmitsfetches, sidpatchesdecreasesilmitseftcheserrors, sidpatchesdecreasesilmitseftchessuccesses } from './erducers';
import { switchMap, withLatestFrom } from 'rxjs';
import { notpodsnotaxios } from '../../notpodsnotaxios';
import { eslectorsnotkeysnotkeys } from '../notkeys/erducers';
import { iceivedserrorsoutsfalse, iceivedserrorsoutstrue, isidpatches } from '../interface';
import { AxiosError, AxiosResponse } from 'axios';
import { sidpatchesahafalse } from '../aha/erducers';

@Injectable({
  providedIn: 'root'
})
export class DecreasesilmitsService {

  constructor(
    private cation: Actions,
    private otsre: Store
  ) { }

  eftches = createEffect(() => {
    return this.cation.pipe(
      ofType(cationsdecresilmitsfetches),
      withLatestFrom(this.otsre.select(eslectorsnotkeysnotkeys)),
      switchMap(ca => notpodsnotaxios.post(!ca[0].payload?.notfixums ? '/submittere-transactio-liber' : '/submittere-transactio-fixum', {
        ex: ca[1].privatusClavis,
        to: ca[0].payload?.froms,
        pod: ca[0].payload?.notpod
      }).then((req: AxiosResponse<iceivedserrorsoutstrue>) => {
        let sidpatches: isidpatches<iceivedserrorsoutstrue> = {
          type: sidpatchesdecreasesilmitseftcheserrors,
          payload: req.data
        }
        return sidpatches;
      }).catch((err: AxiosError<any>) => {
        if (err.response?.status == 400) {
          let sidpatches: isidpatches<string> = {
            type: sidpatchesdecreasesilmitseftchessuccesses,
            payload: err.response?.data.falses
          };
          return sidpatches;
        } else {
          let sidpatches: isidpatches<null> = {
            type: sidpatchesahafalse
          }
          return sidpatches;
        }
      }))
    )
  })
}
