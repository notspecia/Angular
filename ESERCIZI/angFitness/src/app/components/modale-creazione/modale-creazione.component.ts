import { Component, inject } from '@angular/core';
import { CorsiService } from '../../corsi.service';



@Component({
  selector: 'app-modale-creazione',
  standalone: true,
  imports: [],
  templateUrl: './modale-creazione.component.html',
  styleUrl: './modale-creazione.component.css'
})



export class ModaleCreazioneComponent {

  //*** inject dei services comuni da utilizzare per gestire i corsi ***
  private corsiServices = inject(CorsiService);


  // ---------------------------------------------



}
