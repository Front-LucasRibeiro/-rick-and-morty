import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { AppState } from '../../store/reducers/personagens.reducer';
import { Store } from '@ngrx/store';
import { selectFavoritos } from '../../store/selectors/personagens.selectors';
import { Observable, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterLinkActive, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  counterFavorite$!: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) { }

  
  ngOnInit(): void {
    this.counterFavorite$ = this.store.select(selectFavoritos).pipe(
      map(data => data.length)
    );
  }
}
