import { Component, OnInit, OnDestroy, SimpleChanges, OnChanges, Input } from '@angular/core';
import { DificuldadeService } from '../services/dificuldade.service';
import * as math from 'mathjs';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-batalha',
  templateUrl: './batalha.component.html',
  styleUrls: ['./batalha.component.scss'],
})
export class BatalhaComponent implements OnInit, OnDestroy, OnChanges {

  @Input() lifeEnemyWidth: number = 14.4; // Inicialmente, a barra de vida está cheia
  @Input() lifeUserWidth: number = 13.8; // Inicialmente, a barra de vida está cheia

  handleButtonClick(resposta: number): void {
    const respostaCorreta = this.verificarResposta(resposta);

    if (respostaCorreta) {
      console.log('Resposta correta!');

      if (this.lifeEnemyWidth - 3.6 > 0){
        this.lifeEnemyWidth = (this.lifeEnemyWidth - 3.6);
        if (this.lifeEnemyWidth = 0) {
          console.log("Usuário venceu!");
        }
      }
      else {
        this.lifeEnemyWidth = 0;
        console.log("Usuário venceu!");
      }

    } else {
      if (this.lifeUserWidth - 3.45 > 0){
        this.lifeUserWidth = (this.lifeUserWidth - 3.45);
        if (this.lifeUserWidth = 0) {
          console.log("Usuário perdeu...");
        }
      }
      else {
        this.lifeUserWidth = 0;
        console.log("Usuário perdeu...");
      }
      console.log('Resposta incorreta. Gerando nova expressão...');
      this.regenerarExpressao();
    }
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
  startId!: number;
  endId!: number;

  username = "Usuário";
  userPokemon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
  correctResult: number = 0;

  constructor(private router: Router, private dificuldadeService: DificuldadeService, private pokeapiService: PokeapiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    // Verifica se a largura da barra de vida do inimigo mudou
    if (changes['lifeEnemyWidth']) {
        this.addHitAnimation('enemyImg');
        console.log("Vida do inimigo mudou!");
    }

    // Verifica se a largura da barra de vida do usuário mudou
    if (changes['lifeUserWidth']) {
        this.addHitAnimation('userImg');
        console.log("Vida do usuário mudou!");
    }
}


  ngOnInit(): void {

      // Cancela inscrição de dificuldade anterior se existir = gerar apenas 1 expressão ao iniciar
      if (this.dificuldadeSubscription) {
        this.dificuldadeSubscription.unsubscribe();
      }
    
      // Obtém e classifica a dificuldade do serviço
      this.dificuldadeSubscription = this.dificuldadeService.getDificuldade().subscribe(dificuldade => {
      this.dificuldadeSelecionada = dificuldade;
      console.log(this.expressao = this.generateExpression(dificuldade).expression);
      
      if (dificuldade == "Iniciante") {
        this.startId = 1;
        this.endId = 36;
        //safe numbers = 3;
      }
      else if (dificuldade == "Moderado") {
        this.startId = 37;
        this.endId = 73;
      }
      else if (dificuldade == "Experiente") {
        this.startId = 74;
        this.endId = 111;
      }
      else {
        this.startId = 115;
        this.endId = 151;
      }
      });

      // Obtém um Pokémon aleatório com base na dificuldade
      this.pokeapiService.getPokemonRandomInRange(this.startId, this.endId).subscribe((pokemon: any) => {
      const pokemonSprite = pokemon.sprites.versions['generation-v']['black-white'].animated.front_default;
      console.log('Sprite do Pokémon:', pokemonSprite);
      this.enemyPokemon = pokemonSprite;
      this.enemyname = this.capitalizeFirstLetter(pokemon.name);
      // Agora você pode exibir o sprite na tela
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
  
    switch (level) {
      case 'Iniciante':
        numOperators = this.getRandomInt(2, 4);
        maxNumber = 10;
        break;
      case 'Moderado':
        numOperators = this.getRandomInt(3, 6);
        maxNumber = 15;
        break;
      case 'Experiente':
        numOperators = this.getRandomInt(4, 7);
        maxNumber = 20;
        break;
      case 'Mestre':
        numOperators = this.getRandomInt(5, 8);
        maxNumber = 30;
        break;
      default:
        throw new Error('Nível inválido.');
    }
  
    let expression: string;
    let correctResult: number = 0; // Inicializando com um valor padrão
    let fakeResults: number[] = [];

    expression = this.generateRandomExpression(numOperators, maxNumber);

    try {
      correctResult = this.evaluateExpression(expression);
  
      // Arredonda para 2 casas decimais se houver dízima periódica
      correctResult = Number(correctResult.toFixed(2));
    } catch (error) {
      console.error('Erro ao avaliar a expressão:', expression, error);
      throw new Error('Erro na geração de expressão.');
    }
  
    // Gera e arredonda os resultados falsos para 2 casas decimais
    fakeResults = this.generateFakeResults(correctResult);
    fakeResults = fakeResults.map(result => Number(result.toFixed(2)));
  
    this.resposta1 = fakeResults[0];
    this.resposta2 = fakeResults[1];
    this.resposta3 = fakeResults[2];
    this.resposta4 = fakeResults[3];
    this.correctResult = correctResult;
  
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


  ////////////////////////////////////////////////////// MÉTODO UPPERCASE //////////////////////////////////////////////////////


  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  

  verificarResposta(respostaSelecionada: number): boolean {
    return respostaSelecionada === this.correctResult;
  }

  regenerarExpressao(): void {
    this.expressao = this.generateExpression(this.dificuldadeSelecionada).expression
  }

  ////////////////////////////////////////////////////// ANIMAÇÃO DE HIT //////////////////////////////////////////////////////

    // Método para adicionar a classe de animação
    private addHitAnimation(elementId: string) {
      const element = document.querySelector(`.${elementId}`);
      // Adiciona a classe apenas se ela ainda não estiver presente
      if (element && !element.classList.contains('hit-animation')) {
          element.classList.add('hit-animation');
          // Remove a classe após a animação terminar
          setTimeout(() => {
              element.classList.remove('hit-animation');
          }, 1000); // Ajuste o tempo para coincidir com a duração da animação
      }
  }
}


