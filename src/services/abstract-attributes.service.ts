import {AbstractAttributes} from '../models/abstract-attributes';

export abstract class AbstractAttributesService {

  protected arrayAbstractAttributes: Array<AbstractAttributes>;

  public constructor() {
    this.arrayAbstractAttributes = new Array<AbstractAttributes>();
    this.initializeDatas();
  }

  protected abstract initializeDatas(): void;

  public getArrayAbstractAttributes(): Array<AbstractAttributes> {
    return this.arrayAbstractAttributes;
  }

  public getAbstractAttributesById(id: number): AbstractAttributes {
    const anObject = this.arrayAbstractAttributes.filter((aa) => aa.id === id);
    if (!anObject) {
      throw new Error('Aucun objet avec ce Guid n\'a été trouvé');
    }
    return anObject[0];
  }

  public deleteAbstractAttributesById(id: number): void {
    this.arrayAbstractAttributes = this.arrayAbstractAttributes.filter((aa) => aa.id !== id);
  }

  public addAbstractAttributes(newObject: AbstractAttributes): void {
    this.arrayAbstractAttributes.push(newObject);
  }
}
