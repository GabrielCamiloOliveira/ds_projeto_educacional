import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { Response } from '../interfaces/mensagem-sistema';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  /* private baseApiUrl = environment.baseApiUrl; */
  /* Base da API*/
  private baseApiUrl = 'http://localhost:8080/api';

  /* Especificando a URL */
  private apiUrl = `${this.baseApiUrl}/v1/student`;

  constructor(private http: HttpClient) { }

  /* Criar Usuario no sistema */
  createUsuario(usuario: any): Observable<any>{
    const data = {
      username: usuario.username,
      email: usuario.email,
      password: usuario.senha,
    };
    console.log(data);
    const result = this.http.post(this.apiUrl, data);
    return result;
  }

  /* Pegar um Cliente no sistema pelo ID */
  getUsuario(id: number): Observable<Response<Usuario>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Usuario>>(url);
  }

  login(email: string, senha: string): Observable<Usuario> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    // Codificando os parâmetros de senha e email para garantir que caracteres especiais sejam tratados corretamente
    const encodedEmail = encodeURIComponent(email);
    const encodedSenha = encodeURIComponent(senha);
  
    // Alterando para uma solicitação GET
    return this.http.get<Usuario>(`${this.baseApiUrl}/v1/student/login?email=${encodedEmail}&senha=${encodedSenha}`, { headers: headers });
  }


  /* Pegar um Cliente no sistema pelo email e senha */
  getUsuarioLogin(email: string, senha: string): Observable<Response<Usuario>> {
    const url = `${this.apiUrl}/login/${email}/${senha}`;
    return this.http.get<Response<Usuario>>(url);
  }
  
  updateUsuario(usuario: any): Observable<any>{
    const data = {
      username: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
      achievementList: usuario.achievementList,
      pokemonAtual : usuario.pokemonAtual,
      progressoFacil: usuario.progressoFacil,
      progressoMedio: usuario.progressoMedio,
      progressoDificil: usuario.progressoDificil,
      progressoInsano: usuario.progressoInsano,
    };
    
    // Inclua o username na URL
    const url = `${this.apiUrl}/${usuario.username}`;
  
    // Use a URL corrigida no método PUT
    const result = this.http.put(url, data);
    return result;
  }
  

  /* Armazenar o ID do usuário para Navegar com seus dados*/
  private userId: number=0;

  setUserId(id: number) {
    this.userId = id;
  }

  getUserId() {
    return this.userId;
  }
  
}
