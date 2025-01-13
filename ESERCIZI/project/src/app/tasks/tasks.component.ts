import { Component, Input } from '@angular/core';
import { type userModel } from '../models/user.model';
import { type taskModel } from '../models/tasks.model';
import { LISTA_TASKS } from '../databases/LISTA_TASKS';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";



@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})




export class TasksComponent {

  @Input({ required: true }) userScelto!: userModel;


  // creiamo una variabile contenente tutte le tasks DI TUTTI GLI UTENTI dal DB esterno
  tasks: taskModel[] = LISTA_TASKS;


  // tramite un getter, andiamo ad aggiornare le tasks filtrandole e assegnandole all'utente se combaciano con l'id dell'utente
  get tasksUtente() {
    return this.tasks.filter((task) => {
      return task.userId === this.userScelto.id;
    });
  }


  // -------------------------------------------------


  // riceviamo in @Output dal figlio l'id della task da rimuovere nel DB delle tasks generali
  onComplete(idTask: string) {
    this.tasks = this.tasks.filter((task) => {
      return task.id !== idTask;
    });
  }

}
