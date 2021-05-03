import { Injectable } from '@angular/core';
import {AbstractAttributesService} from './abstract-attributes.service';
import {Faction} from '../models/faction';

@Injectable({
  providedIn: 'root'
})
export class FactionService extends AbstractAttributesService {

  protected initializeDatas(): void {
    const path = 'assets/images/faction/';

    const empire = new Faction();
    empire.name = 'Empire';
    empire.pathImage = path + 'empire.png';
    empire.color = '#FF0000FF';
    this.addAbstractAttributes(empire);

    const rebelle = new Faction();
    rebelle.name = 'Rebelle';
    rebelle.pathImage = path + 'rebelle.png';
    rebelle.color = '#0000FFFF';
    this.addAbstractAttributes(rebelle);

    const mandalorien = new Faction();
    mandalorien.name = 'Mandalorien';
    mandalorien.pathImage = path + 'mandalorien.png';
    mandalorien.color = '#A9A9A9FF';
    this.addAbstractAttributes(mandalorien);
  }
  public getArrayFaction(): Array<Faction> {
    return (this.getArrayAbstractAttributes() as Array<Faction>);
  }
}