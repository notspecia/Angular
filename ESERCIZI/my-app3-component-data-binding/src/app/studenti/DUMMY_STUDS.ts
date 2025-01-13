// questo è l'interfaccia di configurazione dello studente (è la stessa cosa dell'oggetto di configurazione messo direttamente qua)
// buona norma andare aggiungere il `type` per capire per noi umani che effettivamente QUESTO NON E UN COMPONENT
import { type Studente } from "./studente/studente.model";

// lo andiamo ad importare questo array di studenti all'interno di studenti.components.ts
export const DUMMY_STUDS: Studente[] = [
    {
        id: "s5",
        nome: "Marco",
        cognome: "Rottani",
        immagine: "IMG/giorgia.png"
    },
    {
        id: "s6",
        nome: "Giacomo",
        cognome: "Destro",
        immagine: "IMG/eva.jpg"
    }
]