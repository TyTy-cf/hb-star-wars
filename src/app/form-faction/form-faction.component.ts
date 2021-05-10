import { Component, OnInit } from '@angular/core';
import {Faction} from '../../models/faction';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {FactionService} from '../../services/faction.service';

@Component({
  selector: 'app-form-faction',
  templateUrl: './form-faction.component.html',
  styleUrls: ['./form-faction.component.scss']
})
export class FormFactionComponent implements OnInit {

  //  Formulaire par le code

  faction: Faction;
  factionFormGroup: FormGroup;
  submitted: boolean;

  constructor(private factionService: FactionService) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    // On initialise un objet vide
    this.newFaction();
    // A contrario du formulaire par le template, le binding ne se fait pas en direct
    // Ici, on initialise les champs à partir de ceux e notre objet (utile pour l'édition)
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
          ]
        )
      }
    );
  }

  // Ici, on fait l'équivalent du formulaire par le template de #name="ngModel"
  //  Autrement dit : nommer notre input plus facilement pour les vérifications
  get name(): AbstractControl {
    return this.factionFormGroup.get('name');
  }

  get pathImage(): AbstractControl {
    return this.factionFormGroup.get('pathImage');
  }

  newFaction(): void {
    // Lorsque l'on clique sur le bouton "Ajouter" on appelle la méthode ajout du service
    // Ce qui revient à push la planet dans le tableau
    this.submitted = false;
    this.faction = new Faction();
  }

  onSubmit(): void {
    this.submitted = true;
    // Dans le cadre du formulaire par le code, il faut bien penser à set les valeurs de notre
    // formulaire à notre objet inital, sinon il restera avec ses valeurs initiales
    this.faction = this.factionFormGroup.value;
    this.factionService.addAbstractAttributes(this.faction);
    // Et reset le form lorsque l'on a fait le traitement
    this.factionFormGroup.reset();
  }

}
