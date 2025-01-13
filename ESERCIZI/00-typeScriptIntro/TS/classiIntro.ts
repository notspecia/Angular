//! private -> la proprietà definita cosi non è accessibile o visibile al di fuori della classe
//! public -> va usato se non vengono definite prima le proprieta e i valori prima del costruttore

class Auto {

    // PRIMA DEFINIAMO le proprietà e i valori di un type accetati , poi dopo i costruttori e i metodi
    marca: string;
    modello: string;
    cilindrata: number;
    km: number = 0;
    // ishybrid viene dichiarata come private nei parametri del costruttore, quindi non è necessario riassegnarla esplicitamente.

    // dopo definisco i metodi, IL COSTRUTTORE viene chiamato SUBITO
    constructor(marca: string, modello: string, cilindrata: number, private ishybrid: boolean) {
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;
        // ishybrid viene dichiarata come private nei parametri del costruttore, quindi non è necessario riassegnarla esplicitamente.
    }

    // definiamo un metodo alla classe, OBBLIGATI A PASSARE UN NUMBER, non possiamo come JS concatenare stringa + number
    guida(distanza: number): number {
        this.km += distanza;
        return this.km;
    }

    // in questo caso andiamo a specificare che il valore di `return` del metodo è di tipo STRING!
    accendi(): string {
        return `WROOMMM, but wait my car is hybrid? ${this.ishybrid}`;
    }
}


let miaAuto = new Auto("Toyota", "Mazda", 780, true); // creiamo un'istanza della classe auto, passando i parametri al costruttore

console.log(miaAuto.modello);
// console.log(miaAuto.isHybrid); // NON E ACCESSIBILE PERCHE è PRIVATE!

console.log(miaAuto.guida(30));
console.log(miaAuto.accendi());









class Persona {

    // direttamente il costruttore senza definire le proprietà perchè usiamo le chiavi di definizione!
    constructor(public nome: string, public cognome: string, private codFiscale: string) {
    }

    // metodo che va a prendere le proprietà passate alla classe ritornando OBBLIGATORIALMENTE UNA STRINGA
    presentati(): string {
        return `ciao mi chiamo ${this.nome} ${this.cognome}, ho il seguente codice fiscale: ${this.codFiscale}`;
    }

    // metodo che acceta come parametri delle STRING, in caso sono valide invoca il  -> metodo presentati()
    accediAlleInfo(username: string, password: string): string {
        if (username === "Gabriele" && password === "1234") {
            return this.presentati();
        } else {
            return "credenziali non valide!";
        }
    }

}



let persona1 = new Persona("Gabriele", "Speciale", "JFDSJFS249848JFDSJ");

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