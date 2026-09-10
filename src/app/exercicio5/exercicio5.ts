import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio5',
  imports: [CommonModule, FormsModule],
  templateUrl: './exercicio5.html',
  styleUrl: './exercicio5.css'
})
export class Exercicio5 {

  email = '';
  senha = '';
  logado = false;

  emailValido() {
    return this.email.includes('@');
  }

  senhaValida() {
    return this.senha.length >= 6;
  }

  login() {
    this.logado = true;
  }

}
