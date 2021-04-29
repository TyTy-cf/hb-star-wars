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
    this.addAbstractAttributes(empire);

    const rebelle = new Faction();
    rebelle.name = 'Rebelle';
    rebelle.pathImage = path + 'rebelle.png';
    this.addAbstractAttributes(rebelle);

    const mandalorien = new Faction();
    mandalorien.name = 'Mandalorien';
    mandalorien.pathImage = path + 'mandalorien.png';
    this.addAbstractAttributes(mandalorien);
  }

}
