import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Utente } from './utente.model';



@Injectable({
  providedIn: 'root'
})


// **SPOSTIAMO TUTTO QUELLO CHE ABBIAMO FATOT FIN ORA CON LE HTTP CHIAMATE DENTRO UN SERVICE USANDOLO DOVE SI VUOLE IN TUTTI I COMPONENTS**
export class UtentiService {

  private httpClient = inject(HttpClient);


  // creo un metodo generico per recuperare dati, PASSIAMO AD ESSO UN PATH DELL'API
  private fetchUsers(url: string) {
    return this.httpClient.get<Utente[]>(url);
  }

  loadUtenti() {
    return this.fetchUsers("http://localhost:3000/users");
  }


  constructor() { }
}
