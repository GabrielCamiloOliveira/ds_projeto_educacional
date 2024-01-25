import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  showCadastroForm = false;
  showLoginForm = true;

  openCadastroForm() {
    this.showCadastroForm = true;
    this.showLoginForm = false;
  }
}