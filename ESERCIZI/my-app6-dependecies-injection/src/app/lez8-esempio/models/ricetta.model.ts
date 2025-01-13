export interface Ricetta {
    id: string;
    nome: string;
    descrizione: string;
    ingredienti: Ingrediente[];
}

export interface Ingrediente {
    nome: string,
    quantita: number,
    disponibilita: boolean
}