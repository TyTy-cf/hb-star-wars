import {AbstractAttributes} from '../models/abstract-attributes';
import {Guid} from 'guid-typescript';

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

  public getAbstractAttributesByGuid(guid: Guid): AbstractAttributes {
    const anObject = this.arrayAbstractAttributes.filter((aa) => aa.guid.equals(guid));
    if (!anObject) {
      throw new Error('Aucun objet avec ce Guid n\'a été trouvé');
    }
    return anObject[0];
  }

  public deleteAbstractAttributesByGuid(guid: Guid): void {
    this.arrayAbstractAttributes = this.arrayAbstractAttributes.filter((aa) => !aa.guid.equals(guid));
  }

  public addAbstractAttributes(newObject: AbstractAttributes): void {
    this.arrayAbstractAttributes.push(newObject);
  }
}
