export interface Corso {
    id?: string,
    nome: string,
    descrizione: string,
    immagine: string
    istruttore: string,
    durata: number,
    prenotazioniMax: number,
    prenotazioniAttuali: number,
}