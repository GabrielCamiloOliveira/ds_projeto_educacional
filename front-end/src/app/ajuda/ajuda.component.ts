import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.scss']
})
export class AjudaComponent {
  
  constructor(private router: Router) {}

  retornarHome(): void {
    this.router.navigate(['/']); //
  }

}
