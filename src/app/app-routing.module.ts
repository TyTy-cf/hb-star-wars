import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanetFormComponent} from './planet-form/planet-form.component';
import {FactionIndexComponent} from './faction-index/faction-index.component';
import {PlanetIndexComponent} from './planet-index/planet-index.component';
import {BattlegroundComponent} from './battleground/battleground.component';
import {FormMenuComponent} from './form-menu/form-menu.component';
import {FormFactionComponent} from './form-faction/form-faction.component';
import {FormWeaponComponent} from './form-weapon/form-weapon.component';
import {FormStarshipComponent} from './form-starship/form-starship.component';

const routes: Routes = [
  {path: 'form', component: FormMenuComponent},
  {path: 'planetForm', component: PlanetFormComponent},
  {path: 'factionForm', component: FormFactionComponent},
  {path: 'weaponForm', component: FormWeaponComponent},
  {path: 'starshipForm', component: FormStarshipComponent},
  {path: '', component: FactionIndexComponent},
  {path: 'planet/:starshipId', component: PlanetIndexComponent},
  {path: 'battleground/:starshipId/:planetId', component: BattlegroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
