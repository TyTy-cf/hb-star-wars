import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WeaponService} from '../services/weapon.service';
import {FactionService} from '../services/faction.service';
import { PlanetFormComponent } from './planet-form/planet-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FactionIndexComponent } from './faction-index/faction-index.component';
import { StarshipFactionComponent } from './starship-faction/starship-faction.component';
import { PlanetIndexComponent } from './planet-index/planet-index.component';
import { BattlegroundComponent } from './battleground/battleground.component';
import { CardStarshipComponent } from './card-starship/card-starship.component';
import { FormMenuComponent } from './form-menu/form-menu.component';
import { FormFactionComponent } from './form-faction/form-faction.component';
import { FormWeaponComponent } from './form-weapon/form-weapon.component';
import { FormStarshipComponent } from './form-starship/form-starship.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetFormComponent,
    FactionIndexComponent,
    StarshipFactionComponent,
    PlanetIndexComponent,
    BattlegroundComponent,
    CardStarshipComponent,
    FormMenuComponent,
    FormFactionComponent,
    FormWeaponComponent,
    FormStarshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    WeaponService,
    FactionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
