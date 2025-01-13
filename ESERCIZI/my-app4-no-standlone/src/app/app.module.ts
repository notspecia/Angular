import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentiComponent } from './studenti/studenti.component';
import { StudenteComponent } from './studenti/studente/studente.component';


//* Punto centrale per registrare componenti, servizi e moduli. qui è TUTTO CENTRALIZZATO, non è + STANDALONE
//* 01. declarations -> sezione è utilizzata per dichiarare i componenti, le direttive e i pipe che appartengono a un modulo specifico. 
//* Qualsiasi elemento dichiarato in declarations è conosciuto solo all'interno di quel modulo, a meno che non venga esportato.

//* 02. imports -> viene utilizzata per importare altri moduli necessari per il funzionamento del modulo corrente. 7
//* I moduli importati possono essere: Moduli di Angular, come BrowserModule, FormsModule,
@NgModule({
  declarations: [
    AppComponent,
    StudentiComponent,
    StudenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
