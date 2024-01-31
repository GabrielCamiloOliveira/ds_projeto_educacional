import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MensagemService } from 'src/app/services/mensagem.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CadastroFormService } from 'src/app/services/cadastro-form.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  userForm!: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private messagemService: MensagemService,
    private router: Router,
    private authService: AuthService,
    private cadastroFormService: CadastroFormService,
  ) {}

  /* Inicialização do formulário */
  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.userForm.get('email')!;
  }
  get senha() {
    return this.userForm.get('senha')!;
  }

  submit() {
    this.authService.login(this.userForm.value);
    console.log(this.userForm.value);
  }

}
