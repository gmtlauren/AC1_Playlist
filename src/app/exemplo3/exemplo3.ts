import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-exemplo3',
  styleUrl: './exemplo3.css',
  templateUrl: './exemplo3.html',
})
export class Exemplo3 {
  nome: string = '';
}
