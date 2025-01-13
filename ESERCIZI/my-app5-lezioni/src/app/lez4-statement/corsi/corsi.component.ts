import { Component, Input } from '@angular/core';
import { type Responsabile } from '../responsabile/responsabile.model';


@Component({
  selector: 'app-corsi',
  standalone: true,
  imports: [],
  templateUrl: './corsi.component.html',
  styleUrl: './corsi.component.css'
})


// riceve dal parent "LEZ4" in @Input l'oggetto Responsabile che contiene l'oggetto del respo scelto
export class CorsiComponent {
  @Input() respoScelto!: Responsabile;
}