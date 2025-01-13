import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})


export class TaskComponent {

  //*** ANDIAMO AD INNIETTARE QUI DENTRO I METODI PRESI DAL `tasks.service.ts` ***
  private taskService = inject(TasksService);

  @Input() task!: Task;


  onComplete() {
    this.taskService.removeTask(this.task.id);
  }

}
