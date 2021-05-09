
export abstract class AbstractAttributes {

  protected static idCount = 1;
  // tslint:disable-next-line:variable-name
  protected _name: string;
  // tslint:disable-next-line:variable-name
  protected _pathImage: string;
  // tslint:disable-next-line:variable-name
  protected _id: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get pathImage(): string {
    return this._pathImage;
  }

  set pathImage(value: string) {
    this._pathImage = value;
  }

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  constructor() {
    AbstractAttributes.idCount++;
    this.id = '' + AbstractAttributes.idCount++;
  }

}
