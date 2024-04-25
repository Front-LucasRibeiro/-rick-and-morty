import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

import { BuscaComponent } from '../../components/busca/busca.component';
import { CardComponent } from '../../components/card/card.component';
import { InfoContentComponent } from '../../components/info-content/info-content.component';
import { Person, Results } from '../../interfaces/rickandmortyapi';
import { RickandmortyapiService } from '../../services/rickandmortyapi.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet, BuscaComponent, CardComponent, InfoContentComponent ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss',
})


export class ListagemComponent implements OnInit {
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
      this.cards = data.results
    })      
  }

  // recebendo termo pelo evento emitTerm do component busca
  busca(term: string){
    this.service.buscar(term).pipe(
      catchError(error => {
        return this.cards = []
      })
    ).subscribe((data: Results) => {
      this.cards = data.results;
    });
  }
}
