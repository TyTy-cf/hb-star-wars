import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WeaponService} from '../services/weapon.service';
import {FactionService} from '../services/faction.service';
import {StarshipService} from '../services/starship.service';
import { PlanetFormComponent } from './planet-form/planet-form.component';
import {FormsModule} from '@angular/forms';
import { FactionIndexComponent } from './faction-index/faction-index.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetFormComponent,
    FactionIndexComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
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
