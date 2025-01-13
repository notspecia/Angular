/*è il file principale component di un'applicazione Angular: AppComponent. 
Questo file è fondamentale perché rappresenta il componente radice dell'applicazione Angular e funge da punto 
di ingresso per la logica e il layout dell'app. 

la classe APPCOMPONENT VIENE LETTO NELL'INDEX DI `index.html` */


// qui importiamo tutti i vari component per usarli poi nel `app.component.html`
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimoComponentComponent } from './primo-component/primo-component.component';
import { SecondoComponent } from './secondo-component/secondo-component.component';
import { UtentiComponent } from './utenti/utenti.component';
import { UtenteComponent } from "./utente/utente.component";
import { EsercizioStroboComponent } from "./esercizio-strobo/esercizio-strobo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimoComponentComponent, SecondoComponent, UtentiComponent, UtenteComponent, EsercizioStroboComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'my-app1-intro';

  nomeSviluppatore: string = "Gabriele";
  corso: string = "WEBDEV";
  presenza: boolean = true;
  sede: string = "Piazza dei mestieri";


  // viene mostrato all'interno dell index.html grazie a <app-root>
  constructor() {
    console.log(`mi chiamo ${this.nomeSviluppatore} faccio parte del corso di ${this.corso} e studio a ${this.sede}`);
  }
}