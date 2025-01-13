import { Component, computed, signal } from '@angular/core';
import { RESPO_DB } from '../RESPO_DB';



const randomIndex = Math.floor(Math.random() * RESPO_DB.length);

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})



export class IntroComponent {

  //*01. Un signal è un Oggetto wrapper nel quale registro un valore di qualsiasi tipo. 
  //*02. So che questo valore potrà cambiare. Al change di queto valore Angular viene notificato e quindi è 
  //*in grado di aggiornare la parte specifica 


  //*questa funzione è importata da @angular/core 
  // quando wrappo qualcosa con signal quel qualcosa cambierà, viene tenuto in osservazione perchè cambia! e scatta un meccanismo
  selectedRespo = signal(RESPO_DB[randomIndex]);

  onSelectRespo() {
    const randomIndex = Math.floor(Math.random() * RESPO_DB.length);
    // il metodo set assegna il valore al contenuto del Signal()
    this.selectedRespo.set(RESPO_DB[randomIndex])  // IL SEGNALE DEVE ESSERE PERCEPITO! sono delle `FUNZIONI`, bisogna usare il .set
  }

  // altro modo per andare a prendere le immagini per poi inserirle nel path dell'img
  imagePath = computed(() => "respoImg/" + this.selectedRespo().image);
}