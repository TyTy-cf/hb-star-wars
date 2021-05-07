import {AbstractAttributes} from './abstract-attributes';

export class Faction extends AbstractAttributes {
  // tslint:disable-next-line:variable-name
  private _color: string;

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }
}
