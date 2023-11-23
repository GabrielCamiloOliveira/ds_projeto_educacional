import { Component, OnInit } from '@angular/core';
import { DificuldadeService } from '../services/dificuldade.service';
import * as math from 'mathjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batalha',
  templateUrl: './batalha.component.html',
  styleUrls: ['./batalha.component.scss']
})
export class BatalhaComponent implements OnInit {

  dificuldadeSelecionada!: string;

  constructor(private router: Router, private dificuldadeService: DificuldadeService) {}

  ngOnInit(): void {

    // Obtém a dificuldade do serviço
    this.dificuldadeService.getDificuldade().subscribe(dificuldade => {
    this.dificuldadeSelecionada = dificuldade;
    console.log(this.generateExpression(dificuldade));
    });
  }
  

  ////////////////////////////////////////////////////// ARMAZENANDO VARIÁVEIS //////////////////////////////////////////////////////

  
  generateExpression(level: string): { expression: string; correctResult: number; fakeResults: number[] } {
    let numOperators: number;
    let maxNumber: number;
  
    switch (level) {
      case 'Iniciante':
        numOperators = this.getRandomInt(2, 4);
        maxNumber = 20;
        break;
      case 'Moderado':
        numOperators = this.getRandomInt(3, 6);
        maxNumber = 35;
        break;
      case 'Experiente':
        numOperators = this.getRandomInt(4, 7);
        maxNumber = 60;
        break;
      case 'Mestre':
        numOperators = this.getRandomInt(5, 8);
        maxNumber = 100;
        break;
      default:
        throw new Error('Nível inválido.');
    }
  
    const expression = this.generateRandomExpression(numOperators, maxNumber);
    let correctResult: number = 0; // Inicializando com um valor padrão
    let fakeResults: number[] = [];
  
    try {
      correctResult = this.evaluateExpression(expression);
      fakeResults = this.generateFakeResults(correctResult);
    } catch (error) {
      console.error('Erro ao avaliar a expressão:', expression, error);
    }
  
    //console.log('Expressão gerada:', expression);
    //console.log('Resultado correto:', correctResult);
  
    return { expression, correctResult, fakeResults };
  }
  
  
  ////////////////////////////////////////////////////// ALGORITMO DE EXPRESSÕES //////////////////////////////////////////////////////


  private generateRandomExpression(numOperators: number, maxNumber: number): string {
    let expression = this.getRandomInt(0, maxNumber).toString(); // Inicia com um número aleatório
  
    for (let i = 0; i < numOperators; i++) {
      const operator = this.getRandomOperator(); // Gera um operador aleatório
      const operand = this.getRandomInt(0, maxNumber); // Gera um número aleatório
      expression += ` ${operator} ${operand}`; // Insere um operador e um operando para cada iteração
    }
  
    return expression.trim(); // Remova espaços extras no início e no final
  }


  private getRandomOperator(): string {
    const operators = ['+', '-', '*', '/']; //falta implementar com potência e raiz
    return operators[this.getRandomInt(0, operators.length-1)];
  }


  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  private evaluateExpression(expression: string): number {
    try {
      // Removendo espaços extras antes de avaliar
      expression = expression.replace(/\s+/g, '');
      return math.evaluate(expression);
    } catch (error) {
      console.error('Erro ao avaliar a expressão:', expression, error);
      throw error;
    }
  }


  private generateFakeResults(correctResult: number): number[] {
    const fakeResults = [correctResult];

    for (let i = 0; i < 3; i++) {
      let fakeResult: number;

      // Gerar resultados falsos diferentes do resultado correto
      do {
        fakeResult = this.getRandomInt(correctResult - 10, correctResult + 10);
      } while (fakeResults.includes(fakeResult));
      
      fakeResults.push(fakeResult);
    }
    return this.shuffleArray(fakeResults);
  }


  private shuffleArray(array: number[]): number[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  ////////////////////////////////////////////////////// MÉTODO DE RETORNO //////////////////////////////////////////////////////


  retornarHome(): void {
    this.router.navigate(['/menu-dificuldade']); //
  }
}