import { Injectable } from '@angular/core';
import { LISTA_UTENTI } from './DUMMY_USRES';




@Injectable({
  providedIn:
    'root'
})





export class UtentiService {
  
  get users() {
    return LISTA_UTENTI;
  }



  constructor() { }
}
