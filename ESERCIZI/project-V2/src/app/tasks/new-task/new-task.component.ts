import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';



@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, CardComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})



export class NewTaskComponent {

  //*** ANDIAMO AD INNIETTARE QUI DENTRO I METODI PRESI DAL `tasks.service.ts` ***
  private taskService = inject(TasksService);

  // teniamo solo il CLOSE non piu anche l ADD
  @Output() close = new EventEmitter<void>();
  @Input({ required: true }) userId!: string; // NUOVO, dobbiamo ricevere l'id di quell'utente ora! 

  enteredTitle!: string;
  enteredSummary!: string;
  enteredDate!: string;

  isInvalid: boolean = false;

  onClose() {
    this.close.emit();
  }


  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    },
      this.userId);
  }
}
