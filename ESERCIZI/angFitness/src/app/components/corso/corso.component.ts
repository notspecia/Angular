import { Component, inject, input, output } from '@angular/core';
import { type Corso } from '../../corso.model';
import { CorsiService } from '../../corsi.service';



@Component({
  selector: 'app-corso',
  standalone: true,
  imports: [],
  templateUrl: './corso.component.html',
  styleUrl: './corso.component.css'
})



export class CorsoComponent {

  //*** inject di metodi HTTP e services comuni da utilizzare per gestire i corsi ***
  private corsiServices = inject(CorsiService);

  // prendiamo tramite props in input il corso passato dal genitore della pagina component e salvato come SIGNAL
  corso = input.required<Corso>();

  // -------------------------------------

  // rispondiamo in output alla pagina padre con un "event" passando il corso selezionato
  selectCorso = output<Corso>();

  handleBooking(selectCorso: Corso) {
    this.selectCorso.emit(this.corso());
  }

  handleDecrement() {
    this.corsiServices.decrementBooking(this.corso())
      .subscribe({
        next: (updatedCorso) => {
          console.log(`put effettuata con successo! ${JSON.stringify(updatedCorso)}`);
        },
        error: (err) => {
          console.error(`Errore durante decremento delle prenotazioni del corso: ${err}`);
        }
      });
  }


}
