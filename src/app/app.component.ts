import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  audio: HTMLAudioElement;
  buttonLabel: string;
  isPlay: boolean;

  constructor() {
    this.audio = new Audio();
    // Va rechercher la chanson à utiliser
    this.audio.src = '../assets/sound/theme/ThemeSong.mp3';
    // Baisse le son
    this.audio.volume = 0.05;
    // Charger la chanson et la jouer
    this.audio.load();
    // On force la musique au lancement : ont met le boolean à false, puis on appelle la fonction audioOnOff
    // Pour ne pas avoir le son au démarrage il faut mettre isPlay à true
    this.isPlay = true;
    this.audioOnOff().then();
  }

  async audioOnOff(): Promise<void> {
    if (this.isPlay) {
      await this.audio.pause();
      this.buttonLabel = 'Play Star Wars Theme !';
      this.isPlay = false;
    } else {
      await this.audio.play();
      this.buttonLabel = 'Stop Star Wars Theme !';
      this.isPlay = true;
    }
  }

}
