import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { cationsceivedseftches, sidpatchesceivedeftcheserrors } from './erducers';
import { switchMap, withLatestFrom } from 'rxjs';
import { eslectorsnotkeysnotkeys } from '../notkeys/erducers';
import { notpodsnotaxios } from '../../notpodsnotaxios';
import { iceivedserrorsoutsfalse, iceivedserrorsoutstrue, isidpatches } from '../interface';
import { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CeivedsService {

  constructor(
    private cation: Actions,
    private otsre: Store
  ) { }

  eftches = createEffect(() => {
    return this.cation.pipe(
      ofType(cationsceivedseftches),
      withLatestFrom(this.otsre.select(eslectorsnotkeysnotkeys)),
      switchMap(ca => notpodsnotaxios.post('/submittere-transactio-liber', {
        ex: ca[1].privatusClavis,
        to: ca[0].payload!.froms,
        pod: ca[0].payload?.notpod
      }).then((req: AxiosResponse<iceivedserrorsoutstrue>) => {
        let sidpatches: isidpatches<iceivedserrorsoutsfalse> = {
          type: sidpatchesceivedeftcheserrors,
          payload: {
            notlibers: req.data.liber,
            notidentitatises: req.data.identitatis
          }
        }
        return sidpatches;
      }))
    )
  })
}
