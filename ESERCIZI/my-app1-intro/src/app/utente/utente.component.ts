import { Component } from '@angular/core';
import { utentiFinti } from '../utenti/utenti';

// variabile con numero randomico da inserire nell'array che conttiene tutti gli ogetti Utenti
let randomIndex = Math.floor(Math.random() * (utentiFinti.length - 0) + 0);

@Component({
  selector: 'app-utente',
  standalone: true,
  imports: [],
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.css'
})


export class UtenteComponent {

  selectedUtente = utentiFinti[randomIndex];

  // EVENT BINDING
  // creo un metodo che SCATTA al click DEL <button>, come si faceva una volta con solo HTML
  onSelectUtente(nomeUtente: string) {
    console.log("sto cliccando sul pulsante!");
    console.log(`Utente: ${nomeUtente}`);

    // MODIFICHIAMO LO STATO DELLA CLASSE (modificata la proprietà -> selectedUtente)
    //* questo meccanismo si chiama CHANGE DETECTOR, mi permette di rendirizzare delle proprietà della classe che VARIANO durante l'esecuzione del codice
    const randomIndex2 = Math.floor(Math.random() * (utentiFinti.length - 0) + 0);
    this.selectedUtente = utentiFinti[randomIndex2];
  }
}
