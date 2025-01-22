import { Component, Input } from '@angular/core';
import { Ricetta } from '../../models/ricetta.model';
import { RicetteService } from '../ricette.service';



@Component({
  selector: 'app-ricetta',
  standalone: true,
  imports: [],
  templateUrl: './ricetta.component.html',
  styleUrl: './ricetta.component.css'
})



export class RicettaComponent {

  // *** inietta il servizio RicetteService serve per accedere ai metodi del servizio *** 
  constructor(private ricetteService: RicetteService) { }


  // L'INPUT NON LO DIMENTICHEREMO MAI ANDRA SEMPRE USATO (al massimo possiamo scordarci dell' @Output)
  @Input() ricetta!: Ricetta;

  // non si farà + @Output e event emitter per poi passarlo al genitore!!! ma piuttosto tramite i services cosi:
  onDeleteRicetta() {
    console.log(`sto rimuovendo la ricetta: ${this.ricetta.nome}`);
    this.ricetteService.removeRicettaById(this.ricetta.id);
  }

}
