import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})



export class SignupComponent {

  // ottiene come argomento la mia local reference che è il form
  onSubmit(formReg: NgForm) {
    console.log(formReg); // viene tirato fuori da console il mio form compilato in singup.component.html
    console.log(formReg.value); // vengono tirati fuori i valori degli input con ngModel tramite oggetto {}
    console.log(formReg.control);

    if (formReg.form.invalid) {
      console.log("il tuo form è invalido!");
      return;
    }

    // se il form è valido non la funzione non viene chiusa e vengono assegnati i value degli input
    const nome = formReg.value.nome;
    const cognome = formReg.value.cognome;
    const dataNascita = formReg.value.dataNascita;

    console.log(`ciao tu sei ${nome} ${cognome}`);

  }

}
