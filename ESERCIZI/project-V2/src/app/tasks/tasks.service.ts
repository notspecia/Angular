import { Injectable } from '@angular/core';
import { LISTA_TASKS } from './lista-tasks';
import { NewTask, Task } from './task/task.model';



@Injectable({
  providedIn: 'root'
})



export class TasksService {

  //*** uso private perchè voglio proteggere questa lista di tasks***
  private tasks = LISTA_TASKS;


  constructor() {
    const tasks = localStorage.getItem("tasks");

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  private saveTask() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }


  // questo metodo mi restituisce i task per singolo user che viene selezionato
  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  // rimozione della task completata (servizio ora passato al figlio `task.component.ts`)
  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  // aggiunta di una task passando 2 parametri (una parte della task), userId preso in input da `tasks.component`
  addTask(task: NewTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate

    });
  }
}
