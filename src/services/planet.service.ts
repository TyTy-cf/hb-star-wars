import { Injectable } from '@angular/core';
import {AbstractAttributesService} from './abstract-attributes.service';
import {Planet} from '../models/planet';
import {Guid} from 'guid-typescript';
import {AbstractAttributes} from '../models/abstract-attributes';
import {Weapon} from '../models/weapon';
import {Starship} from '../models/starship';

@Injectable({
  providedIn: 'root'
})
export class PlanetService extends AbstractAttributesService {

  protected initializeDatas(): void {
    const path = 'assets/images/planet/';

    const hoth = new Planet();
    hoth.name = 'Hoth';
    hoth.pathImage = path + 'hoth.png';
    this.addAbstractAttributes(hoth);

    const tatooine = new Planet();
    tatooine.name = 'Tatooine';
    tatooine.pathImage = path + 'tatooine.png';
    this.addAbstractAttributes(tatooine);

    const alderande = new Planet();
    alderande.name = 'Aldérande';
    alderande.pathImage = path + 'alderande.png';
    this.addAbstractAttributes(alderande);
  }
  public getPlanetByName(name: string): Planet {
    const anObject = this.arrayAbstractAttributes.filter((aa) => aa.name === name);
    if (anObject.length === 0) {
      throw new Error('Aucun objet avec ce Guid n\'a été trouvé');
    }
    return anObject[0];
  }
}
