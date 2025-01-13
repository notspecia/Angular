import { Component } from "@angular/core";

@Component({
    selector: "app-docenti",                    // Nome del tag HTML personalizzato per usare questo componente
    standalone: true,                           // Il componente può essere usato senza essere registrato in un modulo
    imports: [],                                // Qui puoi importare altri moduli necessari (es. RouterModule, FormsModule)
    templateUrl: "./docenti.component.html",    // Percorso del file HTML che definisce la UI
    styleUrl: "./docenti.component.css",        // Percorso del file CSS per lo stile del componente
})

export class DocentiComponent {


    constructor() {
        console.log("ciao da docenti");
    }
}