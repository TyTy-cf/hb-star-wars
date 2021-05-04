import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Planet} from '../../models/planet';
import {PlanetService} from '../../Services/planet.service';
import {ActivatedRoute} from '@angular/router';
import {Starship} from '../../models/starship';
import {StarshipService} from '../../Services/starship.service';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'app-planet-index',
  templateUrl: './planet-index.component.html',
  styleUrls: ['./planet-index.component.scss']
})
export class PlanetIndexComponent implements OnInit, OnChanges {
  arrayPlanet: Array<Planet>;
  guidStarship: string;
  starship: Starship;

  @Input()
  guidPlanets: string;
  planet: Planet;
  constructor(private planetService: PlanetService, private activatedRoute: ActivatedRoute, private starshipService: StarshipService) {
    this.arrayPlanet = new Array<Planet>();
  }

  ngOnInit(): void {
    this.arrayPlanet = this.planetService.getArrayAbstractAttributes();
    this.activatedRoute.params.subscribe((params) => {
      this.guidStarship = params.starshipGuid;
      const guid = Guid.parse(this.guidStarship);
      console.log(guid);
      console.log(guid.toString());
      for (const starship of this.starshipService.getArrayStarship()) {
        console.log(starship.guid);
      }
      this.starship = this.starshipService.getStarshipByGuid(guid);
      console.log(this.starship.name);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    const oldNameFaction = changes.guidPlanets.previousValue;
    const newNameFaction = changes.guidPlanets.currentValue;
    if (oldNameFaction !== newNameFaction) {
      this.planet = this.planetService.getAbstractAttributesByGuid(Guid.parse(this.guidPlanets));
    }
  }
}
