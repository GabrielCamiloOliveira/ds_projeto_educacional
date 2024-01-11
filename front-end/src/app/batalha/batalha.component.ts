import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { DificuldadeService } from '../services/dificuldade.service';
import * as math from 'mathjs';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokeapiService } from '../services/pokeapi.service';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-batalha',
  templateUrl: './batalha.component.html',
  styleUrls: ['./batalha.component.scss'],
})
export class BatalhaComponent implements OnInit, OnDestroy {
  
  constructor(private router: Router,
    private dificuldadeService: DificuldadeService,
    private pokeapiService: PokeapiService,
    private cdr: ChangeDetectorRef,
    private authService: AuthService) {}

  @Input() lifeEnemyWidth: number = 14.4; // Inicialmente, a barra de vida está cheia
  @Input() lifeUserWidth: number = 13.8; // Inicialmente, a barra de vida está cheia
  lifeUserDamage!: number; //Dano sofrido ao errar
  lifeEnemyDamage!: number; //Dano causado ao acertar

  indexBox = 0;
  numberOfClicks = 0;

  resultado!: boolean;
  winnerImgSrc!: string;
  isPokemonVisible = false;
  
  acertouQuestao = false;
  errouQuestao = false;

  mostrarSeletorImagem: boolean = false;
  botaoComMouseEmCima: number | null = null;

mostrarSeletor(event: MouseEvent, mostrar: boolean): void {
  this.mostrarSeletorImagem = mostrar;

  if (mostrar) {
    // Obtém o número do botão do evento
    const botao =
    (event.target as HTMLElement).classList.contains('resposta1') ? 1 :
    (event.target as HTMLElement).classList.contains('resposta2') ? 2 :
    (event.target as HTMLElement).classList.contains('resposta3') ? 3 :
    (event.target as HTMLElement).classList.contains('resposta4') ? 4 : null;

    if (botao !== null) {
      this.botaoComMouseEmCima = botao;
    }
  } else {
    this.botaoComMouseEmCima = null;
  }
}

  handleButtonClick(resposta: number): void {
    const respostaCorreta = this.verificarResposta(resposta);
    const tolerance = 1e-10; // Definindo uma tolerância adequada para não causar bugs ao calcular a % de vida

    if (respostaCorreta) {
        this.acertouQuestao = true;
        console.log('Resposta correta!');
        this.ativarAnimacaoHit(1);
        if (this.lifeEnemyWidth - this.lifeEnemyDamage > 0) {
            this.lifeEnemyWidth = (this.lifeEnemyWidth - this.lifeEnemyDamage);
            this.cdr.detectChanges();
            this.regenerarExpressao();
          
            if (this.lifeEnemyWidth <= tolerance) {
                this.lifeEnemyWidth = 0;
                this.indexBox = -1;
                this.enunciado = "Você venceu! <br> Clique para continuar...";
                this.expressao = "";
                this.resultado = true;
            }
        } else {
            this.lifeEnemyWidth = 0;
            this.indexBox = -1;
            this.enunciado = "Você venceu! <br> Clique para continuar...";
            this.expressao = "";
            this.resultado = true;
        }

        setTimeout(() => {
          this.acertouQuestao = false;
        }, 2000);

    } else {
        this.errouQuestao = true;
        this.ativarAnimacaoHit(2);
        if (this.lifeUserWidth - this.lifeUserDamage > 0) {
            this.lifeUserWidth = (this.lifeUserWidth - this.lifeUserDamage);
            this.regenerarExpressao();

            if (this.lifeUserWidth <= tolerance) {
                this.lifeUserWidth = 0;
                this.indexBox = -1;
                this.expressao = "";
                this.enunciado = "Você perdeu... <br> Clique para voltar ao menu...";
                this.resultado = false;
            }
        } else {
            this.lifeUserWidth = 0;
            this.indexBox = -1;
            this.expressao = "";
            this.enunciado = "Você perdeu... <br> Clique para voltar ao menu...";
            this.resultado = false;
        }
        setTimeout(() => {
          this.errouQuestao = false;
        }, 2000);
    }
}

handleBlueboxClick() {

    if(this.numberOfClicks == 0){
      if(this.resultado == true){
        this.isPokemonVisible = true;

        //fazer um if desse para cada dificuldade (verifica a dificuldade atual)
        const usuarioAtualizado: Usuario = { ...this.authService.usuario, pIniciante: 3, pokemons: [this.enemyPokemonNumber]};
        this.authService.updateUsuario(usuarioAtualizado).subscribe(response => {
        // Lógica para lidar com a resposta (se necessário)
        });

        this.enunciado = this.enemyname + " foi adicionado à sua coleção! <br> Clique para continuar...";
        this.numberOfClicks++;
      }
      else {
        this.router.navigate(['/menu-dificuldade']);;
        this.numberOfClicks++;
      }
    }

    else if(this.numberOfClicks == 1){
      if(this.resultado == true){
        this.router.navigate(['/menu-dificuldade']);;
      }
      else {
        this.router.navigate(['/menu-dificuldade']);
      }
    }
  }

