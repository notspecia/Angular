import { Component, inject, input } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';

import { CorsiService } from '../../corsi.service';
import { type Corso } from '../../corso.model';




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



  //*** MODO PER LAVORARE CON I FORMS TRAMITE ngModel come direttiva normale, senza definire le referenze
  // all'invio del form invocato metodo onSubmit()
  // formData -> è un oggetto che contiene all'interno di .value i campi passati del form
  onSubmit(formData: NgForm) {

    // leggiamo i dati del form tramite il macro oggetto Form che è stato costruito al submit del form e assegnamo i valori input a delle variabili
    const nome = formData.value.nome;
    const cognome = formData.value.cognome;
    const email = formData.value.email;

    // log di controllo
    console.log(`fatta prenotazione di ${nome} ${cognome} ${email}`);

    // controllo aggiuntivo oltre al form diretto nell'html, se il form passato è valido
    if (formData.valid) {

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
  }

}
