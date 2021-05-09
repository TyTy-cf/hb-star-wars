import { Component, OnInit } from '@angular/core';
import {Planet} from '../../models/planet';
import {PlanetService} from '../../services/planet.service';

@Component({
  selector: 'app-planet-form',
  templateUrl: './planet-form.component.html',
  styleUrls: ['./planet-form.component.scss']
})
export class PlanetFormComponent implements OnInit {

  planet: Planet;
  submitted: boolean;

  constructor(private planetService: PlanetService) {
    // Instanciation d'une planète : nécessaire sinon l'objet est undefined
    this.planet = new Planet();
    this.submitted = false;
  }

  ngOnInit(): void {
  }

  newPlanet(): void {
    this.submitted = false;
    this.planet = new Planet();
  }

  onSubmit(): void {
    this.submitted = true;
    this.planetService.addAbstractAttributes(this.planet);
  }
}
