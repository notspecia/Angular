import { Component } from "@angular/core";
import { SecondoComponent } from "../secondo-component/secondo-component.component";


@Component({
    selector: "app-primo",                           // Nome del tag HTML personalizzato per usare questo componente
    standalone: true,                                // Il componente può essere usato senza essere registrato in un modulo
    imports: [SecondoComponent],                     // Qui puoi importare altri moduli necessari (es. RouterModule, FormsModule)
    templateUrl: "./primo-component.component.html", // Percorso del file HTML che definisce la UI
    styleUrl: "./primo-component.component.css",     // Percorso del file CSS per lo stile del componente
})


// senza export non posso vederla fuori da qua ed IMPORTARLA DENTRO IL app.component.ts
export class PrimoComponentComponent {
    nome: string = "Gabriele";
    citta: string = "Torino";
    sede: string = "Piazza dei mestieri";
    numPartecipanti: number = 30;
    reactCorso!: string;   // se non viene dichiarato un valore che verrà dato prima o poi, mettiamo un ! prima dei :

    constructor() {
        console.log(`studio a ${this.sede}`);
        this.assegnaRespo("Davide");
    }

    assegnaRespo(nomeProfReact: string) {
        this.reactCorso = nomeProfReact;
    }
}
