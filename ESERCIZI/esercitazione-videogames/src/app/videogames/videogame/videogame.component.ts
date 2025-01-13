import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Videogame } from '../videogame.model';
import { VideogamesService } from '../videogames.service';
import { PrenotazioneVideogameComponent } from "../prenotazione-videogame/prenotazione-videogame.component";



@Component({
  selector: 'app-videogame',
  standalone: true,
  imports: [PrenotazioneVideogameComponent],
  templateUrl: './videogame.component.html',
  styleUrl: './videogame.component.css'
})



export class VideogameComponent {

  // riceviamo in @Input il videogame passato come prop dal padre `videogames.component.ts`
  @Input() videogame!: Videogame;


  // emittiamo tramite EventEmitter al genitore "videogames.component" il videogioco selezionato al click dell'apposito bottone
  @Output() selectVideogame = new EventEmitter<Videogame>();

  onVideogameSelected() {
    this.selectVideogame.emit(this.videogame);
  }
}
