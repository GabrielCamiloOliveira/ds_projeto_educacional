import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menucomponent',
  templateUrl: './menucomponent.component.html',
  styleUrls: ['./menucomponent.component.scss'],
})

export class MenucomponentComponent implements AfterViewInit {

  isMenuVisible = true;
  @Output() menuButtonClick = new EventEmitter<string>();

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isMenuVisible = !(event.url === '/menu-dificuldade' || event.url === '/pokedex');
      }
    });
  }

  handleButtonClick(imageLink: string): void {

    if (imageLink.includes('exercicios')) {
      const route = '/menu-dificuldade';
      this.menuButtonClick.emit(route);
      this.router.navigate([route]);

    } else if (imageLink.includes('colecao')) {
      const route = '/pokedex';
      this.menuButtonClick.emit(route);
      this.router.navigate([route]);
    }
  }

  ngAfterViewInit(): void {
    const audioElement = document.querySelector('audio');
    if (audioElement) {
      audioElement.volume = 0.01;
    }
  }
}