import { Component, inject } from '@angular/core';
import { UtentiService } from './utenti.service';
import { UtenteComponent } from './utente/utente.component';
import { Utente } from './utente.model';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-utenti',
  standalone: true,
  imports: [RouterOutlet, UtenteComponent],
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.css'
})



export class UtentiComponent {

  // inniettiamo i servizi di utenti da poterli utilizzare nei components
  private utentiServices = inject(UtentiService);

  // ottieniamo tramite GET gli utenti
  utenti: Utente[] = this.utentiServices.users;

}
