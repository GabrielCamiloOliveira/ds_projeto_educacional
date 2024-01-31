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
  showColecaoInfo = false;
  showAprenderInfo = false;
  showAjudaInfo = false;
  MenuText = "Menu Principal";
  ExercicioTexto = "Enfrente e colete Pokémons adversários ao <br> resolver expressões numéricas. Escolha seu <br> Pokémon na Coleção, avance para niveis mais <br> desafiadores e fortaleça suas habilidades <br> matemáticas!";
  ColecaoTexto = "Consulte seus pokémons adquiridos nos exercicios <br> e descrubra curiosidades sobre eles!";
  AprenderTexto = "Visualize exemplos de exercicios resolvidos, <br> aprenda como funcionam os operadores <br> matemáticos e como resolver uma expressão!  ";
  AjudaTexto = "Entenda mais sobre as funcionalidades da aplicação <br> ou altere suas informações pessoais";

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
      /*const route = '/ajuda';
      this.menuButtonClick.emit(route);
      this.router.navigate([route]);*/
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

  showExerciseInfoMethod(): void {
    this.showExerciseInfo = true;
    this.updateExerciseInfo('assets/images/exercicioPreview.png', 'Texto dinâmico do exercício');
  }
  
  hideExerciseInfo(): void {
    this.showExerciseInfo = false;
  }

addEventListeners(): void {
  const buttonExercicios = document.querySelector('.buttonExercicios') as HTMLButtonElement;
  const buttonAjuda = document.querySelector('.buttonAjuda') as HTMLButtonElement;
  const buttonAprender = document.querySelector('.buttonAprender') as HTMLButtonElement;
  const buttonColecao = document.querySelector('.buttonColecao') as HTMLButtonElement;

  if (buttonExercicios) {
    buttonExercicios.addEventListener('mouseover', () => this.showExerciseInfoMethod());
    buttonExercicios.addEventListener('mouseout', () => this.hideExerciseInfo());
  }

  if (buttonAjuda) {
    buttonAjuda.addEventListener('mouseover', () => this.showAjudaInfoMethod());
    buttonAjuda.addEventListener('mouseout', () => this.hideAjudaInfo());
  }

  if (buttonAprender) {
    buttonAprender.addEventListener('mouseover', () => this.showAprenderInfoMethod());
    buttonAprender.addEventListener('mouseout', () => this.hideAprenderInfo());
  }

  if (buttonColecao) {
    buttonColecao.addEventListener('mouseover', () => this.showColecaoInfoMethod());
    buttonColecao.addEventListener('mouseout', () => this.hideColecaoInfo());
  }
}

showAjudaInfoMethod(): void {
  this.showAjudaInfo = true;
  this.updateAjudaInfo('assets/images/ajudaPreview.png', 'Texto dinâmico de Ajuda');
}

hideAjudaInfo(): void {
  this.showAjudaInfo = false;
}

updateAjudaInfo(imageSrc: string, text: string): void {
  const ajudaImage = document.querySelector('.ajuda-image') as HTMLImageElement;
  const ajudaText = document.querySelector('.ajuda-text') as HTMLElement;

  if (ajudaImage) {
    ajudaImage.src = imageSrc;
  }

  if (ajudaText) {
    ajudaText.textContent = text;
  }
}

showAprenderInfoMethod(): void {
  this.showAprenderInfo = true;
  this.updateAprenderInfo('assets/images/aprenderPreview.png', 'Texto dinâmico de Aprender');
}

hideAprenderInfo(): void {
  this.showAprenderInfo = false;
}

updateAprenderInfo(imageSrc: string, text: string): void {
  const aprenderImage = document.querySelector('.aprender-image') as HTMLImageElement;
  const aprenderText = document.querySelector('.aprender-text') as HTMLElement;

  if (aprenderImage) {
    aprenderImage.src = imageSrc;
  }

  if (aprenderText) {
    aprenderText.textContent = text;
  }
}

showColecaoInfoMethod(): void {
  this.showColecaoInfo = true;
  this.updateColecaoInfo('assets/images/colecaoPreview.png', 'Texto dinâmico de Coleção');
}

hideColecaoInfo(): void {
  this.showColecaoInfo = false;
}

updateColecaoInfo(imageSrc: string, text: string): void {
  const colecaoImage = document.querySelector('.colecao-image') as HTMLImageElement;
  const colecaoText = document.querySelector('.colecao-text') as HTMLElement;

  if (colecaoImage) {
    colecaoImage.src = imageSrc;
  }

  if (colecaoText) {
    colecaoText.textContent = text;
  }
}

  retornarHome(): void {
    this.router.navigate(['/']); //
  }
}