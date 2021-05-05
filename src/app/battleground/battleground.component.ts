import { Component, OnInit } from '@angular/core';
import {PlanetService} from '../../services/planet.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Guid} from 'guid-typescript';
import {Planet} from '../../models/planet';



@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {

  arrayPlanet: Array<Planet>;
  planet: string;
  route: Params;
  guids: Params;
  guidPlanet: Guid;
  guidStarship: Guid;

  constructor(private planetService: PlanetService, route: ActivatedRoute) {
    this.route = route.params.subscribe(value => {
      this.guids = value;
    });
    console.log(this.guids);
    this.guidPlanet = Guid.parse(this.guids.planetGuid);
    this.guidStarship = Guid.parse(this.guids.starshipGuid);
    console.log(this.guidPlanet);
    console.log(this.guidStarship);
    this.arrayPlanet = new Array<Planet>();
  }

  ngOnInit(): void {

  }
}
