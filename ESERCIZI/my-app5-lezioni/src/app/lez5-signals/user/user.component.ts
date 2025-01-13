import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})



//! PRENDIAMO IN `input` TRAMITE I SIGNALS
export class UserComponent {

  //* ATT: UTILIZZANDO I SIGNAL QUANDO DICHIARO UNA PROP CON INPUT LA DEVO IMPORTARE CON -> input   DA ANGULAR CORE 
  // nome = input();

  //* se ho bisogno del tipo lo passo tra <>
  // nome = input<string>();

  //* se ho bisogno che sia required
  nome = input.required<string>();
  cognome = input.required<string>();
  imageAvatar = input.required<string>();

  //Anche quando uso la prop all'interno di un metodo della classe devo utilizzare le parentesi()
  image = computed(() => {
    return 'respoImg/' + this.imageAvatar()
  })



  // *** Metodo per emettere un evento ***
  // Questo metodo viene eseguito quando si clicca sul pulsante associato al componente.
  // `onSelectRespo.emit()` invia l'utente traite output al componente padre (LEZ-5).
  select = output<string>();

  onSelectRespo() {
    this.select.emit(this.nome()); // EMITTIAMO COME parametro il nome dell'utente scelto
  }


}
