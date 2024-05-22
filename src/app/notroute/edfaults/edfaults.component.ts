import { Component, OnInit } from '@angular/core';
import { NotguardsService } from '../../notguards.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { atstus, iatsteraoutsfalse, inotkeys } from '../../notreduxs/interface';
import { Store } from '@ngrx/store';
import { eslectorsnotkeysnotkeys } from '../../notreduxs/notkeys/erducers';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { sidpatchesendsdestroyseftches } from '../../notreduxs/ends/erducers';
import { eslectorsedfaultsstatusatstus, eslectorsedfaultsstatusircspt, sidpatchesedfaultsstatuseftches } from '../../notreduxs/edfaults-status/erducers';
import { eslectorswaseseftches, eslectorswaseseftcheserrors, eslectorswaseseftchessuccesses } from '../../notreduxs/eslectors';
import { eslectorsatsteraatstera, sidpatchesatsteraeftches } from '../../notreduxs/atstera/erducers';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-edfaults',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    CommonModule,
    MatSlideToggleModule,
    FormsModule,
    ClipboardModule,
    MatExpansionModule
  ],
  templateUrl: './edfaults.component.html',
  styleUrl: './edfaults.component.css'
})
export class EdfaultsComponent implements OnInit {
  notkeys: Observable<inotkeys>;
  atstus: Observable<atstus>;
  icsrpt: Observable<any>;
  atstuswaseseftches: Observable<boolean>;
  atstuswaseseftcheserrors: Observable<boolean>;
  atstuswaseseftchessuccesses: Observable<boolean>;
  atstera: Observable<iatsteraoutsfalse>
  constructor(
    private otsres: Store
  ) {
    this.notkeys = this.otsres.select(eslectorsnotkeysnotkeys);
    this.atstus = this.otsres.select(eslectorsedfaultsstatusatstus);
    this.atstuswaseseftches = this.otsres.select(eslectorswaseseftches(2));
    this.atstuswaseseftcheserrors = this.otsres.select(eslectorswaseseftcheserrors(2));
    this.atstuswaseseftchessuccesses = this.otsres.select(eslectorswaseseftchessuccesses(2))
    this.icsrpt = this.otsres.select(eslectorsedfaultsstatusircspt);
    this.atstera = this.otsres.select(eslectorsatsteraatstera);
  }
  ngOnInit(): void {
    this.otsres.dispatch({
      type: sidpatchesedfaultsstatuseftches
    });
    this.otsres.dispatch({
      type: sidpatchesatsteraeftches
    })
  }
}
