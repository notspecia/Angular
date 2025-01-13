import { Component } from "@angular/core";

@Component({
    selector: "app-studenti",                    // Nome del tag HTML personalizzato per usare questo componente
    standalone: true,                            // Il componente può essere usato senza essere registrato in un modulo
    imports: [],                                 // Qui puoi importare altri moduli necessari (es. RouterModule, FormsModule)
    templateUrl: "./studenti.component.html",    // Percorso del file HTML che definisce la UI
    styleUrl: "./studenti.component.css",        // Percorso del file CSS per lo stile del componente
})

export class StudentiComponent {

    nome: string = "Gabriele";

    constructor() {
        console.log("ciao da studenti");
    }
}