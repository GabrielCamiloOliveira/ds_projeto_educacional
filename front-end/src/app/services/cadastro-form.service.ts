import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroFormService {
  private mostrarCadastroSource = new BehaviorSubject<boolean>(false);
  mostrarCadastro$ = this.mostrarCadastroSource.asObservable();

  mostrarCadastro(mostrar: boolean) {
    this.mostrarCadastroSource.next(mostrar);
  }
}
