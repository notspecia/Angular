import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lez8ServicesComponent } from "./lez8-services/lez8-services.component";
import { Lez8EsempioComponent } from "./lez8-esempio/lez8-esempio.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Lez8ServicesComponent, Lez8EsempioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'dependecies-injection';
}
