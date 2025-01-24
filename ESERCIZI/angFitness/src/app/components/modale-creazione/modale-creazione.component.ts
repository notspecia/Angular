import { Component, inject } from '@angular/core';
import { CorsiService } from '../../corsi.service';
import { FormsModule, NgForm } from '@angular/forms';
import { type Corso } from '../corso/corso.model';



@Component({
  selector: 'app-modale-creazione',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modale-creazione.component.html',
  styleUrl: './modale-creazione.component.css'
})



export class ModaleCreazioneComponent {

  //*** inject dei services comuni da utilizzare per gestire i corsi ***
  private corsiServices = inject(CorsiService);

  // ---------------------------------------------

  //*** MODO PER LAVORARE CON I FORMS TRAMITE ngModel come direttiva normale, senza definire le referenze
  // all'invio del form invocato metodo onSubmit()
  // formData -> è un oggetto che contiene all'interno di .value i campi passati del form
  onSubmit(formData: NgForm) {

    /* leggiamo i dati del form tramite il macro oggetto Form che è stato costruito al submit del form
    assegniamo i valori degli input del form direttamente in un oggetto che indica il NUOVO CORSO CREAT */
    const nuovoCorso: Corso = {
      //*ID: il backend lo genera automaticamente
      nome: formData.value.nomeCorso,
      descrizione: formData.value.descrizioneCorso,
      istruttore: formData.value.istruttore,
      durata: formData.value.durata,
      prenotazioniMax: formData.value.prenotazioniMax,
      prenotazioniAttuali: 0, // inizialmente impostato a 0
      immagine: formData.value.immagine,
    };

    // controllo aggiuntivo oltre al form diretto nell'html, se il form passato è valido
    if (formData.valid) {

      // log di controllo
      console.log(`creato nuovo corso di ${nuovoCorso.nome} ${nuovoCorso.descrizione} di ${nuovoCorso.istruttore} con massimo ${nuovoCorso.prenotazioniMax} prenotazioni`);

      // passiamo il corso ai service per la POST della creazione di un nuovo corso
      this.corsiServices.createCorso(nuovoCorso)
        .subscribe({
          next: (newCorso) => {
            console.log(`post effettuata con successo! ${JSON.stringify(newCorso)}`);
          },
          error: (err) => {
            console.error(`Errore durante la creazione del corso: ${err}`);
          }
        });
    }

  }

}
