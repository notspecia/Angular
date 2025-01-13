import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-studente',
  standalone: true,
  imports: [],
  templateUrl: './studente.component.html',
  styleUrl: './studente.component.css'
})



// ATT: quando uso il @input() importo dall'angular core
// stabilisco che proprietà marcata con @input() venga ricevuta dal component tramite il parent!
// il ! è importante anche qui, in questo caso il valore delle proprietà arriverà dall'esterno (ma non è obbligatorio!)
// è required! è obbligatorio devo passarlo per forza nel component senno da errore!
export class StudenteComponent {

  // va a ricevere i dati e le informazioni dal PADRE `studenti.component.ts`
  @Input({ required: true }) id!: string;
  @Input({ required: true }) nome!: string;
  @Input({ required: true }) cognome!: string;
  @Input({ required: true }) immagine!: string; // nuova proprietà


  // Metodo getter per calcolare la matricola in base al nome e al cognome.
  // Usa la prima lettera del nome, un numero casuale tra 0 e 99 e la prima lettera del cognome.
  matricola!: string;

  get generaMatricola() {
    return this.nome.charAt(0) + Math.floor(Math.random() * 100) + this.cognome.charAt(0)
  }


  // *** Proprietà per emettere eventi al padre ***
  // `@Output` viene utilizzato per definire un evento personalizzato.
  // L'istanza di `EventEmitter` permette al figlio (STUDENTE) di inviare dati al padre (STUDENTI).
  @Output() selectStud = new EventEmitter();

  // *** Metodo per emettere un evento ***
  // Questo metodo viene eseguito quando si clicca sul pulsante associato al componente.
  // `selectStud.emit()` invia un messaggio personalizzato al componente padre (STUDENTI).
  onSelectedStud() {
    this.selectStud.emit("Ciao mi chiamo " + this.nome + " " + this.cognome)
  }
}
