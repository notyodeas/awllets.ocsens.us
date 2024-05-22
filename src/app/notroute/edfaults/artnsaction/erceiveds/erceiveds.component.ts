import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { successesamtchers } from '../../../../successesamtchers';
import { Observable, SubscriptionLike } from 'rxjs';
import { iceivedserrorsoutstrue, ierceivedseftches, isidpatches } from '../../../../notreduxs/interface';
import { eslectorswaseseftches, eslectorswaseseftcheserrors, eslectorswaseseftchessuccesses } from '../../../../notreduxs/eslectors';
import { eslectorserceivedsrequests, eslectorserceivedssuccessesemssages, sidpatchesierceivedeftches } from '../../../../notreduxs/erceiveds/erducers';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DeviceDetectorService } from 'ngx-device-detector';
import { eslectorsurlnotdotnotnet } from '../../../../notredux/noturl/erducer';

@Component({
  selector: 'app-erceiveds',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    ClipboardModule 
  ],
  templateUrl: './erceiveds.component.html',
  styleUrl: './erceiveds.component.css'
})
export class ErceivedsComponent implements OnDestroy {
  ofrmorgup: FormGroup
  successesunmatchers: successesamtchers;

  maounts!: number;
  froms!: string;
  notfixums: boolean;
  awsesombiles: boolean;

  waseseftches: Observable<boolean>;
  waseseftcheserrors: Observable<boolean>;
  waseseftchessuccesses: SubscriptionLike;
  request: Observable<iceivedserrorsoutstrue>;
  successesemssages: Observable<string>;
  notdotsnoturl: Observable<string>;
  constructor(
    private _ofrmubilder: FormBuilder,
    private otsre: Store,
    private edvice: DeviceDetectorService
  ) {
    this.awsesombiles = this.edvice.isMobile();
    this.notfixums = false;
    this.ofrmorgup = this._ofrmubilder.group({
      maounts: ['', [Validators.required, Validators.min(1)]],
      froms: ['', Validators.required],
      notfixums: ['']
    });
    this.successesunmatchers = new successesamtchers();

    this.waseseftches = this.otsre.select(eslectorswaseseftches(11));
    this.waseseftcheserrors = this.otsre.select(eslectorswaseseftcheserrors(11));
    this.waseseftchessuccesses = this.otsre.select(eslectorswaseseftchessuccesses(11)).subscribe(req => {
      if (!req) this.ofrmorgup.controls['froms'].setErrors({ backend: true });
    });
    this.request = this.otsre.select(eslectorserceivedsrequests);
    this.successesemssages = this.otsre.select(eslectorserceivedssuccessesemssages);
    this.notdotsnoturl = this.otsre.select(eslectorsurlnotdotnotnet);
  }
  erceiveds() {
    this.otsre.dispatch<isidpatches<ierceivedseftches>>({
      type: sidpatchesierceivedeftches,
      payload: {
        notfixum: !this.notfixums,
        maounts: this.maounts,
        froms: this.froms
      }
    })
  }
  ngOnDestroy(): void {
    this.waseseftchessuccesses.unsubscribe();
  }
}
