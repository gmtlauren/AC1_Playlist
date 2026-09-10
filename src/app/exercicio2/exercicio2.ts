import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  imports: [],
  templateUrl: './exercicio2.html',
  styleUrl: './exercicio2.css'
})
export class Exercicio2{

  produtos = [
    { nome: 'Arroz', quantidade: 10, preco: 25 },
    { nome: 'Feijão', quantidade: 5, preco: 8 }
  ];

  getTotal() {
    let total = 0;

    for (let produto of this.produtos) {
      total += produto.quantidade * produto.preco;
    }

    return total;
  }
}