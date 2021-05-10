import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Weapon} from '../../models/weapon';
import {Starship} from '../../models/starship';
import {IStarshipShooter} from '../../models/i-starship-shooter';

@Component({
  selector: 'app-card-starship',
  templateUrl: './card-starship.component.html',
  styleUrls: ['./card-starship.component.scss']
})
export class CardStarshipComponent implements OnInit, OnChanges {

  @Input()
  starship: Starship;

  @Input()
  newHitPoint: number;

  @Output()
  shootingStarship: EventEmitter<IStarshipShooter>;

  audioPew: HTMLAudioElement;
  maxHitPoint: number;

  constructor() {
    this.audioPew = new Audio();
    this.shootingStarship = new EventEmitter<IStarshipShooter>();
  }

  ngOnInit(): void {
    this.maxHitPoint = this.starship.hitPoint;
    this.audioPew.src = Weapon.urlPewPew;
    this.audioPew.volume = 0.2;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const oldHitPoint = changes.newHitPoint.previousValue;
    const newHitPoint = changes.newHitPoint.currentValue;
    if (oldHitPoint !== newHitPoint) {
      this.starship.hitPoint = newHitPoint;
      if (this.starship.hitPoint <= 0) {
        this.starship.pathImage = 'assets/images/starship/blast.png';
      }
    }
  }

  pewPewPew(weapon: Weapon): void {
    this.audioPew.load();
    // Charger la chanson et la jouer
    this.audioPew.play();
    const eventShooter = {
      starship: this.starship,
      weapon
    };
    this.shootingStarship.emit(eventShooter);
  }

}
