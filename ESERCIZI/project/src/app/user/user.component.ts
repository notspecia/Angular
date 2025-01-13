import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type userModel } from '../models/user.model';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})



export class UserComponent {

  // riceviamo in @Input la prop con utente e assegnamo tutto separatamente
  @Input({ required: true }) user!: userModel; // oggetto completo per poi usarlo e passarlo tra altri component
  @Input({ required: true }) nome!: string;
  @Input({ required: true }) cognome!: string;
  @Input({ required: true }) avatar!: string;


  // *** Proprietà per emettere eventi al padre ***
  @Output() selectUser = new EventEmitter();

  onSelectUser(user: userModel) {
    this.selectUser.emit(user); // EMITTIAMO COME l'oggetto contenente quell'utente
  }
}
