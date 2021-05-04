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
  color: string;
  factionMere: string;
  oldImageSelect: string;

  constructor(private factionService: FactionService) {
    this.arrayFaction = new Array<Faction>();
  }

  ngOnInit(): void {
    this.arrayFaction = this.factionService.getArrayFaction();
    this.oldImageSelect = '';
  }

  invertColorFaction(name: string): void{
    this.factionMere = name;
    const newImageSelect = 'img-faction-' + name;
    const newImage = document.getElementById('img-faction-' + name).style.filter = 'invert(100%)';
    if (this.oldImageSelect !== newImageSelect){
        const oldImage = document.getElementById(this.oldImageSelect);
        if (oldImage !== null) {
        oldImage.style.filter = '';
        }
        this.oldImageSelect = newImageSelect;
    }
  }

  selectedFactionByGuid(factionGuid: Guid, color: string, name: string): void{
    this.selectGuidFaction = factionGuid.toString();
    this.invertColorFaction(name);
    console.log(this.selectGuidFaction);
    console.log(color);
  }
}

