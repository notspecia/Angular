import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Videogame } from '../videogame.model';
import { FormsModule, NgForm } from '@angular/forms';
import { VideogamesService } from '../videogames.service';




@Component({
  selector: 'app-prenotazione-videogame',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prenotazione-videogame.component.html',
  styleUrl: './prenotazione-videogame.component.css'
})




export class PrenotazioneVideogameComponent {


  // riceviamo in @Input il videogame selezionato (attuale) passato come prop dal padre `videogames.component.ts`
  @Input() videogame!: Videogame;



  @Output() videogameBooked = new EventEmitter<void>();

  onSubmit(form: NgForm) {

    if (form.valid) {
      console.log("Form inviato correttamente!", form.value);
      console.log("Videogame selezionato:", this.videogame);
      this.videogameBooked.emit(); // non ci sarà nessun $event perchè non emittiamo nessun parametro!

    } else {
      console.error("Errore: Form non valido!");
    }
  }


}
