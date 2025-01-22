import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Utente } from './utente.model';
import { catchError, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


// **SPOSTIAMO TUTTO QUELLO CHE ABBIAMO FATOT FIN ORA CON LE HTTP CHIAMATE DENTRO UN SERVICE USANDOLO DOVE SI VUOLE IN TUTTI I COMPONENTS**
export class UtentiService {

  private httpClient = inject(HttpClient);


  // creo un metodo generico per recuperare dati, PASSIAMO AD ESSO UN PATH DELL'API
  // creo un metodo generico per recuperare dati
  private fetchUsers(url: string, errorMessage: string) {
    return this.httpClient.get<Utente[]>(url)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(() => { new Error(errorMessage); })
        }));
  }

  // per caricare gli utenti tramite GET 
  loadUtenti() {
    return this.fetchUsers('http://localhost:3000/users', "Qualcosa è andato storto");
  }


  //Questo la POST dell'utente preferito
  addUtentePreferito(user: Utente) {
    this.utentiPreferiti.update(prevUser => [...prevUser, user]);
    return this.httpClient.post('http://localhost:3000/utentiPreferiti', user)
  }

  deleteUser(user: Utente) {
    return this.httpClient.delete(`http://localhost:3000/users/utentiPreferiti/${user.id}`);
  }


  constructor() { }
}
