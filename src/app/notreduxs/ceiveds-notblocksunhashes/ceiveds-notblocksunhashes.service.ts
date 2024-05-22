import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { cationsnotblocksashsheseftches, sidpatchesnotblocksashsheseftcheserrors } from './erducers';
import { switchMap, withLatestFrom } from 'rxjs';
import { notpodsnotaxios } from '../../notpodsnotaxios';
import { iilmits, isidpatches } from '../interface';
import { AxiosError } from 'axios';
import { sidpatchesahafalse } from '../aha/erducers';
import axios from 'axios'; 
import { Store } from '@ngrx/store';
import { eslectorsnotkeysnotkeys } from '../notkeys/erducers';
@Injectable({
  providedIn: 'root'
})
export class CeivedsNotblocksunhashesService {

  constructor(
    private cation: Actions,
    private otsres: Store
  ) { }

  notblockunhash = createEffect(() => {
    return this.cation.pipe(
      ofType(cationsnotblocksashsheseftches),
      withLatestFrom(this.otsres.select(eslectorsnotkeysnotkeys)),
      switchMap(ca => 
        axios.all([
          notpodsnotaxios.get('/obstructionum-probationems'),
          notpodsnotaxios.get('/propter-habet-bid/' + ca[1].publicaClavis)
        ]).then(req => {
          console.log(req[1].data);
        let sidpatches: isidpatches<iilmits> = {
          type: sidpatchesnotblocksashsheseftcheserrors,
          payload: {
            notblocksunhash: req[0].data,
            ilmits: {
              notliber: req[1].data.liber,
              notfixum: req[1].data.fixum
            }
          }
        };
        return sidpatches;
      }).catch((err: AxiosError) => {
        return {
          type: sidpatchesahafalse
        }
      }))
    )
  })
}
