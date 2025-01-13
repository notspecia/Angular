import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ingrediente } from '../../models/ricetta.model';
import { RicetteService } from '../ricette.service';



@Component({
  selector: 'app-new-ricetta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-ricetta.component.html',
  styleUrl: './new-ricetta.component.css'
})



export class NewRicettaComponent {


  //* creazione delle proprietà per creazione di un nuovo oggetto task
  // buona norma avere i nomi uguali tra il campo in input e il nome della proprietà sul quale farò il BINDING (legame)
  id: string = "";
  nome: string = "";
  descrizione: string = "";
  // array di ingredienti di default NON GESTITO!
  ingredienti: Ingrediente[] = [{ nome: "uova", quantita: 2, disponibilita: true }, { nome: "latte", quantita: 1, disponibilita: false }];

  // alert mostrato nella UI con del contenuto quando si presenta un problema nella compilazione dei forms
  alert: string = "";



  // *** inietta il servizio RicetteService serve per accedere ai metodi del servizio *** 
  constructor(private ricetteService: RicetteService) { }



  // all'invio del form, viene eseguito questo metodo
  onSubmitRicetta() {

    // mettiamo del conenuto alla proprietà alert! in caso mancassero dei campi da riempire
    if (!this.nome || !this.descrizione) {
      this.alert = "Stai dimenticando qualcosa da qualche parte!";
      return;
    }

    //  id random da dare alla ricetta!
    this.id = `r${new Date().getTime().toString()};`

    //* prendiamo il metodo dal services e lo utilizziamo  aggiungendo l'oggetto passato con la nuova ricetta da aggiungere
    this.ricetteService.addRicetta({ id: this.id, nome: this.nome, descrizione: this.descrizione, ingredienti: this.ingredienti });


    // resettiamo le proprietà per permettere di aggiungere altre tasks
    this.id = "";
    this.nome = "";
    this.descrizione = "";

    // resettiamo l'alert di errore se mancano dei campi input da riempire 
    this.alert = "";

  }
}
