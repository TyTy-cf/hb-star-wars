import { Component, OnInit, Input } from '@angular/core';
import {Starship} from '../../models/starship';
import {StarshipService} from '../../services/starship.service';


@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss']
})
export class StarshipCardComponent implements OnInit {
  arrayCards: Array<Starship>;
  @Input()
  guidCard: StarshipCardComponent;

  constructor(private starshipService: StarshipService) {
    this.arrayCards = new Array<Starship>();
  }

  ngOnInit(): void {
  }

}
