import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, style, animate, transition, group, query } from '@angular/animations';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        group([
          query(':enter', [
            style({ opacity: 0, transform: 'translateX(100%)' }),
            animate('300ms ease', style({ opacity: 1, transform: 'translateX(0%)' })),
          ], { optional: true }),
          query(':leave', [
            animate('300ms ease', style({ opacity: 0, transform: 'translateX(-100%)' })),
          ], { optional: true }),
        ]),
      ]),
    ]),
  ],
})

export class AppComponent implements OnInit {
  
  isMenuVisible = false;

  constructor(private router: Router,  private authService: AuthService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isMenuVisible = event.url !== '/menu-dificuldade' && event.url !== '/pokedex' && event.url !== '/batalha' && event.url !== '/ajuda';
      }
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isMenuVisible = false;
      }
    });
  }

  getRouterOutletState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
