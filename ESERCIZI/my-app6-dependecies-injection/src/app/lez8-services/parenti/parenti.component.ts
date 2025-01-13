import { Component } from '@angular/core';
import { ParenteComponent } from "./parente/parente.component";
import { ParentiService } from './parenti.service';
import { Parente } from './parente/parente.model';
import { LogService } from '../log.service';



@Component({
  selector: 'app-parenti',
  standalone: true,
  imports: [ParenteComponent],
  templateUrl: './parenti.component.html',
  styleUrl: './parenti.component.css'
})


export class ParentiComponent {

  parenti: Parente[] = [];


  // ***01. modo per mettere in atto la DEPENDECY INJECTION -> nel costruttore definisco il service come argomento ***
  // *** da "parenti.service.ts", in questo momento ho a disposizione metodi e prop dichiarati in parentiService ***

  // *** ATTENZIONE: l'argomento della firma deve essere private perchè voglio che il mio service sia visibile solo all'interno
  // *** della classe nella quale sto iniettando! ***
  constructor(private parentiService: ParentiService, private logService: LogService) {

    // console.log(this.parentiService.listaParenti); // verranno rendirizzati gli oggetti che arrivano dal "service", MA LI LEGGO DA QUI dal "parenti.component"
    // this.parentiService.stampaParenti();
    // this.parenti = this.parentiService.getParenti(); // assegniamo a questa classe la prop parenti usando il getParenti(), per prenderli dal service che sono private!


    this.logService.logUser("gabriele", "speciale")
  }


  get allParenti() {
    return this.parentiService.getParenti();
  }

}
