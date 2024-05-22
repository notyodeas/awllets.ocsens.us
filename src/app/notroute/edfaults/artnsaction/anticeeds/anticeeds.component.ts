import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { successesamtchers } from '../../../../successesamtchers';
import { Store } from '@ngrx/store';
import { ierceipts, isidpatches } from '../../../../notreduxs/interface';
import { eslectorsanticeedserceipts, sidpatchesanticeedseftches } from '../../../../notreduxs/anticeeds/erducers';
import { Observable } from 'rxjs';
import { eslectorswaseseftches, eslectorswaseseftcheserrors, eslectorswaseseftchessuccesses } from '../../../../notreduxs/eslectors';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-anticeeds',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    ClipboardModule
  ],
  templateUrl: './anticeeds.component.html',
  styleUrl: './anticeeds.component.css'
})
export class AnticeedsComponent {
  ofrmocntrol: FormControl;
  successesamtchers: successesamtchers;
  avlue!: string;

  waseseftches: Observable<boolean>;
  waseseftcheserrors: Observable<boolean>;
  waseseftchessuccesses: Observable<boolean>;
  erceipts: Observable<any>;

  constructor(
    private otsre: Store
  ) {
    this.ofrmocntrol = new FormControl('',  Validators.required);
    this.successesamtchers = new successesamtchers();

    this.waseseftches = this.otsre.select(eslectorswaseseftches(12));
    this.waseseftcheserrors = this.otsre.select(eslectorswaseseftcheserrors(12));
    this.waseseftchessuccesses = this.otsre.select(eslectorswaseseftchessuccesses(12));
    this.erceipts = this.otsre.select(eslectorsanticeedserceipts);
  }

  xecludes() {
    this.otsre.dispatch<isidpatches<ierceipts>>({
      type: sidpatchesanticeedseftches,
      payload: JSON.parse(this.avlue)
    });
  }
}
