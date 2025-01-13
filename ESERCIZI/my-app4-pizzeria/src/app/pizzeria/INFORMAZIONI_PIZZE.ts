// importiamo il modello del TYPE di interfaccia di come è composta la Pizza {nome, prezzo...}
import { Pizza } from "./pizza/pizza.model";

// array contenente le pizze e le loro info / dati con un customtype `Pizza` implementato in pizza.model.ts
export const INFORMAZIONI_PIZZE: Pizza[] = [
    {
        nome: "Margherita",
        disponibilita: true,
        prezzo: 6.5,
        ingredienti: ["Pomodoro", "Mozzarella", "Basilico"]
    },
    {
        nome: "Diavola",
        disponibilita: true,
        prezzo: 8.0,
        ingredienti: ["Pomodoro", "Mozzarella", "Salame Piccante"]
    },
    {
        nome: "Quattro Formaggi",
        disponibilita: false,
        prezzo: 9.0,
        ingredienti: ["Mozzarella", "Gorgonzola", "Parmigiano", "Provola"]
    },
    {
        nome: "Capricciosa",
        disponibilita: true,
        prezzo: 9.5,
        ingredienti: ["Pomodoro", "Mozzarella", "Prosciutto Cotto", "Carciofi", "Funghi", "Olive"]
    },
    {
        nome: "Vegetariana",
        disponibilita: false,
        prezzo: 7.5,
        ingredienti: ["Pomodoro", "Mozzarella", "Zucchine", "Peperoni", "Melanzane"]
    }
];