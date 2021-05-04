import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PlanetIndexComponent} from './planet-index/planet-index.component';
import {WeaponService} from '../Services/weapon.service';
import {StarshipService} from '../Services/starship.service';
import {FactionService} from '../Services/faction.service';
import { FactionIndexComponent } from './faction-index/faction-index.component';
import { StarshipFactionComponent } from './starship-faction/starship-faction.component';
import { StarshipCardComponent } from './starship-card/starship-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetIndexComponent,
    FactionIndexComponent,
    StarshipFactionComponent,
    StarshipCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WeaponService,
    FactionService,
    StarshipService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
