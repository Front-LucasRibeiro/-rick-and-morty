import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RickandmortyapiService } from '../../services/rickandmortyapi.service';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss'
})

export class BuscaComponent {
  term: string = '';
  @Output() emitTerm: EventEmitter<string> = new EventEmitter<string>();

  constructor(private service: RickandmortyapiService){}

  // enviar termo para buscar o personagem na API pelo nome
  getTermDigitado(){
    this.emitTerm.emit(this.term)
  }
}
