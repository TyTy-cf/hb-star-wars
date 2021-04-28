import { Component } from '@angular/core';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'base-project';
  guid: Guid;

  constructor() {
    // Création d'un Guid - ex: 544fc1f7-d989-3e25-8dc9-2d1472e5c863
    this.guid = Guid.create();
    console.log('Objet GUID : ' + this.guid);
    // Pour passer le type Guid en type string, il faut faire un toString()
    const guidString = this.guid.toString();
    console.log('GUID string : ' + guidString);
    // Afin de récupérer un objet de type Guid depuis une chaîne de caractère, on fait un Guid.parse
    this.guid = Guid.parse(guidString);
    console.log('Objet Guid récupère depuis Guid.parse : ' + this.guid);
    // Pour effectuer une condition entre deux Guid, il faut utiliser la méthode equals()
    if (this.guid.equals(Guid.create())) {
      // traitement en cas d'égalité
    }
  }
}
