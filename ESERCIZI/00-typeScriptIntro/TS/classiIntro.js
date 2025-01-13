//! private -> la proprietà definita cosi non è accessibile o visibile al di fuori della classe
//! public -> va usato se non vengono definite prima le proprieta e i valori prima del costruttore
var Auto = /** @class */ (function () {
    // ishybrid viene dichiarata come private nei parametri del costruttore, quindi non è necessario riassegnarla esplicitamente.
    // dopo definisco i metodi, IL COSTRUTTORE viene chiamato SUBITO
    function Auto(marca, modello, cilindrata, ishybrid) {
        this.ishybrid = ishybrid;
        this.km = 0;
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;
        // ishybrid viene dichiarata come private nei parametri del costruttore, quindi non è necessario riassegnarla esplicitamente.
    }
    // definiamo un metodo alla classe, OBBLIGATI A PASSARE UN NUMBER, non possiamo come JS concatenare stringa + number
    Auto.prototype.guida = function (distanza) {
        this.km += distanza;
        return this.km;
    };
    // in questo caso andiamo a specificare che il valore di `return` del metodo è di tipo STRING!
    Auto.prototype.accendi = function () {
        return "WROOMMM, but wait my car is hybrid? ".concat(this.ishybrid);
    };
    return Auto;
}());
var miaAuto = new Auto("Toyota", "Mazda", 780, true); // creiamo un'istanza della classe auto, passando i parametri al costruttore
console.log(miaAuto.modello);
// console.log(miaAuto.isHybrid); // NON E ACCESSIBILE PERCHE è PRIVATE!
console.log(miaAuto.guida(30));
console.log(miaAuto.accendi());
var Persona = /** @class */ (function () {
    // direttamente il costruttore senza definire le proprietà perchè usiamo PUBLIC
    function Persona(nome, cognome, codFiscale) {
        this.nome = nome;
        this.cognome = cognome;
        this.codFiscale = codFiscale;
        //* POSSO ANCHE NON SPECIFICARE LA DEFINIZIONE ATTRAVERSO IL THIS, viene già fatto in automatico
    }
    // metodo che va a prendere le proprietà passate alla classe ritornando OBBLIGATORIALMENTE UNA STRINGA
    Persona.prototype.presentati = function () {
        return "ciao mi chiamo ".concat(this.nome, " ").concat(this.cognome, ", ho il seguente codice fiscale: ").concat(this.codFiscale);
    };
    // metodo che acceta come parametri delle STRING, in caso sono valide invoca il  -> metodo presentati()
    Persona.prototype.accediAlleInfo = function (username, password) {
        if (username === "Gabriele" && password === "1234") {
            return this.presentati();
        }
        else {
            return "credenziali non valide!";
        }
    };
    return Persona;
}());
var persona1 = new Persona("Gabriele", "Speciale", "JFDSJFS249848JFDSJ");
console.log(persona1.nome);
// console.log(persona1.codFiscale); // NON E ACCESSIBILE PERCHE è PRIVATE!
console.log(persona1.accediAlleInfo("Gabriele", "1234")); // passiamo dei parametri validi al metro per vedere le nostre informazioni
//* --------------------------------------- ESEMPIO DI UNA CLASSE IN JS ----------------------------------------------
// // CLASS for the creation of `video` istances
// class Video {
//     // constructor function to assign the title and seconds to the video
//     constructor(config) {
//         this.title = config.title || "untitled";
//         this.seconds = config.seconds || null;
//     }
//     /* creation of an method that can be used by the requests created both with:
//     `Video` that with `MusicVideo` (also inheritance this class `extends`) */
//     watch() {
//         if (this.seconds) {
//             console.log(`you watched ${this.seconds} seconds of ${this.title}`);
//         } else {
//             console.log(`you watched all seconds of ${this.title}`);
//         }
//     }
// }
