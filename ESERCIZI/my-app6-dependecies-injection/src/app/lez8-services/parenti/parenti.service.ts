//* file creato tramite il comando da terminale "ng g s lez8-services/parenti/parenti" 
import { Injectable } from '@angular/core';
import { type Parente } from './parente/parente.model';
import { LogService } from '../log.service';


// un service è una classe con decorator @Injectable(), grazie a questo posso inniettare le dipendenze nei component
// che richiedono l'utilizzo
@Injectable({
  providedIn: 'root'
})



export class ParentiService {

  // esportato dal "parenti.component" a QUI DENTRO, creando anche un model di PARENT
  // adesso che la lista dei parenti è private posso accederci solo all'interno della classe stessa
  private listaParenti: Parente[] = [
    {
      id: "p1",
      nome: "Paolo",
      cognome: "Rossi",
      ruolo: "zio"
    },
    {
      id: "p2",
      nome: "Luisa",
      cognome: "Verdi",
      ruolo: "cugina"
    },
    {
      id: "p3",
      nome: "Marco",
      cognome: "Gialli",
      ruolo: "nonno"
    }
  ];

  // nasce il service con il costruttore, POSSO INIETTARE ANCORA UN'ALTRA DIPENDENZA
  constructor(private logService: LogService) { }


  getParenti() {
    this.logService.logUser("Paolo", "Rossi");
    return this.listaParenti;
  }

  // inseriamo qui dentro i metodi di service da inniettare poi
  stampaParenti() {
    this.listaParenti.forEach(parente => {
      console.log(parente.nome, parente.cognome);
    });
  }

  // mi faccio restituire l'array nuovo senza il parente eliminato tramite il (click)
  removeParenteById(id: string) {
    this.listaParenti = this.listaParenti.filter(parente => parente.id !== id)
  }

}
