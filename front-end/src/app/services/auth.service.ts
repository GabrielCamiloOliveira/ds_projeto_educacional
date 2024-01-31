import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../interfaces/login';
import { Usuario } from '../interfaces/usuario';
import { UsuarioService } from './usuario.service';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/mensagem-sistema';
import { Achievement } from '../interfaces/achievement';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router,
              private usuarioService: UsuarioService,
    ) { }

  jsonData: any;
  usuario!: Usuario;

  /* Fazer login no Sistema*/
  login(Usuario: any) {

    //chega até aqui
    this.usuarioService.login(Usuario.email, Usuario.senha).subscribe((item) => {
      // Precisa transformar em JSON para funcionar
      this.jsonData = item;
      this.usuario = this.jsonData;
  
      if (this.usuario) {
        this.usuarioAutenticado = true;
        this.usuarioService.setUserId(this.usuario.id);
        this.router.navigate(['/home']);
      }
    });
  }

  updateUsuario(usuario: Usuario): Observable<Response<Usuario>> {
    return this.usuarioService.updateUsuario(usuario);
  }
  
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  getPIniciante(): number {
    // Verifica se o usuário está definido e retorna pIniciante
    return this.usuario?.progressoFacil ?? 0;
  }

  getPModerado(): number {
    // Verifica se o usuário está definido e retorna pIniciante
    return this.usuario?.progressoMedio ?? 0;
  }

  getPExperiente(): number {
    // Verifica se o usuário está definido e retorna pIniciante
    return this.usuario?.progressoDificil ?? 0;
  }
  
  getPMestre(): number {
    // Verifica se o usuário está definido e retorna pIniciante
    return this.usuario?.progressoInsano ?? 0;
  }

  getPokemonList(): Achievement[] {
    // Verifica se o usuário está definido e retorna pIniciante
    return this.usuario?.achievementList ?? 0;
  }

}
