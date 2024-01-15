import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DificuldadeService {
  
  //responsável por armazenar e fornecer a dificuldade selecionada no menu-dificuldade
  private dificuldadeSelecionada = new BehaviorSubject<string>('');

  setDificuldade(dificuldade: string): void {
    this.dificuldadeSelecionada.next(dificuldade);
  }

  getDificuldade(): BehaviorSubject<string> {
    return this.dificuldadeSelecionada;
  }
}
