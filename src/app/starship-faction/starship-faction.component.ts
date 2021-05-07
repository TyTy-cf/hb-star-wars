import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Starship} from '../../models/starship';
import {StarshipService} from '../../services/starship.service';

@Component({
  selector: 'app-starship-faction',
  templateUrl: './starship-faction.component.html',
  styleUrls: ['./starship-faction.component.scss']
})
export class StarshipFactionComponent implements OnInit, OnChanges {

  @Input()
  idFaction: number;
  starship: Array<Starship>;

  constructor(private starshipService: StarshipService) {
    this.starship = new Array<Starship>();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const oldIdFaction = changes.idFaction.previousValue;
    const newIdFaction = changes.idFaction.currentValue;
    if (oldIdFaction !== newIdFaction) {
      this.starship = this.starshipService.getStarshipByFactionId(this.idFaction);
    }
  }

}
