import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DificuldadeService } from '../services/dificuldade.service';
import { SharedExpressionService } from '../services/shared-expression.service';

@Component({
  selector: 'app-menu-dificuldade',
  templateUrl: './menu-dificuldade.component.html',
  styleUrls: ['./menu-dificuldade.component.scss']
})
export class MenuDificuldadeComponent {

  textoIniciante = 'Iniciante';
  textoModerado = 'Moderado';
  textoExperiente = 'Experiente';
  textoMestre = 'Mestre';

  progressoIniciante = '40';
  progressoModerado = '20';
  progressoExperiente = '60';
  progressoMestre = '100';

  constructor(private router: Router, private dificuldadeService: DificuldadeService) {}
  
  retornarHome(): void {
    this.router.navigate(['/home']); //
  }

  handleButtonClick(dificuldade: string) {
    // Define a dificuldade no serviço
    console.log(dificuldade);
    this.dificuldadeService.setDificuldade(dificuldade);

    // Router para a tela de batalha
    this.router.navigate(['/batalha']);
  }

}
