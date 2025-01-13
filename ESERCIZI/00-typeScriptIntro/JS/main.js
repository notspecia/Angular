let nome = "Gabriele";
let cognome = "Speciale";
let eta = 20;
let presenta = true;

// prendiamo il div con l'id apposito
const demo = document.querySelector("div#demo");

demo.textContent = `ciao mi presento sono: ${nome} ${cognome},  e ho ${eta} anni`;

class Studente {

    constructor(nome, cognome, matricola, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
        this.eta = eta;
    }

    presentati = function () {
        return "ciao mi ..."
    }
}