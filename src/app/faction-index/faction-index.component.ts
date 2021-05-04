import { Component, OnInit } from '@angular/core';
import {Faction} from '../../models/faction';
import {FactionService} from '../../Services/faction.service';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'app-faction-index',
  templateUrl: './faction-index.component.html',
  styleUrls: ['./faction-index.component.scss']
})
export class FactionIndexComponent implements OnInit {

  arrayFaction: Array<Faction>;
  selectGuidFaction: string;

  constructor(private factionService: FactionService) {
    this.arrayFaction = new Array<Faction>();
  }

  ngOnInit(): void {
    this.arrayFaction = this.factionService.getArrayFaction();
  }

  setCssByFaction(color: string, faction: string): void {
    const titleFaction = document.getElementById('title-planet-' + faction);
    titleFaction.style.color = color;
  }

  blockCssFaction(name: string, color: string): void{    
    const newFaction = document.getElementById('title-faction-' + name);    
    const image = document.getElementById('img-faction-' + name );
    newFaction.style.color = color;
    
    image.style.filter = 'invert(100%)'
    
    
    
  }

  refreshCssColor(faction: string): void {
    const titleFaction = document.getElementById('title-planet-' + faction);
    titleFaction.style.color = '#D6D61CFF';
  }

  selectedFactionByGuid(factionGuid: Guid, color: string, name:string): void{
    this.selectGuidFaction = factionGuid.toString();
    this.blockCssFaction(name, color);
    console.log(this.selectGuidFaction);
    console.log(color);
    
  }
}
