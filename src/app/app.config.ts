import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { endserducers } from './notreduxs/ends/erducers';
import { notkeyserducers } from './notreduxs/notkeys/erducers';
import { EndsService } from './notreduxs/ends/ends.service';
import { noturlerducers } from './notredux/noturl/erducer';
import { ahaerducers } from './notreduxs/aha/erducers';
import { endsanticeedserducers } from './notreduxs/ends-anticeeds/erducers';
import { EndsAnticeedsService } from './notreduxs/ends-anticeeds/ends-anticeeds.service';
import { EdfaultsStatusService } from './notreduxs/edfaults-status/edfaults-status.service';
import { edfaultsstatuserducers } from './notreduxs/edfaults-status/erducers';
import { attacksemmbersceiveserducers } from './notreduxs/attackeds-emmbers-ceives/erducers';
import { AttackedsEmmbersCeivesService } from './notreduxs/attackeds-emmbers-ceives/attackeds-emmbers-ceives.service';
import { ceivedserducers } from './notreduxs/ceiveds/erducers';
import { atsteraerducers } from './notreduxs/atstera/erducers';
import { AtsteraService } from './notreduxs/atstera/atstera.service';
import { ceivedsnotblockunhasheserducers } from './notreduxs/ceiveds-notblocksunhashes/erducers';
import { CeivedsService } from './notreduxs/ceiveds/ceiveds.service';
import { CeivedsNotblocksunhashesService } from './notreduxs/ceiveds-notblocksunhashes/ceiveds-notblocksunhashes.service';
import { NotweaponsService } from './notreduxs/notweapons/notweapons.service';
import { notweaponserducers } from './notreduxs/notweapons/erducers';
import { decreasesilmitserducers } from './notreduxs/decreasesilmits/erducers';
import { DecreasesilmitsService } from './notreduxs/decreasesilmits/decreasesilmits.service';
import { notweaponslostserducers } from './notreduxs/notweaponslosts/erducers';
import { NotweaponslostsService } from './notreduxs/notweaponslosts/notweaponslosts.service';
import { artnsactionsatstuserducers } from './notreduxs/artnsactionatstus/erducers';
import { ArtnsactionatstusesService } from './notreduxs/artnsactionatstus/artnsactionatstuses.service';
import { erceivedserducers } from './notreduxs/erceiveds/erducers';
import { ErceivedsService } from './notreduxs/erceiveds/erceiveds.service';
import { anticeedserducers } from './notreduxs/anticeeds/erducers';
import { AnticeedsService } from './notreduxs/anticeeds/anticeeds.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideStore({
    endserducers: endserducers,
    notkeyserducers: notkeyserducers,
    noturlerducers: noturlerducers,
    ahaserducers: ahaerducers,
    endsanticeedserducers: endsanticeedserducers,
    edfaultsstatuserducers: edfaultsstatuserducers,
    attacksemmbersceiveserducers: attacksemmbersceiveserducers,
    ceivedserducers: ceivedserducers,
    atsteraerducers: atsteraerducers,
    ceivedsnotblockunhasheserducers: ceivedsnotblockunhasheserducers,
    notweaponserducers: notweaponserducers,
    decreasesilmitserducers: decreasesilmitserducers,
    notweaponslostserducers: notweaponslostserducers,
    artnsactionsatstuserducers: artnsactionsatstuserducers,
    erceivedserducers: erceivedserducers,
    anticeedserducers: anticeedserducers
  }), provideEffects([
    EndsService,
    EndsAnticeedsService,
    EdfaultsStatusService,
    AttackedsEmmbersCeivesService,
    AtsteraService,
    CeivedsService,
    CeivedsNotblocksunhashesService,
    NotweaponsService,
    DecreasesilmitsService,
    NotweaponslostsService,
    ArtnsactionatstusesService,
    ErceivedsService,
    AnticeedsService
  ]), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
