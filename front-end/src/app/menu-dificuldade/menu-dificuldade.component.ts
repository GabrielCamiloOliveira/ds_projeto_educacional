import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DificuldadeService } from '../services/dificuldade.service';

@Component({
  selector: 'app-menu-dificuldade',
  templateUrl: './menu-dificuldade.component.html',
  styleUrls: ['./menu-dificuldade.component.scss']
})
export class MenuDificuldadeComponent {

  textoIniciante = 'Iniciante';
  descIniciante1 = '+'
  descIniciante2 = '-'
  descIniciante3 = 'x'

  textoModerado = 'Moderado';
  descModerado1 = '()'
  descModerado2 = '÷'

  textoExperiente = 'Experiente';
  descExperiente1 = '[]'
  descExperiente2 = 'x²'

  textoMestre = 'Mestre';
  descMestre1 = '{}'
  descMestre2 = '√'

  progressoIniciante = '40';
  progressoModerado = '20';
  progressoExperiente = '60';
  progressoMestre = '100';

  constructor(private router: Router, private dificuldadeService: DificuldadeService) {}
  
  retornarHome(): void {
    this.router.navigate(['/']); //
  }

  handleButtonClick(dificuldade: string) {
    // Define a dificuldade no serviço
    console.log(dificuldade);
    this.dificuldadeService.setDificuldade(dificuldade);

    // Router para a tela de batalha
    this.router.navigate(['/batalha']);
  }

}
