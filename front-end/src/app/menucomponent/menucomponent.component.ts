import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menucomponent',
  templateUrl: './menucomponent.component.html',
  styleUrls: ['./menucomponent.component.scss'],
})

export class MenucomponentComponent implements AfterViewInit {

  isMenuVisible = true;
  showExerciseInfo = false;
  MenuText = "Menu Principal";
  ExercicioTexto = "Enfrente e colete Pokémons adversários ao <br> resolver expressões numéricas. Escolha seu <br> Pokémon na Coleção, avance para niveis mais <br> desafiadores e fortaleça suas habilidades <br> matemáticas!";

  @Output() menuButtonClick = new EventEmitter<string>();

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isMenuVisible = !(event.url === '/menu-dificuldade' || event.url === '/pokedex');
      }
    });
  }

  ngAfterViewInit(): void {
    const audioElement = document.querySelector('audio');
    if (audioElement) {
      audioElement.volume = 0.01;
    }
    this.addEventListeners();
  }

  handleButtonClick(imageLink: string): void {

    if (imageLink.includes('exercicios')) {
      
      this.showExerciseInfo = true;
      const route = '/menu-dificuldade';
      this.menuButtonClick.emit(route);
      this.router.navigate([route]);

    } else if (imageLink.includes('colecao')) {
      const route = '/pokedex';
      this.menuButtonClick.emit(route);
      this.router.navigate([route]);

    } else if (imageLink.includes('ajuda')) {
      const route = '/ajuda';
      this.menuButtonClick.emit(route);
      this.router.navigate([route]);
    }
  }

  updateExerciseInfo(imageSrc: string, text: string): void {
    const exerciseImage = document.querySelector('.exercise-image') as HTMLImageElement;
    const exerciseText = document.querySelector('.exercise-text') as HTMLElement;
  
    if (exerciseImage) {
      exerciseImage.src = imageSrc;
    }
  
    if (exerciseText) {
      exerciseText.textContent = text;
    }
  }

  addEventListeners(): void {
    const buttonExercicios = document.querySelector('.buttonExercicios') as HTMLButtonElement;
  
    if (buttonExercicios) {
      buttonExercicios.addEventListener('mouseover', () => this.showExerciseInfoMethod());
      buttonExercicios.addEventListener('mouseout', () => this.hideExerciseInfo());
    }
  }
  
  showExerciseInfoMethod(): void {
    this.showExerciseInfo = true;
    this.updateExerciseInfo('assets/images/exercicioPreview.png', 'Texto dinâmico do exercício');
  }
  
  hideExerciseInfo(): void {
    this.showExerciseInfo = false;
  }

  retornarHome(): void {
    this.router.navigate(['/']); //
  }
}