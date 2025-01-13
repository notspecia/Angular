import { Component } from '@angular/core';
import { utentiFinti } from './utenti';


//* fuori dalla classe posso dichiarare delle varibili a livello di modulo, sono accessibili solo dalla Classe nelle quali le dichiaro.
//* se volessi renderle accessibili anche all'esterno utilizzare `export`  
let randomIndex = Math.floor(Math.random() * (utentiFinti.length - 0) + 0);



@Component({
  selector: 'app-utenti',
  standalone: true,
  imports: [],
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.css'
})


/* quando lascio generare il component dalla CLI, 
non viene inserito il costruttore questo perchè quando renderizzo (utilizzo il selctor da qualche parte)
viene invocato  un costruttore di default */
export class UtentiComponent {

  titolo: string = "Prestazione Utenti!";
  nomeAdmin: string = "Giacomo";
  cognome: string = "Bianchi";
  eta: number = 26;
  imgAdmin: string = "IMG/images.jpg"

  // ora voglio usare gli utenti creati in utenti.ts qui nel component importandolo sopra
  utenti: {
    id: string,
    nome: string,
    cognome: string,
    eta: number,
    img: string
  }[] = utentiFinti;

  // assegniamo un utente (oggetto) RANDOM tramite l'indice di posizione
  utenteDelMese = this.utenti[randomIndex];

}
