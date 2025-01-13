import { Component } from '@angular/core';


@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrl: './studenti.component.css'
})


export class StudentiComponent {

  // array ocn i nomi degli studenti che verranno aggiunti tramite il onCaricaStudenti
  studenti: string[] = [];

  // funzione che aggiunge all'array degli studenti degli stuendi al click del bottone
  onCaricaStudenti() {
    this.studenti.push("Mirko");
    this.studenti.push("Gianna");
    this.studenti.push("Sergio");
  }
}
