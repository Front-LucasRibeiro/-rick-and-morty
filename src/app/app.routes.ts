import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/listagem.component')
  },
  {
    path: 'favoritos',
    loadComponent: () => import('./pages/favoritos/favoritos.component')
  },
  {
    path: 'detalhes/:id',
    loadComponent: () => import('./pages/detalhes/detalhes.component')
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component')
  },
];
