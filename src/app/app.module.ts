import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PlanetIndexComponent} from './planet-index/planet-index.component';
import {WeaponService} from '../Services/weapon.service';
import {StarshipService} from '../Services/starship.service';
import {FactionService} from '../Services/faction.service';
import { FactionIndexComponent } from './faction-index/faction-index.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetIndexComponent,
    FactionIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WeaponService,
    FactionService,
    {
      provide: StarshipService, useValue : [WeaponService, FactionService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
