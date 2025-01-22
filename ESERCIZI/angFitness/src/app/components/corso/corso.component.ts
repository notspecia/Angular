import { Component, input, output } from '@angular/core';
import { type Corso } from '../../corso.model';



@Component({
  selector: 'app-corso',
  standalone: true,
  imports: [],
  templateUrl: './corso.component.html',
  styleUrl: './corso.component.css'
})



export class CorsoComponent {

  // prendiamo tramite props in input il corso passato dal genitore della pagina component e salvato come SIGNAL
  corso = input.required<Corso>();


  // rispondiamo in output alla pagina padre con un "event" passando il corso selezionato
  selectCorso = output<Corso>();

  handleBooking(selectCorso: Corso) {
    this.selectCorso.emit(this.corso());
  }
}
