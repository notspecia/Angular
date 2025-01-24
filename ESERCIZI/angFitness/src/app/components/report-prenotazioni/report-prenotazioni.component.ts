import { Component, inject, OnInit, signal } from '@angular/core';
import { CorsiService } from '../../corsi.service';
import { type ReportPrenotazione } from './report-prenotazione.model';



@Component({
  selector: 'app-report-prenotazioni',
  standalone: true,
  imports: [],
  templateUrl: './report-prenotazioni.component.html',
  styleUrl: './report-prenotazioni.component.css'
})



export class ReportPrenotazioniComponent implements OnInit {

  //*** inject dei services comuni da utilizzare per gestire i corsi ***
  private corsiServices = inject(CorsiService);

  // variabile contenente reports ottenuti tramite GET FETCH reports/
  reports = signal<ReportPrenotazione[] | undefined>(undefined);
  // isFetching = signal<boolean>(true); // per mostrare un messaggio di attesa in caso stia ancora fetchando l'api


  // ---------------------------------------------


  // al montaggio del componente effettuare la GET per ricevere i reports da assegnare alla variabile "reports"
  ngOnInit(): void {

    this.corsiServices.loadReports()
      .subscribe({
        next: (loadedReports) => {
          this.reports.set(loadedReports.reverse().slice(0, 4)); //ANDIAMO A INVERTIRE L'ARRAY DEI REPORT E PRENDIAMO GLI UTLIMI 4
        },
        complete: () => {
          console.log("report caricati correttamente!");
          // this.isFetching.set(false);
        }
      });
  }

}
