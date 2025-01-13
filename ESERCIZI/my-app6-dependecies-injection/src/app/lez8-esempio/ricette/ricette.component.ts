import { Component } from '@angular/core';
import { Ricetta } from '../models/ricetta.model';
import { RicetteService } from './ricette.service';
import { RicettaComponent } from "./ricetta/ricetta.component";
import { NewRicettaComponent } from "./new-ricetta/new-ricetta.component";




@Component({
  selector: 'app-ricette',
  standalone: true,
  imports: [RicettaComponent, NewRicettaComponent],
  templateUrl: './ricette.component.html',
  styleUrl: './ricette.component.css'
})




export class RicetteComponent {

  // ***01. modo per mettere in atto la DEPENDECY INJECTION -> nel costruttore definisco il service come argomento ***
  // *** da "parenti.service.ts", in questo momento ho a disposizione metodi e prop dichiarati in parentiService ***

  // *** ATTENZIONE: l'argomento della firma deve essere private perchè voglio che il mio service sia visibile solo all'interno
  // *** della classe nella quale sto iniettando! ***
  constructor(private ricetteService: RicetteService) { }


  // Accedo ai dati del service tramite il metodo getRicette() che si trova in service, CONTINUI AGGIORNAMENTI SE LE RICETTE VERRANNO MODIFICATE
  // NON SERVE UNA PROPRIETà APPOSITA CHE ASPETTA UN VALORE COME --> 
  get allRicette() {
    return this.ricetteService.getRicette();
  }

}
