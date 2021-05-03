import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StarshipService} from '../../Services/starship.service';
import {Starship} from '../../models/starship';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'app-starship-faction',
  templateUrl: './starship-faction.component.html',
  styleUrls: ['./starship-faction.component.scss'],
})
export class StarshipFactionComponent implements OnInit, OnChanges {

  @Input()
  guidFaction: string;
  starship: Array<Starship>;

  constructor(private starshipService: StarshipService) {
    this.starship = new Array<Starship>();
  }

  ngOnInit(): void {
    console.log(this.starshipService);
  }

  ngOnChanges(changes: SimpleChanges): void {
      const oldNameFaction = changes.guidFaction.previousValue;
      const newNameFaction = changes.guidFaction.currentValue;
      if (oldNameFaction !== newNameFaction) {
        this.starship = this.starshipService.getStarshipByFactionGuid(Guid.parse(this.guidFaction));
      }
  }
}
