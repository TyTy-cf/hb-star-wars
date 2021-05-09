import {Component, OnInit} from '@angular/core';
import {Planet} from '../../models/planet';
import {PlanetService} from '../../services/planet.service';
import {ActivatedRoute} from '@angular/router';
import {StarshipService} from '../../services/starship.service';

@Component({
  selector: 'app-planet-index',
  templateUrl: './planet-index.component.html',
  styleUrls: ['./planet-index.component.scss']
})
export class PlanetIndexComponent implements OnInit {

  arrayPlanet: Array<Planet>;
  starshipId: string;

  constructor(
    private planetService: PlanetService,
    private activatedRoute: ActivatedRoute,
    private starshipService: StarshipService
  ) {
    this.arrayPlanet = new Array<Planet>();
  }

  ngOnInit(): void {
    this.arrayPlanet = this.planetService.getArrayAbstractAttributes();
    this.activatedRoute.params.subscribe((params) => {
      this.starshipId = params.starshipId;
      console.log(this.starshipService.getStarshipById(this.starshipId));
    });
  }

}
