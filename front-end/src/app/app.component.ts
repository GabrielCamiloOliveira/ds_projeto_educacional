import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenucomponentComponent } from './menucomponent/menucomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';
  public isMenuVisible = true;

  constructor(private router: Router) {}

  handleMenuButtonClick(route: string): void {
    this.isMenuVisible = false; // Oculta o menu
    // Navegue para a rota correspondente
    this.router.navigate([route]);
  }
}
