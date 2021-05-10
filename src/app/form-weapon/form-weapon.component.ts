import { Component } from '@angular/core';
import {Weapon} from '../../models/weapon';
import {WeaponService} from "../../services/weapon.service";

@Component({
  selector: 'app-form-weapon',
  templateUrl: './form-weapon.component.html',
  styleUrls: ['./form-weapon.component.scss']
})
export class FormWeaponComponent {

  weapon: Weapon;
  submitted: boolean;

  constructor(private weaponService: WeaponService) {
    this.initialStateForm();
  }

  newWeapon(): void {
    this.initialStateForm();
  }

  initialStateForm(): void {
    this.submitted = false;
    this.weapon = new Weapon();
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.weapon);
    console.log(this.weaponService.getArrayWeapon().length);
    this.weaponService.addAbstractAttributes(this.weapon);
    console.log(this.weaponService.getArrayWeapon().length);
  }

}
