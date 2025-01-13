import { Component, inject, Input } from '@angular/core';
import { type Parente } from './parente.model';
import { ParentiService } from '../parenti.service';
import { LogService } from '../../log.service';



@Component({
  selector: 'app-parente',
  standalone: true,
  imports: [],
  templateUrl: './parente.component.html',
  styleUrl: './parente.component.css'
})



export class ParenteComponent {

  // L'INPUT NON LO DIMENTICHEREMO MAI ANDRA SEMPRE USATO (al massimo possiamo scordarci dell' @Output)
  @Input() parente!: Parente;

  // *** 01. modo tramite costruttore ***
  // constructor(private parentiService: ParentiService) { }

  // *** 02. modo usare la funzione inject(nomeDellaClasseDelService), la prop va settata con modificatore private ***
  private parentiService = inject(ParentiService);
  private logService = inject(LogService);


  // non si farà + @Output e event emitter per poi passarlo al genitore!!! ma piuttosto tramite i services cosi:
  onDeleteParente() {
    console.log(`sto rimuovendo il parente con il seguente id: ${this.parente.id}`);
    this.parentiService.removeParenteById(this.parente.id);
    this.logService.logUser("gabriele", "speciale");
  }

}
