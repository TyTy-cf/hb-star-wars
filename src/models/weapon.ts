import {AbstractAttributes} from './abstract-attributes';

export class Weapon extends AbstractAttributes {
  // tslint:disable-next-line:variable-name
  private _damage: number;
  // tslint:disable-next-line:variable-name
  private _coolDown: number;
  // tslint:disable-next-line:variable-name
  private _onCoolDown: number;

  get damage(): number {
    return this._damage;
  }

  set damage(value: number) {
    this._damage = value;
  }

  get coolDown(): number {
    return this._coolDown;
  }

  set coolDown(value: number) {
    this._coolDown = value;
  }

  get onCoolDown(): number {
    return this._onCoolDown;
  }

  set onCoolDown(value: number) {
    this._onCoolDown = value;
  }
}
