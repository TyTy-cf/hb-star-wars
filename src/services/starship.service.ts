import { Injectable } from '@angular/core';
import {AbstractAttributesService} from './abstract-attributes.service';
import {Starship} from '../models/starship';
import {Guid} from 'guid-typescript';
import {FactionService} from './faction.service';
import {WeaponService} from './weapon.service';

@Injectable({
  providedIn: 'root'
})
export class StarshipService extends AbstractAttributesService{

  constructor(private factionService: FactionService, private weaponService: WeaponService) {
    super();
  }

  protected initializeDatas(): void {
    const path = 'assets/images/planet/';

    const tie = new Starship();
    tie.name = 'TIE/LN starfighter';
    tie.pathImage = path + 'tie-starfighter.png';
    tie.faction = this.factionService.getArrayFaction()[0];
    tie.hyperDrive = false;
    tie.shielding = 14;
    tie.hitPoint = 500;
    tie.addWeapon(this.weaponService.getArrayWeapon()[0]);
    this.arrayAbstractAttributes.push(tie);

    const xWing = new Starship();
    xWing.name = 'X-Wing';
    xWing.pathImage = path + 'x-wing.png';
    xWing.faction = this.factionService.getArrayFaction()[1];
    xWing.hyperDrive = true;
    xWing.shielding = 15;
    xWing.hitPoint = 480;
    xWing.addWeapon(this.weaponService.getArrayWeapon()[1]);
    xWing.addWeapon(this.weaponService.getArrayWeapon()[2]);
    this.arrayAbstractAttributes.push(xWing);
  }

  getArrayStarship(): Array<Starship> {
    return (this.getArrayAbstractAttributes() as Array<Starship>);
  }

  getStarshipByGuid(guid: Guid): Starship {
    return (this.getAbstractAttributesByGuid(guid) as Starship);
  }
}
