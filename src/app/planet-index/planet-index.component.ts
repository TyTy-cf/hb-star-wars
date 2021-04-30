import { Component, OnInit } from '@angular/core';
import {Planet} from '../../models/planet';
import {PlanetService} from '../../Services/planet.service';

@Component({
  selector: 'app-planet-index',
  templateUrl: './planet-index.component.html',
  styleUrls: ['./planet-index.component.scss']
})
export class PlanetIndexComponent implements OnInit {
  arrayPlanet: Array<Planet>;

  constructor(private planetService: PlanetService) {
    this.arrayPlanet = new Array<Planet>();
  }

  ngOnInit(): void {
    this.arrayPlanet = this.planetService.getArrayAbstractAttributes();
  }

}
