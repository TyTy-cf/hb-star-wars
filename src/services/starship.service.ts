import {Injectable} from '@angular/core';
import {Starship} from '../models/starship';
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

    const intercepteur = new Starship();
    intercepteur.name = 'Intercepteur TIE';
    intercepteur.pathImage = path + 'intercepteur.png';
    intercepteur.faction = this.factionService.getArrayFaction()[0];
    intercepteur.hyperDrive = false;
    intercepteur.shielding = 15;
    intercepteur.hitPoint = 560;
    intercepteur.addWeapon(this.weaponService.getArrayWeapon()[3]);
    this.arrayStarships.push(intercepteur);

    const advanced = new Starship();
    advanced.name = 'Advanced TIE';
    advanced.pathImage = path + 'advanced.png';
    advanced.faction = this.factionService.getArrayFaction()[0];
    advanced.hyperDrive = true;
    advanced.shielding = 16;
    advanced.hitPoint = 610;
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
    navette.addWeapon(this.weaponService.getArrayWeapon()[0]);
    navette.addWeapon(this.weaponService.getArrayWeapon()[5]);
    this.arrayStarships.push(navette);
  }

  public getArrayStarship(): Array<Starship> {
    return this.arrayStarships;
  }

  public getStarshipByFactionId(id: number): Array<Starship> {
    return this.arrayStarships.filter((ss) => ss.faction.id === id);
  }

  public getStarshipById(id: number): Starship {
    return this.arrayStarships.filter((ss) => ss.id === id)[0];
  }
}
