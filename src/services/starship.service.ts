import {Inject, Injectable} from '@angular/core';
import {Starship} from '../models/starship';
import {Guid} from 'guid-typescript';
import {FactionService} from './faction.service';
import {WeaponService} from './weapon.service';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  arrayStarships: Array<Starship>;

  constructor(
    private factionService: FactionService,
    private weaponService: WeaponService
  ) {
    this.arrayStarships = new Array<Starship>();
    this.initializeDatas();
  }

  private initializeDatas(): void {
    const path = 'assets/images/starship/';

    const tie = new Starship();
    tie.name = 'TIE/LN starfighter';
    tie.pathImage = path + 'tie-starfighter.png';
    tie.faction = this.factionService.getArrayFaction()[0];
    tie.hyperDrive = false;
    tie.shielding = 14;
    tie.hitPoint = 500;
    tie.addWeapon(this.weaponService.getArrayWeapon()[0]);
    this.arrayStarships.push(tie);

    const xWing = new Starship();
    xWing.name = 'X-Wing';
    xWing.pathImage = path + 'x-wing.png';
    xWing.faction = this.factionService.getArrayFaction()[1];
    xWing.hyperDrive = true;
    xWing.shielding = 15;
    xWing.hitPoint = 480;
    xWing.addWeapon(this.weaponService.getArrayWeapon()[1]);
    xWing.addWeapon(this.weaponService.getArrayWeapon()[2]);
    this.arrayStarships.push(xWing);
  }

  getArrayStarship(): Array<Starship> {
    return this.arrayStarships;
  }

  public getStarshipByGuid(guid: Guid): Starship {
    const anObject = this.arrayStarships.filter((aa) => aa.guid.equals(guid));
    console.log(anObject.length);
    if (anObject.length === 0) {
      throw new Error('Aucun objet avec ce Guid n\'a été trouvé');
    }
    return anObject[0];
  }

  public getStarshipByFactionGuid(guid: Guid): Array<Starship> {
    return this.arrayStarships.filter((ss) => ss.faction.guid.equals(guid));
  }
}
