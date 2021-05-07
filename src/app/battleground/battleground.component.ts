import { Component, OnInit } from '@angular/core';
import {Planet} from '../../models/planet';
import {Starship} from '../../models/starship';
import {PlanetService} from '../../services/planet.service';
import {ActivatedRoute} from '@angular/router';
import {StarshipService} from '../../services/starship.service';
import {UtilityService} from '../../services/utility.service';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {

  planetId: number;
  starshipId: number;
  foeStarshipId: number;
  planet: Planet;
  arrayStarship: Array<Starship>;
  playerStarship: Starship;
  foeStarship: Starship;

  constructor(
    private planetService: PlanetService,
    private activatedRoute: ActivatedRoute,
    private starshipService: StarshipService,
    private utilityService: UtilityService
  ) {
    this.arrayStarship = new Array<Starship>();
  }

  ngOnInit(): void {
    this.arrayStarship = this.starshipService.getArrayStarship();
    this.activatedRoute.params.subscribe((value) => {
      this.planetId = value.planetId;
      this.starshipId = value.starshipId;
    });
    console.log(this.starshipService);
    this.playerStarship = this.starshipService.getStarshipById(this.starshipId);
    this.planet = this.planetService.getAbstractAttributesById(this.planetId);
    const randomNumber = this.utilityService.getRandomFromMinMax(0, this.arrayStarship.length);
    this.foeStarship = this.arrayStarship[randomNumber];
  }

}
