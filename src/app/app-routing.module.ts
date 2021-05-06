import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanetFormComponent} from './planet-form/planet-form.component';

const routes: Routes = [
  {path: 'planetForm', component: PlanetFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
