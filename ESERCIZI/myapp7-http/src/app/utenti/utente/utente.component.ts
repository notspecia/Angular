import { Component, input, output } from '@angular/core';
import { Utente } from '../utente.model';



@Component({
  selector: 'app-utente',
  standalone: true,
  imports: [],
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.css'
})



export class UtenteComponent {
  utente = input.required<Utente>();

  // MANDIAMO IN OUTPUT AL PADRE "utenti.component" l'event passando l'utente selezionato
  selectUser = output<Utente>();

  onSelectedUser(user: Utente) {
    this.selectUser.emit(user)
  }
}
