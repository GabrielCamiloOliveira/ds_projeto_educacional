import { Component, OnInit, OnDestroy } from '@angular/core';
import { DificuldadeService } from '../services/dificuldade.service';
import * as math from 'mathjs';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-batalha',
  templateUrl: './batalha.component.html',
  styleUrls: ['./batalha.component.scss']
})
export class BatalhaComponent implements OnInit, OnDestroy {
handleButtonClick(arg0: string) {
throw new Error('Method not implemented.');
}

  dificuldadeSelecionada!: string;
  dificuldadeSubscription: Subscription | undefined;

  enunciado = "Assinale o resultado da expressao:";
  expressao!: String;
  enemyPokemon!: String;

  resposta1!: number;
  resposta2!: number;
  resposta3!: number;
  resposta4!: number;

  enemyname!: string;

  username = "Usuário";

  constructor(private router: Router, private dificuldadeService: DificuldadeService, private pokeapiService: PokeapiService) {}

  ngOnInit(): void {

        // Cancela inscrição anterior se existir
        if (this.dificuldadeSubscription) {
          this.dificuldadeSubscription.unsubscribe();
        }
    
        // Obtém a dificuldade do serviço
        this.dificuldadeSubscription = this.dificuldadeService.getDificuldade().subscribe(dificuldade => {
        this.dificuldadeSelecionada = dificuldade;
        console.log(this.expressao = this.generateExpression(dificuldade).expression);
        });
  }

  ngOnDestroy(): void {
    // Cancela a inscrição ao destruir o componente
    if (this.dificuldadeSubscription) {
      this.dificuldadeSubscription.unsubscribe();
    }
  }
  

  ////////////////////////////////////////////////////// ARMAZENANDO VARIÁVEIS //////////////////////////////////////////////////////

  
  generateExpression(level: string): { expression: string; correctResult: number; fakeResults: number[] } {
    let numOperators: number;
    let maxNumber: number;
    let startId: number;
    let endId: number;
  
    switch (level) {
      case 'Iniciante':
        numOperators = this.getRandomInt(2, 4);
        maxNumber = 10;
        startId = 1;
        endId = 36;
        break;
      case 'Moderado':
        numOperators = this.getRandomInt(3, 6);
        maxNumber = 15;
        startId = 37;
        endId = 73;
        break;
      case 'Experiente':
        numOperators = this.getRandomInt(4, 7);
        maxNumber = 20;
        startId = 74;
        endId = 111;
        break;
      case 'Mestre':
        numOperators = this.getRandomInt(5, 8);
        maxNumber = 30;
        startId = 112;
        endId = 151;
        break;
      default:
        throw new Error('Nível inválido.');
    }
  
    let expression: string;
    let correctResult: number = 0; // Inicializando com um valor padrão
    let fakeResults: number[] = [];
  
    do {
      expression = this.generateRandomExpression(numOperators, maxNumber);

      try {
        correctResult = this.evaluateExpression(expression);
      } catch (error) {
        console.error('Erro ao avaliar a expressão:', expression, error);
        continue; // Gera uma nova expressão se ocorrer um erro na avaliação
      }

      fakeResults = this.generateFakeResults(correctResult);
    } while (this.hasMoreThanTwoDecimalPlaces(correctResult));
  
    // Obtém um Pokémon aleatório com base na dificuldade
    this.pokeapiService.getPokemonRandomInRange(startId, endId).subscribe((pokemon: any) => {
    const pokemonSprite = pokemon.sprites.front_default;
    console.log('Sprite do Pokémon:', pokemonSprite);
    this.enemyPokemon = pokemonSprite;
    this.enemyname = this.capitalizeFirstLetter(pokemon.name);
    // Agora você pode exibir o sprite na tela
  });

    this.resposta1 = fakeResults[0];
    this.resposta2 = fakeResults[1];
    this.resposta3 = fakeResults[2];
    this.resposta4 = fakeResults[3];

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

  private hasMoreThanTwoDecimalPlaces(result: number): boolean {
    const decimalPart = result.toString().split('.')[1];
  
    return !!(decimalPart && decimalPart.length > 2);
  }
  


  ////////////////////////////////////////////////////// MÉTODO DE RETORNO //////////////////////////////////////////////////////


  retornarHome(): void {
    this.router.navigate(['/menu-dificuldade']); //
  }


  ////////////////////////////////////////////////////// MÉTODO UPPERCASE //////////////////////////////////////////////////////


  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
}

