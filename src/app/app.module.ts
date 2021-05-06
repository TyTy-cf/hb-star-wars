import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PlanetIndexComponent} from './planet-index/planet-index.component';
import {WeaponService} from '../Services/weapon.service';
import {FactionService} from '../Services/faction.service';
import { FactionIndexComponent } from './faction-index/faction-index.component';
import { StarshipFactionComponent } from './starship-faction/starship-faction.component';
import { StarshipCardComponent } from './starship-card/starship-card.component';
import { BattlegroundComponent } from './battleground/battleground.component';
import { NgbdProgressbarBasicComponent } from './ngbd-progressbar-basic/ngbd-progressbar-basic.component';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PlanetIndexComponent,
    FactionIndexComponent,
    StarshipFactionComponent,
    StarshipCardComponent,
    BattlegroundComponent,
    NgbdProgressbarBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbProgressbarModule
  ],
  providers: [
    WeaponService,
    FactionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