  dificuldadeSelecionada!: string;
  dificuldadeSubscription: Subscription | undefined;

  enunciado = "Assinale o resultado da expressao:";
  expressao!: String;
  enemyPokemon!: String;
  enemyPokemonNumber!: number;

  resposta1!: number;
  resposta2!: number;
  resposta3!: number;
  resposta4!: number;

  enemyname!: string;
  startId!: number;
  endId!: number;
  pokemonList!: number[];

  username = "Usuário";
  userPokemon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
  correctResult: number = 0;

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
        this.pokemonList = [1,4,7,10,11,13,14,16,19,21,23,29,32,35,39,41,50,63,72,74,81,
        90,92,100,102,109,114,116,118,129,138,140];
      }
      else if (dificuldade == "Moderado") {
        this.pokemonList = [2,5,8,17,20,22,24,25,27,30,33,36,37,40,42,43,46,48,51,52,
        54,56,58,60,64,66,69,75,77,79,83,84,86,88,113,120,127,133,137,139,147,104,106];
      }
      else if (dificuldade == "Experiente") {
        this.pokemonList = [3,6,9,12,15,18,26,28,31,34,38,44,47,49,53,55,57,61,67,70,78,80,
        82,85,87,89,91,93,96,98,101,107,110,111,117,119,121,132,134,141,135,136];
      }
      else {
        this.pokemonList = [45,59,62,65,68,71,73,76,94,95,97,99,103,108,112,115,122,
        123,124,125,126,128,130,131,142,143,144,145,146,148,149,150,151];
      }
      });

      // Obtém um Pokémon aleatório com base na dificuldade
      this.pokeapiService.getPokemonRandomInList(this.pokemonList).subscribe((pokemon: any) => {
      const pokemonSprite = pokemon.sprites.versions['generation-v']['black-white'].animated.front_default;
      this.winnerImgSrc = pokemon.sprites.other['official-artwork'].front_default;
      console.log(this.winnerImgSrc);
      this.enemyPokemon = pokemonSprite;
      this.enemyname = this.capitalizeFirstLetter(pokemon.name);
      this.enemyPokemonNumber = pokemon.id; //atribui o id do pokémon atual para a variável
      // Agora você pode exibir o sprite na tela
    });

    switch (this.dificuldadeSelecionada) {
      case 'Iniciante':
        this.lifeUserDamage = 3.45;
        this.lifeEnemyDamage = 14.4;
        break;
      case 'Moderado':
        this.lifeUserDamage = 6.21;
        this.lifeEnemyDamage = 10.8;
        break;
      case 'Experiente':
        this.lifeUserDamage = 10.35;
        this.lifeEnemyDamage = 6.48;
        break;
      case 'Mestre':
        this.lifeUserDamage = 13.8;
        this.lifeEnemyDamage = 3.6;
        break;
  
        throw new Error('Erro ao determinar os valores de dano.');
    }
  
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
      let operand = this.getRandomInt(0, maxNumber); // Gera um número aleatório

              // Se o operador escolhido for de divisão, garanta que o novo número não seja zero
              if (operator === '/' && operand === 0) {
                operand = this.getRandomInt(1, maxNumber);
            }

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

    // Método para ativar a animação no elemento com a classe enemyImg
  private ativarAnimacaoHit(number: number): void {
    // Substitua 'enemyImg' pelo nome da classe do elemento desejado
    const element = document.querySelector('.enemyImg');

    if (element) {
      if(number == 1){
        this.addHitAnimation('enemyImg');
      }
      else {
        this.addHitAnimation('userImg');
      }
    }
  }

private addHitAnimation(elementId: string) {
  const element = document.querySelector(`.${elementId}`);
  if (element) {
    // Adiciona a classe apenas se ela ainda não estiver presente
    if (!element.classList.contains('hit-animation')) {
      element.classList.add('hit-animation');
      // Remove a classe após a animação terminar
      setTimeout(() => {
        element.classList.remove('hit-animation');
      }, 1000); // Ajuste o tempo para coincidir com a duração da animação
    }
  } else {
    console.error(`Elemento com classe ${elementId} não encontrado.`);
  }
}

}


