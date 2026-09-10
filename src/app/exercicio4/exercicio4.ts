import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio4',
  imports: [CommonModule, FormsModule],
  templateUrl: './exercicio4.html',
  styleUrl: './exercicio4.css'
})
export class Exercicio4 {

  alunos = [
    { nome: 'João' },
    { nome: 'Maria' }
  ];

  novoAluno = '';

  editando = -1;

  adicionar() {
    if (this.novoAluno !== '') {
      this.alunos.push({ nome: this.novoAluno });
      this.novoAluno = '';
    }
  }

  editar(index: number) {
    this.editando = index;
  }

  salvar() {
    this.editando = -1;
  }

  remover(index: number) {
    this.alunos.splice(index, 1);
  }

}
