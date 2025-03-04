import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corso } from './components/corso/corso.model';
import { ReportPrenotazione } from './components/report-prenotazioni/report-prenotazione.model';



@Injectable({
  providedIn: 'root'
})



export class CorsiService {

  //*** inject di metodi HTTP per gestire i corsi (GET, PATCH, DELETE, POST) ***
  private httpClient = inject(HttpClient);


  //*** METODI API corsi/ *** 

  // metodo invocato nei component per effettuare la GET dei corsi da usare nelle pagine "home" && "nostri-corsi"
  loadCorsi() {
    return this.httpClient.get<Corso[]>("http://localhost:3000/corsi");
  }

  // ------------------------------------------------

  // metodo per andare a cambiare il parametro "prenotazioniAttuali" del corso selezionato dopo aver compilato il form con la PUT
  updateBooking(corso: Corso) {
    return this.httpClient.patch<Corso>(`http://localhost:3000/corsi/${corso.id}`, {
      prenotazioniAttuali: ++corso.prenotazioniAttuali //incremento del valore quando viene fatta richiesta di prenotazione
    });
  }

  // metodo per decrementare il parametro "prenotazioniAttuali" del corso selezionato 
  decrementBooking(corso: Corso) {
    return this.httpClient.patch<Corso>(`http://localhost:3000/corsi/${corso.id}`, {
      prenotazioniAttuali: --corso.prenotazioniAttuali //incremento del valore quando viene fatta richiesta di prenotazione
    });
  }

  // ------------------------------------------------

  // metodo per cancellare il corso selezionato all'interno del componente "amministrazione.component"
  deleteCorso(corso: Corso) {
    return this.httpClient.delete<Corso>(`http://localhost:3000/corsi/${corso.id}`);
  }

  // ------------------------------------------------

  // metodo per creare un corso passato tramite la mdoale di creazione nel componente "modale-creazione.component"
  createCorso(corso: Corso) {
    return this.httpClient.post<Corso>(`http://localhost:3000/corsi`, corso);
  }


  //*** METODI API report/ *** 

  // metodo GET invocato al montaggio del componente report-prenotazioni.component
  loadReports() {
    return this.httpClient.get<ReportPrenotazione[]>("http://localhost:3000/reports");
  }

  // ------------------------------------------------

  createReport(report: ReportPrenotazione) {
    return this.httpClient.post<ReportPrenotazione>(`http://localhost:3000/reports`, report);
  }

}
