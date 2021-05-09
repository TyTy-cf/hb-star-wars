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

  constructor(private planetService: PlanetService) {
    // Instanciation d'une planète : nécessaire sinon l'objet est undefined
    this.planet = new Planet();
  }

  ngOnInit(): void {
  }

  addPlanet(): void {
    // Lorsque l'on clique sur le bouton "Ajouter" on appelle la méthode ajout du service
    // Ce qui revient à push la planet dans le tableau
    this.planetService.addAbstractAttributes(this.planet);
  }
}
