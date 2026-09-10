import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio3',
  imports: [CommonModule],
  templateUrl: './exercicio3.html',
  styleUrl: './exercicio3.css'
})
export class Exercicio3 {

  perguntas = [
    {
      pergunta: 'Qual é a capital do Brasil?',
      opcoes: ['São Paulo', 'Brasília', 'Rio de Janeiro', 'Salvador'],
      resposta: 1
    },
    {
      pergunta: 'Quanto é 2 + 2?',
      opcoes: ['3', '4', '5', '6'],
      resposta: 1
    },
    {
      pergunta: 'Qual linguagem é usada para estilizar páginas web?',
      opcoes: ['HTML', 'JavaScript', 'CSS', 'Java'],
      resposta: 2
    },
    {
      pergunta: 'Qual destes é um framework JavaScript?',
      opcoes: ['Angular', 'MySQL', 'HTML', 'CSS'],
      resposta: 0
    },
    {
      pergunta: 'Qual linguagem usamos para programação orientada a objetos?',
      opcoes: ['Java', 'HTML', 'CSS', 'SQL'],
      resposta: 0
    }
  ];

  indice = 0;
  pontos = 0;
  respondido = false;
  finalizado = false;
  mensagem = '';

  responder(opcao: number) {

    if (opcao === this.perguntas[this.indice].resposta) {
      this.pontos++;
      this.mensagem = 'Correto!';
    } else {
      this.mensagem = 'Errado!';
    }

    this.respondido = true;
  }

  proximaPergunta() {

    this.indice++;
    this.respondido = false;

    if (this.indice >= this.perguntas.length) {
      this.finalizado = true;
    }
  }
}
