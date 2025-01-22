import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corso } from './corso.model';



@Injectable({
  providedIn: 'root'
})



export class CorsiService {

  //*** inject di metodi HTTP per gestire i corsi (GET, DELETE, POST) ***
  private httpClient = inject(HttpClient);


  // metodo invocato nei component per effettuare la GET dei corsi da usare nelle pagine "home" && "nostri-corsi"
  loadCorsi() {
    return this.httpClient.get<Corso[]>("http://localhost:3000/corsi");
  }

  // metodo per andare a cambiare il parametro "prenotazioniAttuali" del corso selezionato dopo aver compilato il form con la PUT
  updateBooking(corso: Corso) {
    return this.httpClient.patch<Corso>(`http://localhost:3000/corsi/${corso.id}`, {
      prenotazioniAttuali: ++corso.prenotazioniAttuali //incremento del valore quando viene fatta richiesta di prenotazione
    });
  }

}
