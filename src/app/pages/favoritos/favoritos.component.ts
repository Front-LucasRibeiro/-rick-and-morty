import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

import { InfoContentComponent } from '../../components/info-content/info-content.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet, CardComponent, InfoContentComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})
export class FavoritosComponent {
  titlePage = 'Favoritos'
  mensagemInfo = {
    textInfo: 'Parece que você ainda não tem favoritos',
    textSugest: 'Volte à página inicial e escolha os melhores para você.',
    buttonShow: true,
    buttonLink: '/',
    buttonText: 'Voltar ao início'
  }
  cards = [

  ]
}
