import { Injectable } from '@angular/core';
import { type Ricetta } from '../models/ricetta.model';
import { LISTA_RICETTE } from '../database/LISTA_RICETTE';



@Injectable({
  providedIn: 'root'
})



export class RicetteService {

  // 01. prendiamo la LISTA DI RICETTE da un DB in formato typescipt contenente un array[ricette{}]
  // 02. adesso che la lista delle ricette è private posso accederci solo all'interno della classe stessa, 
  // ma useremo un metodo per renderlo accessibile anche al di fuori
  private listaRicette: Ricetta[] = LISTA_RICETTE;



  // *** Metodo per accedere alla lista delle ricette al di fuori del .service assengato all'interno "ricette.component" ***
  // *** verrà invocato dal "ricette.component" ogni volta che cambia l'applicazione TRAMITE IL -> GET
  getRicette(): Ricetta[] {
    console.log(this.listaRicette);
    return this.listaRicette;
  }


  // *** mi faccio restituire l'array nuovo senza la ricetta eliminata tramite il (click) all'interno del figlio "ricetta.component" ***
  removeRicettaById(id: string) {
    this.listaRicette = this.listaRicette.filter(ricetta => ricetta.id !== id);
    console.log('Lista ricette aggiornata:', this.listaRicette);
  }


  // *** va ad aggiornare la lista array, delle ricette totali
  addRicetta(ricetta: Ricetta) {
    this.listaRicette.push(ricetta);
    console.log(`ricetta aggiunta con successo!: ${ricetta}`);
  }


}