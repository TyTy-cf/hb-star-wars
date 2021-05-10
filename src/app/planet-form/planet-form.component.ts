import { Component, OnInit } from '@angular/core';
import {Planet} from '../../models/planet';
import {PlanetService} from '../../services/planet.service';

@Component({
  selector: 'app-planet-form',
  templateUrl: './planet-form.component.html',
  styleUrls: ['./planet-form.component.scss']
})
export class PlanetFormComponent {

  //  Formulaire par le template

  planet: Planet;
  submitted: boolean;

  constructor(private planetService: PlanetService) {
    this.initialForm();
  }

  newPlanet(): void {
    this.initialForm();
  }

  initialForm(): void {
    // Instanciation d'une planète : nécessaire sinon l'objet est undefined
    this.planet = new Planet();
    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.planet);
    console.log(this.planetService.getArrayAbstractAttributes().length);
    this.planetService.addAbstractAttributes(this.planet);
    console.log(this.planetService.getArrayAbstractAttributes().length);
  }
}
