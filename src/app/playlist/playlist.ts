import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './playlist.html',
  styleUrls: ['./playlist.css']
})

/* Criar uma lista com pelo menos cinco músicas; */
export class Playlist {

  musicas: string[] = [
    'Little Things - One Direction',
    'Drag me Down - One Direction',
    'Long Way Down - One Direction',
    'Diana - One Direction',
    'Sweet Child O Mine - Guns N Roses'
  ];

  /* Criar uma variável para armazenar a música selecionada */
  musicaSelecionada: string | null = null;

  /* Criar uma variável para receber uma nova música; */
  novaMusica: string = '';

  /* Criar uma variável booleana para indicar se a música está tocando; */
  tocando: boolean = false;

  /* Criar um contador de curtidas. */
  curtidas: number = 0;


  /* Permitir selecionar uma música */
  selecionarMusica(musica: string): void {
    this.musicaSelecionada = musica;
  }


  /* Adicionar uma nova música */
  adicionarMusica(): void {
    if (this.novaMusica.trim() !== '') {
      this.musicas.push(this.novaMusica);
      this.novaMusica = '';
    }
  }


  /* Alternar entre reproduzir e pausar */
  alternarReproducao(): void {
    this.tocando = !this.tocando;
  }


  /* Aumentar o número de curtidas */
  curtir(): void {
    this.curtidas++;
  }

}