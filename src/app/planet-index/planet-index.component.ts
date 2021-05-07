import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Planet} from '../../models/planet';
import {Starship} from '../../models/starship';
import {PlanetService} from '../../services/planet.service';
import {ActivatedRoute} from '@angular/router';
import {StarshipService} from '../../services/starship.service';

@Component({
  selector: 'app-planet-index',
  templateUrl: './planet-index.component.html',
  styleUrls: ['./planet-index.component.scss']
})
export class PlanetIndexComponent implements OnInit, OnChanges {

  arrayPlanet: Array<Planet>;
  starshipId: number;

  constructor(
    private planetService: PlanetService,
    private activatedRoute: ActivatedRoute
  ) {
    this.arrayPlanet = new Array<Planet>();
  }

  ngOnInit(): void {
    this.arrayPlanet = this.planetService.getArrayAbstractAttributes();
    this.activatedRoute.params.subscribe((params) => {
      this.starshipId = params.starshipId;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const oldNameFaction = changes.guidPlanets.previousValue;
    const newNameFaction = changes.guidPlanets.currentValue;
    if (oldNameFaction !== newNameFaction) {
      // this.planet = this.planetService.getAbstractAttributesById(Guid.parse(this.guidPlanets));
    }
  }
}
