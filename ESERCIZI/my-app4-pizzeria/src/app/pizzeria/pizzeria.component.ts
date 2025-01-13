import { Component } from '@angular/core';
import { PizzaComponent } from './pizza/pizza.component';
import { INFORMAZIONI_PIZZE } from './INFORMAZIONI_PIZZE'; // importazione array di pizze[] del file esterno
import { ListaPizzeComponent } from './lista-pizze/lista-pizze.component'; // importiamo il componente che conterrà una lista delle pizze prese in @Input dal (GENITORE PIZZERIA)
import { Pizza } from './pizza/pizza.model'; // importiamo l'interfaccia dal MODEL contenente il TYPE della `Pizza`


@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [ListaPizzeComponent, PizzaComponent], // importiamo i FIGLI 
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css'
})



export class PizzeriaComponent {

  // importazione dell'array di pizze da INFORMAZIONI_PIZZE, che poi passeremo in @Input al FIGLIO `lista-pizze`
  pizze: Pizza[] = INFORMAZIONI_PIZZE;



  // *** Proprietà per gestire la pizza cliccata ***
  // questa proprietà conterrà e assegneremo la pizza mandata dalla `lista-pizze`, PERCHE LA VOGLIO UTILIZZARE IN QUESTO COMPONENTE
  pizzaScelta!: Pizza;

  // *** Metodo per gestire eventi dal figlio ***
  // Questo metodo viene chiamato quando il FIGLIO (lista-pizze) emette l'evento `selectPizza`.
  onSelectPizza(pizza: Pizza) {
    console.log(pizza);
    this.pizzaScelta = pizza; // assegniamo la pizza che ci è stata passata dal FIGLIO
  }

}