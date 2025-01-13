import { Component } from '@angular/core';
import { IntroComponent } from "./intro/intro.component";
import { UserComponent } from "./user/user.component";
import { type Responsabile } from './responsabile.model';
import { RESPO_DB } from './RESPO_DB';



@Component({
  selector: 'app-lez5-signals',
  standalone: true,
  imports: [IntroComponent, UserComponent],
  templateUrl: './lez5-signals.component.html',
  styleUrl: './lez5-signals.component.css'
})


export class Lez5SignalsComponent {
  responsabili: Responsabile[] = RESPO_DB; // abbiamo l array con i responsabili

  // evento che viene trasmesso dal FIGLIO `utente`
  onSelectedRespo(nome: string) {
    console.log("Sto cliccando su " + nome);
  }

}