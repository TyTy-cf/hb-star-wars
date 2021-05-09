import { Component, OnInit } from '@angular/core';
import {Faction} from '../../models/faction';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FactionService} from '../../services/faction.service';

@Component({
  selector: 'app-form-faction',
  templateUrl: './form-faction.component.html',
  styleUrls: ['./form-faction.component.scss']
})
export class FormFactionComponent implements OnInit {

  faction: Faction;
  factionFormGroup: FormGroup;

  constructor(private factionService: FactionService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.faction = new Faction();
    this.factionFormGroup = new FormGroup(
      {
        name: new FormControl(
          this.faction.name, [
            Validators.required,
          ]
        ),
        pathImage: new FormControl(
          this.faction.pathImage, [
            Validators.required,
            Validators.pattern('^(http|https):\\/\\/(.*)')
          ]
        )
      }
    );
  }

  get name(): any {
    return this.factionFormGroup.get('name');
  }

  get pathImage(): any {
    return this.factionFormGroup.get('pathImage');
  }

  addFaction(): void {
    // Lorsque l'on clique sur le bouton "Ajouter" on appelle la méthode ajout du service
    // Ce qui revient à push la planet dans le tableau
    this.factionService.addAbstractAttributes(this.faction);
  }

}
