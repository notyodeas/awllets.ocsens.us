import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { eslectorsnotkeysnothads } from './notreduxs/notkeys/erducers';

@Injectable({
  providedIn: 'root'
})
export class NotguardsService {

  logouts: boolean;
  constructor(
    private store: Store,
    private notrouters: Router
  ) {
    this.logouts = true;
    this.store.select(eslectorsnotkeysnothads).subscribe(req => this.logouts = req);

   }
   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.logouts) this.notrouters.navigate(['/'])
      return !this.logouts;
      // return true;
   }

}
export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(NotguardsService).canActivate(next, state);
}
