import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../pizza/pizza.model';


@Component({
  selector: 'app-lista-pizze',
  standalone: true,
  imports: [],
  templateUrl: './lista-pizze.component.html',
  styleUrl: './lista-pizze.component.css'
})




export class ListaPizzeComponent {

  //*** ricevo in in @Input l'array delle pizze dal GENITORE `pizzeria`, usato per looppare l'array con le pizze all'interno dell'html del component stesso
  // inoltre specificare l'interfaccia di Pizza, che contiene le proprietà della pizza
  @Input({ required: true }) listaPizze!: Pizza[];



  // *** Proprietà per emettere eventi al padre ***
  // `@Output` viene utilizzato per definire un evento personalizzato.
  // L'istanza di `EventEmitter` permette al figlio (LISTA-PIZZE) di inviare i dati della pizza al padre (PIZZERIA), ossia la pizza selezionata.
  @Output() selectPizza = new EventEmitter();


  // *** Metodo per emettere un evento ***
  // Questo metodo viene eseguito quando si clicca sul pulsante associato al componente.
  // `selectStud.emit()` invia la pizza traite @Output al componente padre (PIZZERIA).
  onSelectedPizza(pizza: Pizza) {
    this.selectPizza.emit(pizza);
  }

}