import { Component } from '@angular/core';
import { VideogamesComponent } from "./videogames/videogames.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VideogamesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'esercitazione-videogames';
}
