import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})



export class LoginComponent {

  //*** 1. MODO PER LAVORARE CON I FORMS TRAMITE [(ngModel)] 
  // proprietà che riceveranno un valore in tempo reale alla modifica del form tramite  "ngmodel"
  // email!: string;
  // password!: string;
  /*onSubmit() {
    console.log(`ciao ${this.email} hai fatto il LOGIN`);
  }*/


  //*** 2. MODO PER LAVORARE CON I FORMS TRAMITE ngModel come direttiva normale, senza definire le referenze come nell'esempio sopra
  // all'invio del form invocato metodo onSubmit()
  // formData -> è un oggetto che contiene all'interno di .value i campi passati del form
  onSubmit(formData: NgForm) {
    console.log(`ciao hai fatto il LOGIN ${formData}`);
    console.log(formData);

    // leggiamo i dati del form tramite il macro oggetto Form che è stato costruito al submit
    const email = formData.value.email;
    const password = formData.value.password;

    console.log(`le tue credenziali ${email}  ${password}`);

    // piccolo controllo della validità
    if (formData.form.valid) {
      console.log("SONO CORRETTE!");
    } else {
      console.log("SONO SBAGLIATE!");
    }

  }

}
