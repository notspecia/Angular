import { Component, Input } from '@angular/core';
import { type taskModel } from '../../models/tasks.model';
import { type userModel } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { LISTA_TASKS } from '../../databases/LISTA_TASKS';




@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})




export class NewTaskComponent {

  // prendiamo in Input dai genitori:
  // 01. l'utente selezionato con le sue proprietà
  // 02. le tasksUtente dal genitore `tasks.component` di quell'utente
  @Input() userScelto!: userModel;
  @Input() tasksUtente!: taskModel[];


  /*
  * passaggio per Riferimento: Se modifichi direttamente un elemento dell'array delle task nel figlio, 
  * il genitore vedrà quelle modifiche. 
  * 
  * Angular utilizza il change detection per aggiornare il DOM quando rileva cambiamenti nei dati.
  */



  //* creazione delle proprietà per creazione di un nuovo oggetto task
  // buona norma avere i nomi uguali tra il campo in input e il nome della proprietà sul quale farò il BINDING (legame)
  id: string = "";
  userId: string = "";
  titolo: string = "";
  descrizione: string = "";
  dueDate: string = "";

  // alert mostrato nella UI con del contenuto quando si presenta un problema nella compilazione dei forms
  alert: string = "";


  onSubmitTask() {

    // mettiamo del conenuto alla proprietà alert! in caso mancassero dei campi da riempire
    if (!this.titolo || !this.descrizione || !this.dueDate) {
      this.alert = "Stai dimenticando qualcosa da qualche parte!";
      return;
    }

    // assegnamo l'id task utente dall'id dell'utente selezionato, e un id random da dare alla task!
    this.userId = this.userScelto.id;
    this.id = new Date().getTime().toString();

    // aggiungiamo al DB delle tasks (globalmente) la nuova task con riferimento verso l'utente specifico (tramite userId)
    LISTA_TASKS.push(
      {
        id: this.id,
        userId: this.userId,
        title: this.titolo,
        summary: this.descrizione,
        dueDate: this.dueDate
      });


    // resettiamo le proprietà per permettere di aggiungere altre tasks
    this.id = "";
    this.titolo = "";
    this.descrizione = "";
    this.dueDate = "";

    // resettiamo l'alert di errore se mancano dei campi input da riempire 
    this.alert = "";

  }

}

