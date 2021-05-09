import { Injectable } from '@angular/core';
import {AbstractAttributesService} from './abstract-attributes.service';
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
    ls1.id = '1';
    this.addAbstractAttributes(ls1);

    const kx9 = new Weapon();
    kx9.name = 'KX9 laser cannon';
    kx9.pathImage = path + 'KX9_laser_cannon.png';
    kx9.damage = 35;
    kx9.coolDown = 0;
    kx9.id = '2';
    this.addAbstractAttributes(kx9);

    const mg7 = new Weapon();
    mg7.name = 'MG7 proton torpedo launcher';
    mg7.pathImage = path + 'MG7_proton_torpedo_launcher.png';
    mg7.damage = 50;
    mg7.coolDown = 2;
    mg7.id = '3';
    this.addAbstractAttributes(mg7);

    const ls9 = new Weapon();
    ls9.name = ' L-s9 Laser cannons';
    ls9.pathImage = path + 'ls9.png';
    ls9.damage = 45;
    ls9.coolDown = 0;
    ls9.id = '4';
    this.addAbstractAttributes(ls9);

    const missile = new Weapon();
    missile.name = 'Concussion missile';
    missile.pathImage = path + 'concussion.png';
    missile.damage = 65;
    missile.coolDown = 2;
    missile.id = '5';
    this.addAbstractAttributes(missile);

    const laserCanon = new Weapon();
    laserCanon.name = 'Laser Cannon';
    laserCanon.pathImage = path + 'laser_canon_kx12.png';
    laserCanon.damage = 55;
    laserCanon.coolDown = 1;
    laserCanon.id = '6';
    this.addAbstractAttributes(laserCanon);
  }

  getArrayWeapon(): Array<Weapon> {
    return (this.getArrayAbstractAttributes() as Array<Weapon>);
  }

  getWeaponById(id: string): Weapon {
    return (this.getAbstractAttributesById(id) as Weapon);
  }
}
