import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Responsabile } from './responsabile.model';


@Component({
  selector: 'app-responsabile',
  standalone: true,
  imports: [],
  templateUrl: './responsabile.component.html',
  styleUrl: './responsabile.component.css'
})


export class ResponsabileComponent {

  // importiamo direttamente l'oggetto dal GENIORE (lez4-statement)
  @Input({ required: true }) respo!: Responsabile;



  // *** Proprietà per emettere eventi al padre ***
  @Output() selectRespo = new EventEmitter<Responsabile>(); // andiamo ad emettere l'evento al PADRE @Output un parametro `Responsabile` (oggetto interface)


  // *** Metodo per emettere un evento ***
  // stiamo dicendo di emmettere il responsabile ossia l'oggetto di esso, tra la lista (array) di tutti i respo
  onSelectedRespo() {
    this.selectRespo.emit(this.respo);
  }
}
