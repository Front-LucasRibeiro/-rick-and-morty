import { Routes } from '@angular/router';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { ListagemComponent } from './pages/listagem/listagem.component';

export const routes: Routes = [
  {
    path: 'favoritos',
    component: FavoritosComponent
  },
  {
    path: '',
    component: ListagemComponent
  },
];
