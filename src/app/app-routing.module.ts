import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanetFormComponent} from './planet-form/planet-form.component';
import {FactionIndexComponent} from './faction-index/faction-index.component';
import {PlanetIndexComponent} from './planet-index/planet-index.component';
import {BattlegroundComponent} from './battleground/battleground.component';

const routes: Routes = [
  {path: 'planetForm', component: PlanetFormComponent},
  {path: '', component: FactionIndexComponent},
  {path: 'planet/:starshipId', component: PlanetIndexComponent},
  {path: 'battleground/:starshipId/:planetId', component: BattlegroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
