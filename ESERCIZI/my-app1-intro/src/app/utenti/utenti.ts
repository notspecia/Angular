// file che contiene tanti utenti sottoforma di oggetti

//! andiamo anche a definire i tipi di variabili alle proprietà e le proprietà che si possono inserire ovviamente 
//! DOBBIAMO DEFINIRLO ANCHE DALL'ALTRA PARTE , dobbiamo renderlo uguale anche nel component.ts 

export const utentiFinti: {
    id: string,
    nome: string,
    cognome: string,
    eta: number,
    img: string
}[] = [
        {
            id: "u1",
            nome: "Gabriele",
            cognome: "Speciale",
            eta: 20,
            img: "IMG/gabriele.webp"
        },
        {
            id: "u2",
            nome: "Eva",
            cognome: "Grassini",
            eta: 40,
            img: "IMG/eva.jpg"
        },
        {
            id: "u3",
            nome: "Paolo",
            cognome: "Locali",
            eta: 12,
            img: "IMG/paolo.jpg"
        },
        {
            id: "u4",
            nome: "Giorgia",
            cognome: "Cunica",
            eta: 37,
            img: "IMG/giorgia.png"
        }
    ];