import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { MensagemService } from 'src/app/services/mensagem.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrls: ['./new-usuario.component.scss']
})

export class NewUsuarioComponent {

  constructor(private usuarioService: UsuarioService,
  private messagemService: MensagemService,
  private router: Router){ }
    
   /* Metodo assincrono para enviar para API */
   async createdHandler(usuario: any) {
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

  retornarLogin() {
    this.router.navigate(['/login']); //retorna para a tela de login
  }
}
