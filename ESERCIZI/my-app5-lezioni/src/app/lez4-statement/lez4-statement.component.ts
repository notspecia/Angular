import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { type Responsabile } from './responsabile/responsabile.model';
import { ResponsabileComponent } from "./responsabile/responsabile.component";
import { RESPO_DB } from './RESPO_DB';
import { CorsiComponent } from "./corsi/corsi.component";


@Component({
  selector: 'app-lez4-statement',
  standalone: true,
  imports: [NgFor, NgIf, ResponsabileComponent, CorsiComponent],
  templateUrl: './lez4-statement.component.html',
  styleUrl: './lez4-statement.component.css'
})


export class Lez4StatementComponent {

  // lista di un array che contiene delle stringhe di nomi e cognomi di studentri (utilizzato per usare il ciclo for nell'html)
  listaStudenti: string[] = [
    "Gabriele Speciale",
    "Luca Rossi",
    "Marco Rossi",
    "Giorgio Bianchi",
    "Gino Panettone"
  ];



  // lista di docenti da utilizzare nell'@if, definimo il type di cosa deve contenere questo array di docenti
  listaDocenti: {
    id: string,
    nome: string,
    disponibilita: boolean
  }[] = [
      {
        id: "d1",
        nome: "Dario Menillo",
        disponibilita: true
      },
      {
        id: "d2",
        nome: "Mauro Bogliaccino",
        disponibilita: false
      }, {
        id: "d3",
        nome: "Mickey Mouse",
        disponibilita: true
      }
    ]



  listaMaterie: string[] = [
    "angular",
    "js",
    "php",
    "node"
  ];


  // importiamo il type "Responsabile", che è un interface che ha un array di oggetti (responsabili) dal file apposito
  listaResponsabili: Responsabile[] = RESPO_DB;

  // *** Proprietà per gestire il bottone del respo cliccato ***
  // questa proprietà conterrà e assegneremo la pizza mandata dalla `lista-pizze`, PERCHE LA VOGLIO UTILIZZARE IN QUESTO COMPONENTE
  respoScelta!: Responsabile;

  onSelectedRespo(respo: Responsabile) {

    this.respoScelta = respo;
    console.log(this.respoScelta.nome);
  }
}
