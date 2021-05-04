import { Component, OnInit } from '@angular/core';
import {PlanetService} from '../../services/planet.service';



@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {
  planet: string;

  constructor(private planetService: PlanetService) {
    console.log(this.planet);
  }

  ngOnInit(): void {

  }

}
