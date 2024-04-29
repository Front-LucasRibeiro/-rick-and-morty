import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RickandmortyapiService } from '../../services/rickandmortyapi.service';
import { Character, Episode } from '../../interfaces/rickandmortyapi';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.scss'
})

export default class DetalhesComponent implements OnInit, OnDestroy {
  idPerson!: string;
  titleTop: string = 'Personagem'
  titleMiddle: string = 'Localização'
  titleBottom: string = 'Episódios'
  subscription!: Subscription
  data!: Character
  dataEpisode: Episode[] = []

  constructor(
    private service: RickandmortyapiService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.getDetalhesPersonagem()
  }

  getDetalhesPersonagem(){
    this.idPerson = this.route.snapshot.paramMap.get('id') ?? '';

    this.subscription = this.service.listaDetalhesPersonagem(this.idPerson).subscribe({
      next: (data: Character) => {
        this.data = data

        data.episode.map((item:string) => {
          this.subscription = this.service.listaEpisodiosPersonagem(item).subscribe({
            next: (data: Episode) => {
              this.dataEpisode.push(data) 
            },
            error: (erro: any) => console.log(erro)
          })
        })
      },
      error: (erro: any) => console.log(erro)
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  trackByFn(_index: number, item: Episode): number {
    return item.id;
  }
}
