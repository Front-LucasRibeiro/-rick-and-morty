import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

import { BuscaComponent } from '../../components/busca/busca.component';
import { CardComponent } from '../../components/card/card.component';
import { InfoContentComponent } from '../../components/info-content/info-content.component';
import { Person } from '../../interfaces/rickandmortyapi';
import { RickandmortyapiService } from '../../services/rickandmortyapi.service';
import { Subject, Subscription, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';



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
  private buscaTermSubject: Subject<string> = new Subject<string>();

  constructor(private service: RickandmortyapiService) { }

  ngOnInit(): void {
    this.subscription = this.service.listar().subscribe({
      next: (data: Person[]) => this.cards = data,
      error: erro => this.cards = []
    });

    // Configura a cadeia de observáveis para a busca
    this.buscaTermSubject.pipe(
      debounceTime(300), // Aguarda 300ms após a última digitação
      distinctUntilChanged(), // Garante que apenas termos diferentes são enviados para a busca
      switchMap((term: string) => this.service.buscar(term).pipe(
        catchError(() => of([])) // Trata o erro e retorna um Observable vazio em caso de falha
      ))
    ).subscribe((data: Person[]) => {
      this.cards = data;
    });
  }

  // Recebendo termo pelo evento emitTerm do component busca
  busca(term: string): void {
    this.buscaTermSubject.next(term); // Envia o termo para a busca
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
