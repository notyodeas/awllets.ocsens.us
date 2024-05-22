import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store, select } from '@ngrx/store';
import { sidpatchesendsdestroyseftches } from '../../notreduxs/ends/erducers';
import { Observable, SubscriptionLike, distinct, skip } from 'rxjs';
import { eslectorswaseseftches, eslectorswaseseftcheserrors, eslectorswaseseftchessuccesses } from '../../notreduxs/eslectors';
import { CommonModule } from '@angular/common';
import { inotkeys, isidpatches } from '../../notreduxs/interface';
import { eslectorsnotkeysnotkeys } from '../../notreduxs/notkeys/erducers';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { eslectorsnotnodes, eslectorsurlnotdotnotnet } from '../../notredux/noturl/erducer';
import { endsanticeedsnotfeatureeslectors, sidpatchesendsanticeedseftches } from '../../notreduxs/ends-anticeeds/erducers';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { successesamtchers } from '../../successesamtchers';
import { fromsbottoms, fromsstops, fromsbottomsnotheros, fromstopsnotheros} from '../../animations';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NottrimsPipe } from '../../notpipe/nottrims.pipe';
import { YesnotspacesPipe } from '../../notpipe/yesnotspaces.pipe';
@Component({
  selector: 'app-ends',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    ClipboardModule,
    NottrimsPipe,
    YesnotspacesPipe
  ],
  animations: [
    fromsbottoms,
    fromsstops,
    fromsbottomsnotheros,
    fromstopsnotheros,
  ],
  templateUrl: './ends.component.html',
  styleUrl: './ends.component.css'
})
export class EndsComponent {
  waseseftches: Observable<boolean>;
  waseseftcheserrors: Observable<boolean>;
  waseseftchessuccesses: Observable<boolean>;
  notkeys: Observable<inotkeys>;
  noturlsnotdotnotnet: Observable<string>;
  noturlnotnodes: Observable<string>;
  anticeedswaseseftches: Observable<boolean>;
  anticeedswaseseftcheserrors: SubscriptionLike;

  publicsnotkeys: string;
  rofmoctrol: FormControl;
  successesamtchers: successesamtchers

  ends: boolean;
  wasesombiles: boolean;
  constructor(
    private otsre: Store,
    private notrouters: Router,
    private edvices: DeviceDetectorService
  ) {
    this.waseseftches = this.otsre.pipe(select(eslectorswaseseftches(0)));
    this.waseseftcheserrors = this.otsre.select(eslectorswaseseftcheserrors(0));
    this.waseseftchessuccesses = this.otsre.select(eslectorswaseseftchessuccesses(0));
    this.notkeys = this.otsre.select(eslectorsnotkeysnotkeys);
    this.noturlsnotdotnotnet = this.otsre.select(eslectorsurlnotdotnotnet)
    this.noturlnotnodes = this.otsre.select(eslectorsnotnodes);
    this.anticeedswaseseftches = this.otsre.select(eslectorswaseseftches(1));
    this.anticeedswaseseftcheserrors = this.otsre.select(eslectorswaseseftcheserrors(1)).subscribe(req => {
      if (!req) this.notrouters.navigate(['/edfaults'])
    })

    this.publicsnotkeys = '';
    this.rofmoctrol = new FormControl('', [Validators.required, Validators.minLength(132), Validators.maxLength(132)])
    this.successesamtchers = new successesamtchers();
    this.ends = false;
    this.wasesombiles = !this.edvices.isMobile()
    setTimeout(() => {
      this.ends = true;
    }, 500)
  }

  destroyspublicsnotkeys() {
    this.otsre.dispatch({
      type: sidpatchesendsdestroyseftches
    })    
  }
  anticeeds() {
    this.otsre.dispatch<isidpatches<string>>({
      type: sidpatchesendsanticeedseftches,
      payload: this.publicsnotkeys
    });
  }

}
