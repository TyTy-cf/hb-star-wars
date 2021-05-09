import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Weapon} from '../../models/weapon';
import {Starship} from '../../models/starship';

@Component({
  selector: 'app-card-starship',
  templateUrl: './card-starship.component.html',
  styleUrls: ['./card-starship.component.scss']
})
export class CardStarshipComponent implements OnInit, OnChanges {

  @Input()
  starship: Starship;
  audioPew: HTMLAudioElement;
  currentHitPoint: number;

  constructor() {
    this.audioPew = new Audio();
  }

  ngOnInit(): void {
    this.currentHitPoint = this.starship.hitPoint;
    this.audioPew.src = Weapon.urlPewPew;
    this.audioPew.volume = 0.2;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  pewPewPew(): void {
    this.audioPew.load();
    // Charger la chanson et la jouer
    this.audioPew.play();
  }

}
