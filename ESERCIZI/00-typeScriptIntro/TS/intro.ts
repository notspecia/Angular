//! tenere aperto un file JS con variabili uguali a quelle di TS potrebbe mostrare degli errori

const PI: number = 3.14;

//* ----------------------------------------------------------------------------------------------------------------

// tipi di dato, non è + mandato al browser perchè NON sa leggere alcuni tipi!
let nome: string = "Gabriele";
let cognome: string = "Speciale";
let eta: number = 18;
// eta = "ciao"; non si può saltare da un tipo di dato ad un altro

// non sono OBBLIGATO a dichiarare il tipo. Per cui verrà interpretato
let presentazione = `Ciao mi chiamo ${nome} ${cognome}, ho ${eta} anni`;
console.log(presentazione);

//* ----------------------------------------------------------------------------------------------------------------

// non posso fare in questo caso array misti! tutti gli elementi saranno di tipo STRING
let materie: string[] = [
    "JS",
    "ANGULAR",
    "REACT",
    "JAVA",
    "C++"
];

// per non renderlo tipizzato uguale a JS, in cui si può riassegnare un tipo diverso che si voglia da un altro usiamo `any`
let corso: any;
corso = "Web Dev";
corso = 42;
corso = true;

// la mia auto può avere 2 tipi di dato differente in questo caso
let automobile: string | boolean;
automobile = "Toyota";
automobile = true;

//* ----------------------------------------------------------------------------------------------------------------

// tipo custom, una variabile di questo tipo può assumere uno qualsiasi dei valori specificati nella dichiarazione.
type animaleDomestico = "Scimmia" | "Gatto" | boolean;
let mioAnimaleDomestico: animaleDomestico = "Gatto";


/* Una variabile di tipo motocicletta deve essere un oggetto che possiede TUTTE le proprietà indicate di quel TIPO:
- marca (di tipo string)
- modello (di tipo string)
- cilindrata (di tipo number)
- km (di tipo number). */
type motocicletta = {
    marca: string,
    modello: string,
    cilindrata: number,
    km: number
}

let miaMotocicletta: motocicletta = {
    marca: "Toyota",
    modello: "Mazda",
    cilindrata: 800,
    km: 343000
}

//* ----------------------------------------------------------------------------------------------------------------

// prendiamo il div con l'id apposito

/*In TypeScript, l'errore o avviso "può essere null" si verifica perché il metodo 
document.querySelector può potenzialmente restituire null se non trova un elemento corrispondente al selettore specificato. */
const demo = document.querySelector("div#demo");
demo.innerHTML = "<h2>" + presentazione + "<\h2>";