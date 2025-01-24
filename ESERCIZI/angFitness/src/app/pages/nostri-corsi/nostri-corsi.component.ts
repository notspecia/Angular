import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CorsiService } from '../../corsi.service';

import { CorsoComponent } from "../../components/corso/corso.component";
import { ModalePrenotazioneComponent } from '../../components/modale-prenotazione/modale-prenotazione.component';
import { type Corso } from '../../components/corso/corso.model';




@Component({
  selector: 'app-nostri-corsi',
  standalone: true,
  imports: [CorsoComponent, ModalePrenotazioneComponent],
  templateUrl: './nostri-corsi.component.html',
  styleUrl: './nostri-corsi.component.css'
})



export class NostriCorsiComponent implements OnInit {

  //*** inject dei services comuni da utilizzare per gestire i corsi ***
  private corsiServices = inject(CorsiService);

  // variabile contenente i corsi ottenuti tramite GET FETCH corsi/
  corsi = signal<Corso[] | undefined>(undefined);
  isFetching = signal<boolean>(true); // per mostrare un messaggio di attesa in caso stia ancora fetchando l'api


  // ---------------------------------------------------------


  // al montaggio del componente effettuare la GET per ricevere i corsi da assegnare alla variabile "corsi"
  // nel momento in cui la fetch avviene "next", andiamo anche a cambiare il flag di una variabile per dire che la fetch è conclusa
  ngOnInit(): void {

    this.corsiServices.loadCorsi()
      .subscribe({
        next: (corsi) => {
          this.corsi.set(corsi);
        },
        complete: () => {
          this.isFetching.set(false);
        }
      });
  }

  // --------------------------------------------

  // variabile che conterrà il corso selezionato tramite event emitter dal componente figlio corso.component
  selectedCorso = signal<null | Corso>(null);

  handleBooking(corso: Corso) {
    this.selectedCorso.set(corso);
  }

}