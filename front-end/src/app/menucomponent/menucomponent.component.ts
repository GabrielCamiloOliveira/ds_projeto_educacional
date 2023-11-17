import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menucomponent',
  templateUrl: './menucomponent.component.html',
  styleUrls: ['./menucomponent.component.scss']
})
export class MenucomponentComponent {

  constructor(private router: Router) {}

  handleButtonClick(imageLink: string): void {
    // Lógica para lidar com o clique do botão
    console.log(`Botão clicado! Imagem: ${imageLink}`);
    this.router.navigate(['/pokemon-details']);
  }

}
