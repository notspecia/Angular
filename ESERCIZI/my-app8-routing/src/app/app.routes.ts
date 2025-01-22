/* 
*LE ROTTE SONO DEGLI ARRAY, pero nel momento in cui dichiariamo le rotte:
01. ha importanza ORDINE DI DICHIARAZIONE
02. non posso usare i semplici "href" (perche aggiornano la pagina quando cambio la rotta) ma utilizzare i "routerLink" devo importare nell "app.component.ts" il RouterLink
*/
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UtentiComponent } from './utenti/utenti.component';
import { UtenteComponent } from './utenti/utente/utente.component';
import { StudentiComponent } from './studenti/studenti.component';
import { CorsoComponent } from './corso/corso.component';
import { NotFoundComponent } from './not-found/not-found.component';


// implementiamo le rotte con la combinazione path + component renderizzato
// LE ROTTE CHILDREN vengono concatenate in automatico, adesso dovrò utilizzare un routerOutlet all'interno dei component studenti per arrivare a corso
export const routes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "utenti", component: UtentiComponent,
        children: [
            { path: "userId", component: UtenteComponent }
        ]
    },
    {
        path: "studenti", component: StudentiComponent,
        children: [
            { path: "corso", component: CorsoComponent }
        ]
    },

    { path: "not-found", component: NotFoundComponent },
    { path: "**", redirectTo: "not-found" }
];
