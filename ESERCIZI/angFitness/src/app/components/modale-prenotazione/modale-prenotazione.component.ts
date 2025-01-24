import { Component, inject, input } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';

import { CorsiService } from '../../corsi.service';
import { type Corso } from '../corso/corso.model';
import { type ReportPrenotazione } from '../report-prenotazioni/report-prenotazione.model';




@Component({
  selector: 'app-modale-prenotazione',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modale-prenotazione.component.html',
  styleUrl: './modale-prenotazione.component.css',
})



export class ModalePrenotazioneComponent {

  //*** inject dei services comuni da utilizzare per gestire i corsi ***
  private corsiServices = inject(CorsiService);

  // prendiamo tramite props in input il corso passato dal componente corso.component e salvato come SIGNAL
  corso = input.required<null | Corso>();


  // ---------------------------------------


  //*** MODO PER LAVORARE CON I FORMS TRAMITE ngModel come direttiva normale, senza definire le referenze
  // all'invio del form invocato metodo onSubmit()
  // formData -> è un oggetto che contiene all'interno di .value i campi passati del form
  onSubmit(formData: NgForm) {

    /* leggiamo i dati del form tramite il macro oggetto Form che è stato costruito al submit del form
    assegniamo i valori degli input del form direttamente in un oggetto che contiene il NUOVO REPORT */
    const nuovoReport: ReportPrenotazione = {
      //*ID: il backend lo genera automaticamente
      nomeUtente: formData.value.nome,
      cognomeUtente: formData.value.cognome,
      emailUtente: formData.value.email,
      nomeCorso: this.corso()!.nome
    }


    // controllo aggiuntivo oltre al form diretto nell'html, se il form passato è valido
    if (formData.valid) {

      // log di controllo
      console.log(`fatta prenotazione di ${nuovoReport.nomeUtente} ${nuovoReport.cognomeUtente} ${formData.value.email}`);

      // passiamo il nuovo corso ai service per la PATCH delle prenotazioni attuali del corso
      this.corsiServices.updateBooking(this.corso()!)
        .subscribe({
          next: (updatedCorso) => {
            console.log(`put effettuata con successo! ${JSON.stringify(updatedCorso)}`);
          },
          error: (err) => {
            console.error(`Errore durante aggiornamento delle prenotazioni del corso: ${err}`);
          }
        });
    }

    // passiamo il nuovo reportPrenotazione ai service per la POST della creazione di un nuovo report
    this.corsiServices.createReport(nuovoReport)
      .subscribe({
        next: (newReport) => {
          console.log(`post effettuata con successo! ${JSON.stringify(newReport)}`);
        },
        error: (err) => {
          console.error(`Errore durante la post delle report del corso: ${err}`);
        }
      });

  }

}
