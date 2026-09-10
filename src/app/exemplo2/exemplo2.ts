import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-exemplo2',
  styleUrl: './exemplo2.css',
  templateUrl: './exemplo2.html',
})
export class Exemplo2 {
contador: number = 0;
incrementar() { this.contador++; }
decrementar() { this.contador--; }
}
