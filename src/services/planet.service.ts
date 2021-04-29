import { Injectable } from '@angular/core';
import {AbstractAttributesService} from './abstract-attributes.service';
import {Planet} from '../models/planet';

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
}

// C:\Developpement\Cours\Angular\Cours\HB\base-project\src\assets\images
