import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    } else {
      this.router.navigate(['/']); // Redireciona para o LoginComponent se não estiver autenticado
      return false;
    }
  }
}