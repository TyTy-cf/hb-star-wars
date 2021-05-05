import { Component, OnInit } from '@angular/core';
import {PlanetService} from '../../services/planet.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Guid} from 'guid-typescript';
import {StarshipService} from '../../services/starship.service';


@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {

  planet: string;
  guidPlanet: Guid;
  codeStarship: string;

  constructor(private planetService: PlanetService, private activatedRoute: ActivatedRoute, private starshipService: StarshipService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.guidPlanet = Guid.parse(value.planetGuid);
      this.codeStarship = value.codeStarship;
      console.log(this.starshipService);
      console.log(this.guidPlanet);
      console.log(this.codeStarship);
      this.starshipService.getStarshipByCode(this.codeStarship);
    });
  }
}
