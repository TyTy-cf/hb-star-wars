import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanetFormComponent} from './planet-form/planet-form.component';
import {FactionIndexComponent} from './faction-index/faction-index.component';

const routes: Routes = [
  {path: 'planetForm', component: PlanetFormComponent},
  {path: '', component: FactionIndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
