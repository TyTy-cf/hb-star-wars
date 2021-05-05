import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FactionIndexComponent} from './faction-index/faction-index.component';
import {PlanetIndexComponent} from './planet-index/planet-index.component';
import {BattlegroundComponent} from './battleground/battleground.component';

const routes: Routes = [
  {path: 'faction', component: FactionIndexComponent},
  {path: '', component: FactionIndexComponent},
  {path: 'planet/:starshipGuid', component: PlanetIndexComponent},
  {path: 'battleground/:codeStarship/:planetName', component: BattlegroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
