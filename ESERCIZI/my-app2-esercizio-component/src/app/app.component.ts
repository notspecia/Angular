import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentiComponent } from './studenti-component/studenti.component';
import { DocentiComponent } from './docenti-component/docenti.component';
import { RespoComponent } from './respo-component/respo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentiComponent, DocentiComponent, RespoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  nome: string = "Giancarlo";
  title = 'my-app2-esercizio-component';
}
