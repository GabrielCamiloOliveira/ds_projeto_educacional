import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../interfaces/login';
import { Usuario } from '../interfaces/usuario';
import { UsuarioService } from './usuario.service';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/mensagem-sistema';

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
  login(login: Login) {

    this.usuarioService.getUsuarioLogin(login.email, login.senha).subscribe((item) => {
      // Precisa transformar em JSON para funcionar
      this.jsonData = item;
      this.usuario = this.jsonData;
  
      if (this.usuario) {
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
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
    return this.usuario?.pIniciante ?? 0;
  }

  getPModerado(): number {
    // Verifica se o usuário está definido e retorna pIniciante
    return this.usuario?.pModerado ?? 0;
  }

  getPExperiente(): number {
    // Verifica se o usuário está definido e retorna pIniciante
    return this.usuario?.pExperiente ?? 0;
  }
  
  getPMestre(): number {
    // Verifica se o usuário está definido e retorna pIniciante
    return this.usuario?.pMestre ?? 0;
  }

  getPokemonList(): number[] {
    // Verifica se o usuário está definido e retorna pIniciante
    return this.usuario?.pokemons ?? 0;
  }

}
