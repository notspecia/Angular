//! tenere aperto un file JS con variabili uguali a quelle di TS potrebbe mostrare degli errori
var PI = 3.14;
//* ----------------------------------------------------------------------------------------------------------------
// tipi di dato, non è + mandato al browser perchè NON sa leggere alcuni tipi!
var nome = "Gabriele";
var cognome = "Speciale";
var eta = 18;
// eta = "ciao"; non si può saltare da un tipo di dato ad un altro
// non sono OBBLIGATO a dichiarare il tipo. Per cui verrà interpretato
var presentazione = "Ciao mi chiamo ".concat(nome, " ").concat(cognome, ", ho ").concat(eta, " anni");
console.log(presentazione);
//* ----------------------------------------------------------------------------------------------------------------
// non posso fare in questo caso array misti! tutti gli elementi saranno di tipo STRING
var materie = [
    "JS",
    "ANGULAR",
    "REACT",
    "JAVA",
    "C++"
];
// per non renderlo tipizzato uguale a JS, in cui si può riassegnare un tipo diverso che si voglia da un altro usiamo `any`
var corso;
corso = "Web Dev";
corso = 42;
corso = true;
// la mia auto può avere 2 tipi di dato differente in questo caso
var automobile;
automobile = "Toyota";
automobile = true;
var mioAnimaleDomestico = "Gatto";
var miaMotocicletta = {
    marca: "Toyota",
    modello: "Mazda",
    cilindrata: 800,
    km: 343000
};
//* ----------------------------------------------------------------------------------------------------------------
// prendiamo il div con l'id apposito
/*In TypeScript, l'errore o avviso "può essere null" si verifica perché il metodo
document.querySelector può potenzialmente restituire null se non trova un elemento corrispondente al selettore specificato. */
var demo = document.querySelector("div#demo");
demo.innerHTML = "<h2>" + presentazione + "<\h2>";
