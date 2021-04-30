import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FactionIndexComponent} from './faction-index/faction-index.component';
import {PlanetIndexComponent} from './planet-index/planet-index.component';

const routes: Routes = [
  {path: 'faction', component: FactionIndexComponent},
  {path: 'planet', component: PlanetIndexComponent},
  {path: '', component: FactionIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
