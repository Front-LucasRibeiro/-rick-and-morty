import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

import { BuscaComponent } from '../../components/busca/busca.component';
import { CardComponent } from '../../components/card/card.component';
import { InfoContentComponent } from '../../components/info-content/info-content.component';
import { Person, Results } from '../../interfaces/rickandmortyapi';
import { RickandmortyapiService } from '../../services/rickandmortyapi.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet, BuscaComponent, CardComponent, InfoContentComponent],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss',
})


export class ListagemComponent implements OnInit, OnDestroy {
  titlePage = 'Início'
  mensagemInfo = {
    textInfo: 'Nada foi encontrado',
    textSugest: 'Tente realizar uma nova busca.',
    buttonShow: false,
    buttonLink: '',
    buttonText: ''
  }
  cards: Person[] = []
  subscription!: Subscription

  constructor(private service: RickandmortyapiService) { }

  ngOnInit(): void {
    this.subscription = this.service.listar().subscribe({
      next: (data: Person[]) => this.cards = data,
      error: erro => this.cards = []
    })
  }

  // recebendo termo pelo evento emitTerm do component busca
  busca(term: string) {
    this.subscription = this.service.buscar(term).subscribe({
      next: (data: Person[]) => this.cards = data,
      error: erro => this.cards = []
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
