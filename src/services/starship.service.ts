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
    tie.code = '001';
    tie.addWeapon(this.weaponService.getArrayWeapon()[0]);
    this.arrayStarships.push(tie);

    const xWing = new Starship();
    xWing.name = 'X-Wing';
    xWing.pathImage = path + 'x-wing.png';
    xWing.faction = this.factionService.getArrayFaction()[1];
    xWing.hyperDrive = true;
    xWing.shielding = 15;
    xWing.hitPoint = 480;
    xWing.code = '002';
    xWing.addWeapon(this.weaponService.getArrayWeapon()[1]);
    xWing.addWeapon(this.weaponService.getArrayWeapon()[2]);
    this.arrayStarships.push(xWing);

    const intercepteur = new Starship();
    intercepteur.name = 'Intercepteur TIE';
    intercepteur.pathImage = path + 'intercepteur.png';
    intercepteur.faction = this.factionService.getArrayFaction()[0];
    intercepteur.hyperDrive = false;
    intercepteur.shielding = 15;
    intercepteur.hitPoint = 560;
    intercepteur.code = '003';
    intercepteur.addWeapon(this.weaponService.getArrayWeapon()[3]);
    this.arrayStarships.push(intercepteur);

    const advanced = new Starship();
    advanced.name = 'Advanced TIE';
    advanced.pathImage = path + 'advanced.png';
    advanced.faction = this.factionService.getArrayFaction()[0];
    advanced.hyperDrive = true;
    advanced.shielding = 16;
    advanced.hitPoint = 610;
    advanced.code = '004';
    advanced.addWeapon(this.weaponService.getArrayWeapon()[3]);
    advanced.addWeapon(this.weaponService.getArrayWeapon()[4]);
    this.arrayStarships.push(advanced);

    const navette = new Starship();
    navette.name = 'Navette T-4a';
    navette.pathImage = path + 'navette.png';
    navette.faction = this.factionService.getArrayFaction()[0];
    navette.hyperDrive = true;
    navette.shielding = 13;
    navette.hitPoint = 520;
    navette.code = '005';
    navette.addWeapon(this.weaponService.getArrayWeapon()[0]);
    navette.addWeapon(this.weaponService.getArrayWeapon()[5]);
    this.arrayStarships.push(navette);
  }

  getArrayStarship(): Array<Starship> {
    return this.arrayStarships;
  }

  public getStarshipByGuid(guid: Guid): Starship {
    const anObject = this.arrayStarships.filter((aa) => aa.guid.equals(guid));
    if (anObject.length === 0) {
      throw new Error('Aucun objet avec ce Guid n\'a été trouvé');
    }
    return anObject[0];
  }

  public getStarshipByCode(code: string): Starship {
    const anObject = this.arrayStarships.filter((aa) => aa.code === code);
    if (anObject.length === 0) {
      throw new Error('Aucun objet avec ce Guid n\'a été trouvé');
    }
    return anObject[0];
  }

  public getStarshipByFactionGuid(guid: Guid): Array<Starship> {
    return this.arrayStarships.filter((ss) => ss.faction.guid.equals(guid));
  }
}
