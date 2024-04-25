import { Component, Input } from '@angular/core';
import { Person } from '../../interfaces/rickandmortyapi';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})


export class CardComponent {
  isAtivo = ""
  @Input() card: Person | undefined;
  
  favoritar(){
 
    // persistir no localstorage e guardar o state global
    
    if(this.isAtivo === 'ativo'){
      this.isAtivo = ""



    }else{
      this.isAtivo = "ativo"
    }
  }

}
