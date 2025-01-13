import { Component } from '@angular/core';


@Component({
  selector: 'app-esercizio-strobo',
  standalone: true,
  imports: [],
  templateUrl: './esercizio-strobo.component.html',
  styleUrl: './esercizio-strobo.component.css'
})



export class EsercizioStroboComponent {

  // prima  poi questa proprietà avra un colore random generato ogni evento scattato!
  bgColor!: string;

  // metodo che scatta quando si passa sopra alla ball con il mouse
  onChangeBgColor() {
    this.bgColor = `rgb(${this.randomChoiceColor(255)} ${this.randomChoiceColor(255)} ${this.randomChoiceColor(255)})`;
  }

  private randomChoiceColor(color: number) {
    return Math.floor(Math.random() * color);
  }

}
