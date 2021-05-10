import { Component, OnInit } from '@angular/core';
import {Planet} from '../../models/planet';
import {Starship} from '../../models/starship';
import {PlanetService} from '../../services/planet.service';
import {ActivatedRoute} from '@angular/router';
import {StarshipService} from '../../services/starship.service';
import {UtilityService} from '../../services/utility.service';
import {IStarshipShooter} from '../../models/i-starship-shooter';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {

  planet: Planet;
  arrayStarship: Array<Starship>;
  playerStarship: Starship;
  foeStarship: Starship;

  iStarshipShooter: IStarshipShooter;
  foeNewHitPoint: number;
  playerNewHitPoint: number;

  audioBegin: HTMLAudioElement;

  constructor(
    private planetService: PlanetService,
    private activatedRoute: ActivatedRoute,
    private starshipService: StarshipService,
    private utilityService: UtilityService
  ) {
    this.arrayStarship = new Array<Starship>();
    this.audioBegin = new Audio();
  }

  ngOnInit(): void {
    this.audioBegin.src = 'assets/sound/theme/hello-there.mp3';
    this.audioBegin.volume = 0.2;
    this.audioBegin.load();
    this.audioBegin.play();
    this.arrayStarship = this.starshipService.getArrayStarship();
    this.activatedRoute.params.subscribe((value) => {
      this.playerStarship = this.starshipService.getStarshipById(value.starshipId);
      this.planet = this.planetService.getAbstractAttributesById(value.planetId);
      const randomNumber = this.utilityService.getRandomFromMinMax(0, this.arrayStarship.length);
      // Duplique le vaisseau au cas où l'on tombe sur même : une nouvelle entité est instanciée
      this.foeStarship = new Starship();
      this.foeStarship.copyStarship(this.arrayStarship[randomNumber]);
    });
  }

  setLastStarshipShooter(iStarshipShooter: IStarshipShooter): void {
    this.iStarshipShooter = iStarshipShooter;
    // On vérifie qui doit perdre des PV et on récupère les nouveaux PV du vaisseau
    let reductionShielding = this.iStarshipShooter.weapon.damage - this.playerStarship.shielding;
    if (this.iStarshipShooter.starship.id === this.playerStarship.id) {
      reductionShielding = this.iStarshipShooter.weapon.damage - this.foeStarship.shielding;
      this.foeNewHitPoint = this.foeStarship.hitPoint - reductionShielding;
    } else {
      this.playerNewHitPoint = this.playerStarship.hitPoint - reductionShielding;
    }
  }

}
