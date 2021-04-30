import { Component, OnInit } from '@angular/core';
import {Faction} from '../../models/faction';
import {FactionService} from '../../Services/faction.service';

@Component({
  selector: 'app-faction-index',
  templateUrl: './faction-index.component.html',
  styleUrls: ['./faction-index.component.scss']
})
export class FactionIndexComponent implements OnInit {
  arrayFaction: Array<Faction>;
  constructor(private factionService: FactionService) {
    this.arrayFaction = new Array<Faction>();
  }

  ngOnInit(): void {
    this.arrayFaction = this.factionService.getArrayFaction();
  }

  setCssByFaction(color: string, faction: string): void {
    const titleFaction = document.getElementById('title-planet-' + faction);
    titleFaction.style.color = color;
    // Penser à remettre la couleur initiale du précédent
  }

  refreshCssColor(faction: string): void {
    const titleFaction = document.getElementById('title-planet-' + faction);
    titleFaction.style.color = '#D6D61CFF';
  }
}
