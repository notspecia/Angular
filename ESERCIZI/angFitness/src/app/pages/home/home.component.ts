import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CorsiService } from '../../corsi.service';

import { CorsoComponent } from "../../components/corso/corso.component";
import { type Corso } from '../../corso.model';
import { RouterOutlet } from '@angular/router';
import { ModalePrenotazioneComponent } from "../../components/modale-prenotazione/modale-prenotazione.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CorsoComponent, ModalePrenotazioneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent implements OnInit {

  //*** inject di metodi HTTP e services comuni da utilizzare per gestire i corsi ***
  private httpClient = inject(HttpClient);
  private corsiServices = inject(CorsiService);

  // variabile contenente i primo 4 corsi ottenuti tramite GET FETCH corsi/
  corsi = signal<Corso[] | undefined>(undefined);
  isFetching = signal<boolean>(true); // per mostrare un messaggio di attesa in caso stia ancora fetchando l'api


  // ----------------------------------------------


  // al montaggio del componente effettuare la GET per ricevere i corsi da assegnare alla variabile "corsi", vengono presi solo i primi 4
  // nel momento in cui la fetch avviene "next", andiamo anche a cambiare il flag di una variabile per dire che la fetch è conclusa
  ngOnInit(): void {

    this.corsiServices.loadCorsi()
      .subscribe({
        next: (corsi) => {
          this.corsi.set(corsi.slice(0, 4));
        },
        complete: () => {
          this.isFetching.set(false);
        }
      });
  }

  // --------------------------------------

  // variabile che conterrà il corso selezionato tramite event emitter dal componente figlio corso.component
  selectedCorso = signal<null | Corso>(null);

  handleBooking(corso: Corso) {
    this.selectedCorso.set(corso);
  }

} 