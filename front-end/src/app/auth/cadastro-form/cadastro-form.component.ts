import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario';
import { MensagemService } from 'src/app/services/mensagem.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss'],
})
export class CadastroFormComponent {

  onSubmit = new EventEmitter<Usuario>();
  userForm!: FormGroup;
  btnText = "Enviar";

  constructor(
    private messagemService: MensagemService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required]),
    });
  }

  get username() {
    return this.userForm.get('username')!;
  }

  get email() {
    return this.userForm.get('email')!;
  }

  get senha() {
    return this.userForm.get('senha')!;
  }

   /* Submissão do formulário */
   submit() {

    //console.log(this.userForm);
    if (this.userForm.invalid) { // Se for inválido invalida a submissão
      console.log("Form invalido");
      return this.messagemService.add('Formulário Inválido, verifique se os dados estão corretos!'); ;
    }

    /* Criando um FormData com o formulário completo válidado*/
      if (this.userForm.valid) {
        const formData = {
          username: this.userForm.value.username,
          email: this.userForm.value.email,
          senha: this.userForm.value.senha,
        };
  
        //console.log(this.userForm.value);
        this.onSubmit.emit(this.userForm.value);
        console.log("Enviado");
      }
  }

   /* Metodo assincrono para enviar para API */
  createdHandler(usuario: any) {
    console.log('Usuário recebido:', usuario);
    /* Mudando tipo de dado para JSON */
    const jsonData = JSON.stringify(usuario);

    /* Enviando usuario para o Service */
    this.usuarioService.createUsuario(usuario)
      .pipe(
        catchError((error) => {
          this.messagemService.add('Erro ao criar o usuario: ' + error.error.message);
          console.log("Erro");
          throw error;
        })
      )
      .subscribe(() => {
        this.messagemService.add('Cadastro realizado com sucesso!');
        console.log("Cadastro realizado!");
        this.router.navigate(['/login']);
      });
  }
}
