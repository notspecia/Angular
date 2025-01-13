import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";
import { LISTA_UTENTI } from './databases/LISTA_UTENTI';
import { type userModel } from './models/user.model';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {

  title = 'project';

  // prendiamo il DB degli users per poi rendirizzarli per ogni singolo utente tramite @for
  users: userModel[] = LISTA_UTENTI;


  // -----------------------------------------


  // *** proprietà per gestire il bototne dell'utente cliccato nel figlio `utente.component` ***
  userScelto!: userModel;


  // *** funzione per gestire eventi di @Output dal figlio, assegniamo l'utente cliccato nel figlio  `utente.component` ***
  onSelectUser(user: userModel) {
    console.log(user);
    this.userScelto = user;
  }

}