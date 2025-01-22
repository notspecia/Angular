import { Component, inject, input } from '@angular/core';
import { UtentiService } from '../utenti.service';



@Component({
  selector: 'app-info-utente',
  standalone: true,
  imports: [],
  templateUrl: './info-utente.component.html',
  styleUrl: './info-utente.component.css'
})



export class InfoUtenteComponent {

  private utentiService = inject(UtentiService);


  // questo userid è lo stesso del parametro impostato sulla rotta, cioè hanno lo stesso identico nome.
  // per poterlo leggere devo impostare una prop in app.config.ts
  userId = input.required<string>();


}
