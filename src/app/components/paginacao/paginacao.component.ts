import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { RickandmortyapiService } from '../../services/rickandmortyapi.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-paginacao',
  standalone: true,
  imports: [NgIf],
  templateUrl: './paginacao.component.html',
  styleUrl: './paginacao.component.scss'
})

export class PaginacaoComponent implements OnInit, OnDestroy {
  subscription!: Subscription 
  totalPages!: number 
  page: number = 1
  showVoltar: boolean = false
  showAvancar!: boolean
  showBusca: boolean = true
  @Output() emitPage: EventEmitter<number> = new EventEmitter<number>();
  @Input() showPagination: boolean | undefined;

  constructor(
    private service: RickandmortyapiService,
  ) { }
  
  ngOnInit(): void {
    this.getNumberPages()
  }

  getNumberPages(){
    this.subscription = this.service.infoPages(`page=1`).subscribe({
      next: (data: number) => {
        this.totalPages = data
      },
    });
  }

  changePage(tipoPagination: string){
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if( tipoPagination === 'avancar' && this.page > 0 && (this.page < this.totalPages) ){
      this.page++
    }else if(this.page > 1){
      this.page--
    }

    this.emitPage.emit(this.page)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
