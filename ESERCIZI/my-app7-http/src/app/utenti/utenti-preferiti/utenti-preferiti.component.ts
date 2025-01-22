import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Utente } from '../utente.model';
import { UtentiService } from '../utenti.service';




@Component({
  selector: 'app-utenti-preferiti',
  standalone: true,
  imports: [],
  templateUrl: './utenti-preferiti.component.html',
  styleUrl: './utenti-preferiti.component.css'
})



export class UtentiPreferitiComponent implements OnInit {

  private httpClient = inject(HttpClient); // prendiamo tutti i metodi HTTP dall' @angular core
  private usersService = inject(UtentiService);

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

  // dopo il pipe per la gestione degli errori avrò il subscribe della fetch di DELETE
  removeUtente(user: Utente) {
    this.usersService.deleteUser(user).subscribe({
      next: (resData => {
        console.log(`hai eliminato ${resData}`)
      })
    })
  }
}
