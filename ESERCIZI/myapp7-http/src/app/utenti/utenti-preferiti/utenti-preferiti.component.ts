import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Utente } from '../utente.model';




@Component({
  selector: 'app-utenti-preferiti',
  standalone: true,
  imports: [],
  templateUrl: './utenti-preferiti.component.html',
  styleUrl: './utenti-preferiti.component.css'
})



export class UtentiPreferitiComponent implements OnInit {

  private httpClient = inject(HttpClient); // prendiamo tutti i metodi HTTP dall' @angular core

  utentiPref = signal<Utente[] | undefined>(undefined);


  ngOnInit(): void {
    this.httpClient.get<Utente[]>("http://localhost:3000/usersPrefered")
      .subscribe({
        next: (resData) => {
          this.utentiPref.set(resData); // settiamo i dati tramite signals alla proprietà utenti
          console.log(`gli utenti preferiti sono i seguenti:`);
          console.log(resData);
        }
      });
  }
}
