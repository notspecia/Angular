import { Component, Input } from '@angular/core';
import { Pizza } from './pizza.model';


@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})



export class PizzaComponent {

  // riceviamo in Input dal PADRE (pizzeria) la pizza cliccata all'interno del FRATELLO (lista-pizze)
  @Input() pizzaScelta!: Pizza;
}
