import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-lez7-two-ways-singals',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lez7-two-ways-singals.component.html',
  styleUrl: './lez7-two-ways-singals.component.css'
})



// uguale all'esempio di prima però  --> USANDO I SIGNAL()
export class Lez7TwoWaysSingalsComponent {

  // impostiamo le proprietà settate nella view HTML
  nome = signal<string>("");
  cognome = signal<string>("");
  dataNascita = signal<string>("");


  onSubmitForm() {
    console.log(this.nome(), this.cognome(), this.dataNascita());
  }

  // SETTING DI DATI PRESCRITTI DI DEFAULT TRAMITE IL CLICK DI UN BOTTONE
  onEsempio() {
    this.nome.set("Mario");
    this.cognome.set("Rossi");
    this.dataNascita.set("1990-01-01");
  }
}
