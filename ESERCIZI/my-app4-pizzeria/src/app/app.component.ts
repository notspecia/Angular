import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PizzeriaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'my-app4-pizzeria';
}
