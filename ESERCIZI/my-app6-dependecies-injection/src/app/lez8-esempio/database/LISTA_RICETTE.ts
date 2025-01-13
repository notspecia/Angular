import { type Ricetta } from "../models/ricetta.model";


export const LISTA_RICETTE: Ricetta[] = [
    {
        id: "r1",
        nome: "Spaghetti alla Carbonara",
        descrizione: "Un classico della cucina italiana con uova, pancetta e pecorino.",
        ingredienti: [
            { nome: "Spaghetti", quantita: 200, disponibilita: true },
            { nome: "Uova", quantita: 2, disponibilita: true },
            { nome: "Pancetta", quantita: 100, disponibilita: true },
            { nome: "Pecorino", quantita: 50, disponibilita: false }
        ]
    },
    {
        id: "r2",
        nome: "Tiramisù",
        descrizione: "Delizioso dolce italiano a base di mascarpone, caffè e cacao.",
        ingredienti: [
            { nome: "Mascarpone", quantita: 250, disponibilita: true },
            { nome: "Savoiardi", quantita: 150, disponibilita: true },
            { nome: "Caffè", quantita: 200, disponibilita: true },
            { nome: "Cacao", quantita: 30, disponibilita: false }
        ]
    },
    {
        id: "r3",
        nome: "Pizza Margherita",
        descrizione: "La pizza più amata al mondo con pomodoro, mozzarella e basilico.",
        ingredienti: [
            { nome: "Farina", quantita: 500, disponibilita: true },
            { nome: "Pomodoro", quantita: 200, disponibilita: true },
            { nome: "Mozzarella", quantita: 250, disponibilita: false },
            { nome: "Basilico", quantita: 5, disponibilita: true }
        ]
    }
];