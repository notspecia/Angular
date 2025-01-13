import { Responsabile } from "./responsabile/responsabile.model";

// creiamo questo file per contenere tutte le infotamzioni sui responsabili separatemente da poi integrare con l'interface e il PADRE LEZ4-STATEMENT
export const RESPO_DB: Responsabile[] = [
    {
        id: "r1",
        nome: "Giovanni",
        cognome: "Rossi",
        corsi: ["Matematica", "Fisica", "Geometria", "Storia"]
    },
    {
        id: "r2",
        nome: "Maria",
        cognome: "Verdi",
        corsi: ["Informatica", "Statistica", "Programmazione"]
    },
    {
        id: "r3",
        nome: "Luca",
        cognome: "Bianchi",
        corsi: ["Chimica", "Biologia"]
    },
    {
        id: "r4",
        nome: "Anna",
        cognome: "Neri",
        corsi: ["Letteratura", "Storia", "Filosofia"]
    }
]