import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { selectFavoritos } from '../../store/selectors/personagens.selectors';
import { Store } from '@ngrx/store';
import { InfoContentComponent } from '../../components/info-content/info-content.component';
import { CardComponent } from '../../components/card/card.component';
import { Person } from '../../interfaces/rickandmortyapi';
import { AppState } from '../../store/states/app.state';


@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet, CardComponent, InfoContentComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})

export default class FavoritosComponent implements OnInit {
  titlePage = 'Favoritos'
  mensagemInfo = {
    textInfo: 'Parece que você ainda não tem favoritos',
    textSugest: 'Volte à página inicial e escolha os melhores para você.',
    buttonShow: true,
    buttonLink: '/',
    buttonText: 'Voltar ao início'
  }
  cards: Person[] = []

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectFavoritos).forEach(data => {
      this.checkCardIsFavorite(data) 
    })
  }

  checkCardIsFavorite(data: Person[]): Person[] {
    this.cards = data.map(card => {
      return { ...card, favorito: 'ativo' };
    });
    return this.cards;
  }

  trackByFn(_index: number, item: Person): number {
    return item.id;
  }
}
