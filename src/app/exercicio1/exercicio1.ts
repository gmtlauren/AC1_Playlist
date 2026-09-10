import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  imports: [],
  templateUrl: './exercicio1.html',
  styleUrl: './exercicio1.css'
})
export class Exercicio1 {
  idade: number = 22;
  getAnoNascimento(): number {
    return new Date().getFullYear() - this.idade;
  }

}
