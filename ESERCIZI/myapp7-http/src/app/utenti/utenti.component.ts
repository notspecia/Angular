import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { type Utente } from './utente.model'; // type anche da utilizzare nei metodi CRUD
import { UtenteComponent } from './utente/utente.component';
import { UtentiPreferitiComponent } from "./utenti-preferiti/utenti-preferiti.component";
import { UtentiService } from './utenti.service';




@Component({
  selector: 'app-utenti',
  standalone: true,
  imports: [UtenteComponent, UtentiPreferitiComponent],
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.css'
})




//* voglio perscare gli UTENTI CHE GIRANO NEL BACKEND NELLA PORTA:3000 in localhost!
//* per poter utilizzare i metodi dell'http client lo devo iniettare qui nella classe e dichiarare nel main (app.config)
export class UtentiComponent implements OnInit {

  private httpClient = inject(HttpClient); // prendiamo tutti i metodi HTTP dall' @angular core
  private usersService = inject(UtentiService);
  private destroyHref = inject(DestroyRef); // TODO serve a distruggere la chiamata NON IMPLEMENTATO


  utenti = signal<Utente[] | undefined>(undefined);
  isFetching = signal<boolean>(false); // inizialmente false, quando poi viene fatto il next:, viene settato il valore a true


  // getUsers() {
  //   // andiamo a fare il metodo GET del db locale:3000, e nestare dei metodi come la fetch su JS/TS
  //   // andiamo poi a settare i dati presi dalla GET tramite signals agli utenti
  //   this.httpClient.get<Utente[]>("http://localhost:3000/users")
  //     .subscribe({
  //       next: (resData) => {
  //         this.utenti.set(resData); // settiamo i dati tramite signals alla proprietà utenti
  //         console.log(`gli utenti segnati sono i seguenti:`);
  //         console.log(resData);
  //       }
  //     });
  // }

  //* voglio caricare gli utenti nel momento in cui accedo alla pagina utilizzando -> "ngOnInit" e mi permette di implementare l'intefaccia
  //* ATTENZIONE: il metodo ngOnInit viene chiamato un attimo dopo il costruttore,
  //*** ngOnInit viene rendirizzato ed eseguito dopo il montaggio del component ***
  ngOnInit() {
    // const subscription = this.httpClient.get<Utente[]>("http://localhost:3000/users")
    //   .subscribe({
    //     next: (resData) => {
    //       this.utenti.set(resData); // settiamo i dati tramite signals alla proprietà utenti
    //       console.log(`gli utenti segnati sono i seguenti:`);
    //       console.log(resData);
    //     },
    //     // viene eseguito al completamento di next: simuliamo un caricamento di 2s prima di reindirizzare sull'HTML tutti i dati degli utenti
    //     complete: () => {
    //       setTimeout(() => {
    //         this.isFetching.set(true)
    //       }, 2000);
    //     }
    //   });

    const subscription = this.usersService.loadUtenti()
      .subscribe({
        next: (resData) => {
          this.utenti.set(resData);
        },
        complete: () => {
          setTimeout(() => {
            this.isFetching.set(true)
          }, 2000);
        }
      })
  }


  // ----------------------------------------------------


  // TODO IMPLEMENTARE LA POST DEGLI UTENTI DA NORMALI A PREFERITI TRAMITE SERVICES
  onSelectedUser(user: Utente) {

    // questo metodo eseguira la post su http://localhost:3000/usersPrefered, acceta l'api http e l'oggetto con le proprietà POST da aggiungere
    this.httpClient.post("http://localhost:3000/usersPrefered", {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      image: user.image
    })
      .subscribe({
        next: (resData) => {
          console.log(`ho appena aggiunto questo utente agli utenti preferiti: ${user.firstname}:`);
          console.log(resData);
        }
      });

  }



}
