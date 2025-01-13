import { Component, inject } from '@angular/core';
import { VideogamesService } from './videogames.service';
import { VideogameComponent } from "./videogame/videogame.component";
import { Videogame } from './videogame.model';
import { PrenotazioneVideogameComponent } from "./prenotazione-videogame/prenotazione-videogame.component";



@Component({
  selector: 'app-videogames',
  standalone: true,
  imports: [VideogameComponent, PrenotazioneVideogameComponent],
  templateUrl: './videogames.component.html',
  styleUrl: './videogames.component.css'
})



export class VideogamesComponent {

  //*** ANDIAMO AD INNIETTARE QUI DENTRO I METODI PRESI DAL `videgames.service.ts` ***
  private videogamesService = inject(VideogamesService);

  // accedo al DB privato all'interno di service tramite il metodo getVideogames(), get dei videogiochi ogni aggiornamento dello stato del componente
  get getVideogames() {
    return this.videogamesService.getVideogames();
  }


  // ----------------------------------------------------


  selecetedVideogame: Videogame | null = null; // videogioco selezionato dal figlio "videogame.component", iniziamente sarà vuoto.

  // evento che scatta quando si decide di prenotare un videogame dall'evento del click nel figlio "videogame.component
  // va a settare il videogioco selezionato.r
  onVideogameSelected(videogame: Videogame): void {
    this.selecetedVideogame = videogame;
  }


  // ----------------------------------------------------


  // evento che emittato dal figlio "prenotazione-videogame", verrà aggiornato il suo stato e utlizzeremo un metodo nei services, per rinizializzare l'array con i videogames
  onVideogameBooked(): void {
    if (this.selecetedVideogame) {
      this.videogamesService.updateStatusVideogame(this.selecetedVideogame);
      this.selecetedVideogame = null; // Resetta la selezione del videogioco anche la modale
    }
  }

}