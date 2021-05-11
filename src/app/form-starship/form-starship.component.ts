import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Starship} from '../../models/starship';
import {StarshipService} from '../../services/starship.service';
import {FactionService} from '../../services/faction.service';
import {WeaponService} from '../../services/weapon.service';

@Component({
  selector: 'app-form-starship',
  templateUrl: './form-starship.component.html',
  styleUrls: ['./form-starship.component.scss']
})
export class FormStarshipComponent implements OnInit {

  starship: Starship;
  submitted: boolean;
  starshipFormGroup: FormGroup;

  constructor(
    private starshipService: StarshipService,
    public factionService: FactionService,
    public weaponService: WeaponService
  ) { }

  newStarship(): void {
    this.starship = new Starship();
    this.submitted = false;
  }

  addStarship(): void {
    this.submitted = true;
    this.starship = this.starshipFormGroup.value;
    console.log(this.starship);
    this.starshipService.addStarship(this.starship);
    this.starshipFormGroup.reset();
  }

  addWeaponField(): void {
    this.weapons.push(new FormControl('', Validators.required));
  }

  deleteWeaponField(index: number): void {
    if (this.weapons.length !== 1) {
      this.weapons.removeAt(index);
    }
  }

  ngOnInit(): void {
    this.newStarship();
    this.starshipFormGroup = new FormGroup({
      name: new FormControl(
        this.starship.name, [
          Validators.required,
        ]
      ),
      pathImage: new FormControl(
        this.starship.pathImage, [
          Validators.required,
        ]
      ),
      hitPoint: new FormControl(
        this.starship.hitPoint, [
          Validators.required,
          Validators.min(0)
        ]
      ),
      shielding: new FormControl(
        this.starship.shielding, [
          Validators.required,
          Validators.min(0)
        ]
      ),
      hyperDrive: new FormControl(
        this.starship.hyperDrive, [
          Validators.required,
        ]
      ),
      faction: new FormControl(
        this.starship.faction, [
          Validators.required,
        ]
      ),
      weapons: new FormArray([
        new FormControl('', Validators.required),
      ]),
    });
  }

  get name(): AbstractControl {
    return this.starshipFormGroup.get('name');
  }

  get hitPoint(): AbstractControl {
    return this.starshipFormGroup.get('hitPoint');
  }

  get shielding(): AbstractControl {
    return this.starshipFormGroup.get('shielding');
  }

  get pathImage(): AbstractControl {
    return this.starshipFormGroup.get('pathImage');
  }

  get hyperDrive(): AbstractControl {
    return this.starshipFormGroup.get('hyperDrive');
  }

  get faction(): AbstractControl {
    return this.starshipFormGroup.get('faction');
  }

  get weapons(): FormArray {
    return this.starshipFormGroup.get('weapons') as FormArray;
  }

}
