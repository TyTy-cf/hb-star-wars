import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WeaponService} from '../services/weapon.service';
import {FactionService} from '../services/faction.service';
import {StarshipService} from '../services/starship.service';

@NgModule({
  declarations: [
    AppComponent
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
