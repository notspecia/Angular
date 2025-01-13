import { Component } from "@angular/core";


@Component({
    selector: "app-secondo",                           // Nome del tag HTML personalizzato per usare questo componente
    standalone: true,                                  // Il componente può essere usato senza essere registrato in un modulo
    imports: [],                                       // Qui puoi importare altri moduli necessari (es. RouterModule, FormsModule)
    templateUrl: "./secondo-component.component.html", // Percorso del file HTML che definisce la UI
    styleUrl: "./secondo-component.component.css",     // Percorso del file CSS per lo stile del componente
})


// lo rendiamo disponibile all'esterno
export class SecondoComponent {
    nome: string = "Gabriele"; // se volessimo usare questa proprietà con interpolazione in SECONDO-COMPONENT, dobbiamo per adesso crearlo anche li
}
