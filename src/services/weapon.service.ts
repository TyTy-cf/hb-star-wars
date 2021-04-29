import { Injectable } from '@angular/core';
import {AbstractAttributesService} from './abstract-attributes.service';
import {Guid} from 'guid-typescript';
import {Weapon} from '../models/weapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponService extends AbstractAttributesService{

  protected initializeDatas(): void {
    const path = 'assets/images/weapon/';

    const ls1 = new Weapon();
    ls1.name = 'Ls1-Laser cannons';
    ls1.pathImage = path + 'ls1-laser_cannons.png';
    ls1.damage = 40;
    ls1.coolDown = 0;
    this.addAbstractAttributes(ls1);

    const kx9 = new Weapon();
    kx9.name = 'KX9 laser cannon';
    kx9.pathImage = path + 'KX9_laser_cannon.png';
    kx9.damage = 35;
    kx9.coolDown = 0;
    this.addAbstractAttributes(kx9);

    const mg7 = new Weapon();
    mg7.name = 'MG7 proton torpedo launcher';
    mg7.pathImage = 'MG7_proton_torpedo_launcher.png';
    mg7.damage = 50;
    mg7.coolDown = 2;
    this.addAbstractAttributes(mg7);
  }

  getArrayWeapon(): Array<Weapon> {
    return (this.getArrayAbstractAttributes() as Array<Weapon>);
  }

  getWeaponByGuid(guid: Guid): Weapon {
    return (this.getAbstractAttributesByGuid(guid) as Weapon);
  }
}
