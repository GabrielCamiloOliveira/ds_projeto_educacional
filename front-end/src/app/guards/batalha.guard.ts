import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DificuldadeService } from '../services/dificuldade.service';

@Injectable({
  providedIn: 'root',
})
export class BatalhaGuard implements CanActivate {
  constructor(private dificuldadeService: DificuldadeService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const dificuldadeSelecionada = this.dificuldadeService.getDificuldade().getValue();

    if (dificuldadeSelecionada) {
      return true; // Permite a navegação para a rota
    } else {
      // Redireciona de volta para o menu de dificuldade se a dificuldade não estiver definida
      this.router.navigate(['/menu-dificuldade']);
      return false;
    }
  }
}
