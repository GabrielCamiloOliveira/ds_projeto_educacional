import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DificuldadeService } from '../services/dificuldade.service';
import { SharedExpressionService } from '../services/shared-expression.service';
import { AuthService } from '../services/auth.service';

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

  progressoIniciante = this.authService.getPIniciante();
  progressoModerado = this.authService.getPModerado();
  progressoExperiente = this.authService.getPExperiente();
  progressoMestre = this.authService.getPMestre();
  
  constructor(
    private router: Router,
    private dificuldadeService: DificuldadeService,
    private authService: AuthService) {}
  
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
