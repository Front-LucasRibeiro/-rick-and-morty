import { Component } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

import { BuscaComponent } from '../../components/busca/busca.component';
import { CardComponent } from '../../components/card/card.component';
import { InfoContentComponent } from '../../components/info-content/info-content.component';
import { Person, Results } from '../../services/rickandmortyapi';
import { RickandmortyapiService } from '../../services/rickandmortyapi.service';


@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet, BuscaComponent, CardComponent, InfoContentComponent ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss',
})


export class ListagemComponent {
  titlePage = 'Início'
  mensagemInfo = {
    textInfo: 'Nada foi encontrado',
    textSugest: 'Tente realizar uma nova busca.',
    buttonShow: false,
    buttonLink: '',
    buttonText: ''
  }
  cards: Person[] = []

  constructor(private service: RickandmortyapiService){}

  ngOnInit(): void {
    this.service.listar().subscribe((data: Results) => {
      console.log('dt', data.results)

      this.cards = data.results
    })
    
  }
}
