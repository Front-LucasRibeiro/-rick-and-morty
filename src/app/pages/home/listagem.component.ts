import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Store } from '@ngrx/store';
import { RickandmortyapiService } from '../../services/rickandmortyapi.service';
import { Subject, Subscription, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

import { selectFavoritos } from '../../store/selectors/personagens.selectors';
import { AppState } from '../../store/states/app.state';
import { Person } from '../../interfaces/rickandmortyapi';

import { BuscaComponent } from '../../components/busca/busca.component';
import { CardComponent } from '../../components/card/card.component';
import { InfoContentComponent } from '../../components/info-content/info-content.component';
import { PaginacaoComponent } from '../../components/paginacao/paginacao.component';


@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [
    NgFor, 
    NgIf, 
    NgTemplateOutlet, 
    BuscaComponent, 
    CardComponent, 
    InfoContentComponent,
    PaginacaoComponent
  ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss',
})


export default class ListagemComponent implements OnInit, OnDestroy {
  titlePage = 'Início'
  mensagemInfo = {
    textInfo: 'Nada foi encontrado',
    textSugest: 'Tente realizar uma nova busca.',
    buttonShow: false,
    buttonLink: '',
    buttonText: ''
  }
  cards: Person[] = []
  favoritados: Person[] = []
  subscription!: Subscription
  page: string = '1'
  totalPages!: number
  showPagination: boolean = true
 

  private buscaTermSubject: Subject<string> = new Subject<string>();

  constructor(
    private service: RickandmortyapiService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.getListFavoritos()
    this.getListInicial()
    this.busca()
  }

  getListInicial(){
    this.subscription = this.service.listar(`page=${this.page}`).subscribe({
      next: (data: Person[]) => {
        this.checkCardIsFavorite(data)        
      },
      error: _erro => this.cards = []
    });
  }

  getListFavoritos(){
    this.store.select(selectFavoritos).forEach(data => {
      this.favoritados = data
    })
  }

  checkCardIsFavorite(data: Person[]): Person[] {
    this.cards = data.map(card => {
      const favoritado = this.favoritados.find(cardFavorito => card.id === cardFavorito.id);
      if (favoritado) {
        card.favorito = 'ativo';
      }
      return card;
    });
    return this.cards;
  }

  busca(){
    // Configura a cadeia de observáveis para a busca
    this.buscaTermSubject.pipe(
      debounceTime(300), // Aguarda 300ms após a última digitação
      distinctUntilChanged(), // Garante que apenas termos diferentes são enviados para a busca
      switchMap((term: string) => this.service.buscar(term).pipe(
        catchError(() => of([])) // Trata o erro e retorna um Observable vazio em caso de falha
      ))
    ).subscribe((data: Person[]) => {
      this.checkCardIsFavorite(data)  
    });
  }

  // obtendo o numero de page do component pagination 
  getPageChange(page: number): void{
    this.subscription = this.service.listar(`page=${page}`).subscribe({
      next: (data: Person[]) => {
        this.checkCardIsFavorite(data)        
      },
      error: _erro => this.cards = []
    });
  }

  // Recebendo termo pelo evento emitTerm do component busca
  getTermBuscaComponent(term: string): void {
    this.buscaTermSubject.next(term); // Envia o termo para a busca

    if(term === ''){
      setTimeout(() => {
        this.showPagination = true
      },500)
    }else{
      this.showPagination = false
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  trackByFn(_index: number, item: Person): number {
    return item.id;
  }
}
