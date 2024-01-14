import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { Response } from '../interfaces/mensagem-sistema';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  /* private baseApiUrl = environment.baseApiUrl; */
  /* Base da API*/
  private baseApiUrl = 'http://localhost:8080/api/educacional';

  /* Especificando */
  private apiUrl = `${this.baseApiUrl}/usuario`;

  constructor(private http: HttpClient) { }

  /* Criar Usuario no sistema */
  createUsuario(usuario: any): Observable<any>{
    const data = {
      username: usuario.username,
      email: usuario.email,
      senha: usuario.senha,
    };
    const result = this.http.post(this.apiUrl, data);
    return result;
  }

  /* Pegar um Cliente no sistema pelo ID */
  getUsuario(id: number): Observable<Response<Usuario>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Usuario>>(url);
  }

  /* Pegar um Cliente no sistema pelo email e senha */
  getUsuarioLogin(email: string, senha: string): Observable<Response<Usuario>> {
    const url = `${this.apiUrl}/${email}/${senha}`;
    return this.http.get<Response<Usuario>>(url);
  }
  
  updateUsuario(cliente: any): Observable<any>{
    const data = {
      username: cliente.nome,
      email: cliente.email,
      senha: cliente.senha,
      pokemons: cliente.pokemons.add.pokemons,
      pokemonAtual : cliente.pokemonAtual,
      pIniciante: cliente.pIniciante,
      pModerado: cliente.pModerado,
      pExperiente: cliente.pExperiente,
      pMestre: cliente.pMestre,
    };
    const result = this.http.put(this.apiUrl, data);
    return result;
  }

  /* Armazenar o ID do usuário para Navegar com os dados dele*/
  private userId: number=0;

  setUserId(id: number) {
    this.userId = id;
  }

  getUserId() {
    return this.userId;
  }

}
