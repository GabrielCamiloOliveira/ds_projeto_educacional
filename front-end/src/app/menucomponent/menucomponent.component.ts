import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menucomponent',
  templateUrl: './menucomponent.component.html',
  styleUrls: ['./menucomponent.component.scss']
})
export class MenucomponentComponent implements AfterViewInit {

  constructor(private router: Router) {}

  @Output() menuButtonClick = new EventEmitter<string>();

  handleButtonClick(imageLink: string): void {
    // Lógica para lidar com o clique do botão
    console.log(`Botão clicado! Imagem: ${imageLink}`);

    if (imageLink.includes('exercicios')) {
      this.router.navigate(['/pokemon-details']);
    } else if (imageLink.includes('colecao')) {
      const route = '/pokedex'; // Defina a rota desejada
      this.menuButtonClick.emit(route); // Emite o evento para o AppComponent
      this.router.navigate([route]);
    }
  }

  ngAfterViewInit(): void {
    // Selecione o elemento de áudio e ajuste o volume para 1%
    const audioElement = document.querySelector('audio');
    if (audioElement) {
      audioElement.volume = 0.01;
    }
  }
}
