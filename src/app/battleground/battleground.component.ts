import { Component, OnInit } from '@angular/core';
import {PlanetService} from '../../services/planet.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Guid} from 'guid-typescript';
import {StarshipService} from '../../services/starship.service';
import {Starship} from '../../models/starship';
import {Planet} from '../../models/planet';
import {Weapon} from '../../models/weapon';


@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {

  planet: Planet;
  namePlanet: string;
  codeStarship: string;
  battleStarship: Starship;
  planetImage: string;
  arrayStarship: Array<Starship>;
  randomeStarship: Starship;
  audioPew: HTMLAudioElement;

  constructor(private planetService: PlanetService, private activatedRoute: ActivatedRoute, private starshipService: StarshipService) {
    this.arrayStarship = new Array<Starship>();
    this.audioPew = new Audio();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.namePlanet = value.planetName;
      this.codeStarship = value.codeStarship;
      console.log(this.starshipService);
      console.log(this.namePlanet);
      console.log(this.codeStarship);
      this.battleStarship = this.starshipService.getStarshipByCode(this.codeStarship);
      this.planet = this.planetService.getPlanetByName(this.namePlanet);
      this.planetImage = this.planet.pathImage;
      this.arrayStarship = this.starshipService.getArrayStarship();
      console.log(this.arrayStarship);
      this.randomeStarship = this.arrayStarship[this.getRandomStarship(0, (this.arrayStarship.length ))];
      console.log(this.randomeStarship);
    });
  }
  getRandomStarship(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min) + min);
  }
  pewPewPew(): void{
    this.audioPew.src = Weapon.urlPewPew;
    this.audioPew.volume = 0.1;
    // Charger la chanson et la jouer
    this.audioPew.load();
    this.audioPew.play();
  }
}
