import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

const LS_CHAVE: string="usuarioLogado"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public get usuarioLogado(): Usuario{
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]): null);
  }

  public set usuarioLogado(usuario: Usuario){
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout(){
    delete localStorage[LS_CHAVE];
  }

}
