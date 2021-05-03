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

  refreshCssColor(faction: string): void {
    const titleFaction = document.getElementById('title-planet-' + faction);
    titleFaction.style.color = '#D6D61CFF';
  }

  // tslint:disable-next-line:typedef
  selectedFactionByGuid(factionGuid: Guid){
    this.selectGuidFaction = factionGuid.toString();
    console.log(this.selectGuidFaction);
    // const image = document.getElementById('imageId');
    // image.style.display = '';
    // const factionImage = document.getElementById('factionImage');
    // factionImage.style.position = 'absolute';
    // image.style.zIndex = '1';
    // factionImage.style.opacity = '0.1';
    // image.style.height = '100px';
  }
  // tslint:disable-next-line:typedef
  // offSelected(){
  //   const image = document.getElementById('imageId');
  //   image.style.display = 'none';
  //   const factionImage = document.getElementById('factionImage');
  //   factionImage.style.opacity = '1';
  //   factionImage.style.position = '';
  // }
}
