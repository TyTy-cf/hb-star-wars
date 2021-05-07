
export abstract class AbstractAttributes {

  private static startingId = 0;

  // tslint:disable-next-line:variable-name
  protected _name: string;
  // tslint:disable-next-line:variable-name
  protected _pathImage: string;
  // tslint:disable-next-line:variable-name
  protected _id: number;

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

  get id(): number {
    return this._id;
  }

  public constructor() {
    this._id = AbstractAttributes.startingId++;
  }
}
