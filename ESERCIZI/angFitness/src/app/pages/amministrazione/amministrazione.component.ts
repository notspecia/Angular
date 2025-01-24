import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { CorsiService } from '../../corsi.service';
import { Corso } from '../../components/corso/corso.model';
import { CorsoComponent } from "../../components/corso/corso.component";
import { CorsoAmministrazioneComponent } from "../../components/corso-amministrazione/corso-amministrazione.component";
import { ModaleCreazioneComponent } from "../../components/modale-creazione/modale-creazione.component";
import { ReportPrenotazioniComponent } from "../../components/report-prenotazioni/report-prenotazioni.component";



@Component({
  selector: 'app-amministrazione',
  standalone: true,
  imports: [CorsoAmministrazioneComponent, ModaleCreazioneComponent, ReportPrenotazioniComponent],
  templateUrl: './amministrazione.component.html',
  styleUrl: './amministrazione.component.css'
})



export class AmministrazioneComponent {

  //*** inject dei services comuni da utilizzare per gestire i corsi ***
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
          this.corsi.set(corsi);
        },
        complete: () => {
          this.isFetching.set(false);
        }
      });
  }

}
