import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}
  
  retornarHome(): void {
    this.router.navigate(['/']); //
  }

  handleButtonClick(arg0: string) {
    throw new Error('Method not implemented.');
  }

}
