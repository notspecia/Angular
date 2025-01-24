import { Component, inject, input } from '@angular/core';
import { CorsiService } from '../../corsi.service';
import { type Corso } from '../corso/corso.model';



@Component({
  selector: 'app-corso-amministrazione',
  standalone: true,
  imports: [],
  templateUrl: './corso-amministrazione.component.html',
  styleUrl: './corso-amministrazione.component.css'
})



export class CorsoAmministrazioneComponent {

  //*** inject di metodi HTTP e services comuni da utilizzare per gestire i corsi ***
  private corsiServices = inject(CorsiService);

  // prendiamo tramite props in input il corso passato dal genitore della pagina component e salvato come SIGNAL
  corso = input.required<Corso>();

  // -------------------------------------

  handleDelete() {
    this.corsiServices.deleteCorso(this.corso()).subscribe({
      next: (deleteCorso) => {
        console.log(`delete effettuata con successo! ${JSON.stringify(deleteCorso)}`);
      },
      error: (err) => {
        console.error(`Errore durante delete delle prenotazioni del corso: ${err}`);
      }
    });
  }

}
