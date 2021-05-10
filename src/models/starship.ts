import {AbstractAttributes} from './abstract-attributes';
import {Faction} from './faction';
import {Weapon} from './weapon';

export class Starship extends AbstractAttributes {

  // tslint:disable-next-line:variable-name
  private _faction: Faction;
  // tslint:disable-next-line:variable-name
  private _hyperDrive: boolean;
  // tslint:disable-next-line:variable-name
  private _shielding: number;
  // tslint:disable-next-line:variable-name
  private _hitPoint: number;
  // tslint:disable-next-line:variable-name
  private _weapons: Array<Weapon>;

  get faction(): Faction {
    return this._faction;
  }

  set faction(value: Faction) {
    this._faction = value;
  }

  get hyperDrive(): boolean {
    return this._hyperDrive;
  }

  set hyperDrive(value: boolean) {
    this._hyperDrive = value;
  }

  get shielding(): number {
    return this._shielding;
  }

  set shielding(value: number) {
    this._shielding = value;
  }

  get hitPoint(): number {
    return this._hitPoint;
  }

  set hitPoint(value: number) {
    this._hitPoint = value;
  }

  get weapons(): Array<Weapon> {
    return this._weapons;
  }

  set weapons(weapons: Array<Weapon>)  {
    this._weapons = weapons;
  }

  constructor() {
    super();
    this._weapons = new Array<Weapon>();
  }

  addWeapon(weapon: Weapon): void {
    if (weapon) {
      this._weapons.push(weapon);
    }
  }

  copyStarship(starship: Starship): void {
    this.hitPoint = starship.hitPoint;
    this.faction = starship.faction;
    this.shielding = starship.shielding;
    this.hyperDrive = starship.hyperDrive;
    this.weapons = starship.weapons;
    this.name = starship.name;
    this.pathImage = starship.pathImage;
  }

}
