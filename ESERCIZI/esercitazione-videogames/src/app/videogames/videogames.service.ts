import { Injectable } from '@angular/core';
import { Videogame } from './videogame.model';
import { LISTA_VIDEOGIOCHI } from './LISTA_VIDEOGAMES';




@Injectable({
  providedIn: 'root'
})




export class VideogamesService {

  // prendiamo il DB locale con la lista di [] {videogiochi}, mettendolo private per poi passarlo ad altri componenti tramite  `get`
  private videogames: Videogame[] = LISTA_VIDEOGIOCHI;


  // *** metodo per accedere alla lista dei videogames al di fuori del .service assengato all'interno "videogames.component" ***
  // *** verrà invocato dal "videogames.component" ogni volta che cambia l'applicazione TRAMITE IL -> GET
  getVideogames() {
    return this.videogames;
  }


  // ------------------------------


  // *** metodo che aggiorna l'array dei videogames, restituendo un nuovo array mappato che modifica lo stato del videogame-prenotato! 
  updateStatusVideogame(videogame: Videogame): void {

    this.videogames = this.videogames.map(v => {
      if (v.id === videogame.id) {
        return { ...v, statoDisponibilita: true } // quel videogame con le sue prop + change dello stato
      }
      return v; // videogame originale se non combacia con l'id del videogioco con lo stato aggiornato

    });

    console.warn("Updated videogames list:", this.videogames); // Logga tutta la lista aggiornata
  }

}
