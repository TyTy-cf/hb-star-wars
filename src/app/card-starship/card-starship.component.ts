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

  constructor() {
    this.audioPew = new Audio();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  pewPewPew(color: string): void{
    this.audioPew.load();
    this.audioPew.src = Weapon.urlPewPew;
    this.audioPew.volume = 1;
    // Charger la chanson et la jouer
    this.audioPew.play();
    const light = document.getElementById('pewLight');
    light.style.backgroundColor = color;
    light.style.border = 'solid 2px' + color ;
  }

}
