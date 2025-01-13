import { Component } from '@angular/core';
import { StudenteComponent } from "./studente/studente.component"; // importiamo il component di STUDENTE
import { DUMMY_STUDS } from './DUMMY_STUDS'; // dati di esempio un array che contiene oggetti con informazioni degli studenti


@Component({
  selector: 'app-studenti',
  standalone: true,
  imports: [StudenteComponent],
  templateUrl: './studenti.component.html',
  styleUrl: './studenti.component.css'
})



export class StudentiComponent {

  // informazioni su uno STUDENTE, queste info verranno passate al componente figlio `studente.component.ts`
  id: string = "1";
  nome: string = "paolo";
  cognome: string = "rossi";
  immagine: string = "IMG/paolo.jpg";

  id2: string = "2";
  nome2: string = "gabriele";
  cognome2: string = "speciale";
  immagine2: string = "IMG/gabriele.webp";

  // si può anche con gli array, importazione di un array contenente oggetti di STUDENTI
  studenti = DUMMY_STUDS;


  // *** Proprietà per gestire il saluto ***
  // Il valore di `saluto` sarà impostato dinamicamente quando il figlio emette un evento.
  saluto!: string;

  // *** Metodo per gestire eventi dal figlio ***
  // Questo metodo viene chiamato quando il figlio (STUDENTE) emette l'evento `selectStud`.
  // `info` è il messaggio passato dal figlio.
  onSelectStud(info: string) {
    console.log("Sono nel parent e stampo la seguente info: " + info);
    this.saluto = "Sono nel parent e stampo la seguente info: " + info;
  }

}
