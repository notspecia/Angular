import { Component, inject, input, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { type Corso } from '../../corso.model';
import { CorsiService } from '../../corsi.service';



@Component({
  selector: 'app-modale-prenotazione',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modale-prenotazione.component.html',
  styleUrl: './modale-prenotazione.component.css',
})



export class ModalePrenotazioneComponent {

  //*** inject di metodi HTTP e services comuni da utilizzare per gestire i corsi ***
  private corsiServices = inject(CorsiService);


  // prendiamo tramite props in input il corso passato dal componente corso.component e salvato come SIGNAL
  corso = input.required<null | Corso>();


  // form component
  form = new FormGroup({
    nome: new FormControl('', {
      validators: [Validators.required],
    }),
    cognome: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
  });

  get isNotNomeValid() {
    return this.form.controls.nome.touched && this.form.controls.nome.invalid;
  }
  get isNotCognomeValid() {
    return (
      this.form.controls.cognome.touched && this.form.controls.cognome.invalid
    );
  }
  get isNotEmailValid() {
    return this.form.controls.email.touched && this.form.controls.email.invalid;
  }
  get isFormValid() {
    return this.form.valid;
  }


  onSubmit() {
    console.log(this.form);
    const nome = this.form.value.nome;
    const cognome = this.form.value.cognome;
    const email = this.form.value.email;

    if (nome && cognome && email) {

      this.corsiServices.updateBooking(this.corso()!)
        .subscribe({
          next: (updatedCorso) => {
            console.log(`patch effettuata con successo! ${updatedCorso}`);
          },
          error: (err) => {
            console.error(`Errore durante aggiornamento delle prenotazioni: ${err}`);
          }
        });
    }


  }
}
