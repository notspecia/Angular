import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // importiamo i moduli per usare il TWDB per i forms!
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common'; // consentono di trasformare degli input direttamente nei template HTML.




@Component({
  selector: 'app-lez6-two-way-binding-directives',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './lez6-two-way-binding-directives.component.html',
  styleUrl: './lez6-two-way-binding-directives.component.css'
})





export class Lez6TwoWayBindingDirectivesComponent {
  //* il TWO WAY DATA BINDING, mi permette di fondere property binding e gli event binding 

  // buona norma avere i nomi uguali tra il campo in input e il nome della proprietà sul quale farò il BINDING (legame)
  titolo: string = "";
  sommario: string = "";
  dataConsegna: string = "";
  prezzo: number = 0;

  alert: string = ""; // alert mostrato nella UI con del contenuto quando si presenta un problema nella compilazione dei forms


  onSubmitForm() {
    console.log(this.titolo, this.sommario, this.dataConsegna, this.prezzo);

    // mettiamo del conenuto alla proprietà alert!
    if (this.titolo == "" || this.sommario == "" || this.dataConsegna == "" || this.prezzo == 0) {
      this.alert = "Stai dimenticando qualcosa da qualche parte!"
      // reset delle proprietà nel form al click
    } else {
      this.titolo = "";
      this.sommario = "";
      this.dataConsegna = "";
      this.prezzo = 0;
    }
  }
}
