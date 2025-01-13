import { Component, EventEmitter, Input, Output } from '@angular/core';
import { taskModel } from '../../models/tasks.model';




@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})




export class TaskComponent {

  // input una della task singola, all'interno delle task di quell'utente
  @Input({ required: true }) task!: taskModel;


  //-----------------------------------------


  // inviamo al genitore `tasks.component` l'id della task completata in questione, tramite @Output event emitter
  @Output() taskCompleted = new EventEmitter<string>();

  onComplete() {
    console.log(`ho completato la task con l'id ${this.task.id}`);
    this.taskCompleted.emit(this.task.id);
  }

}
