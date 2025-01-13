import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})




export class LogService {

  constructor() { }


  //* INNITETTIAMO e definiamo i metodi servizi da utilizzare poi sui component

  logUser(nome: string, cognome: string) {
    console.log(`l'utente loggato si chiama ${nome} ${cognome}`);
  }

  logOutUser() {

  }
}
