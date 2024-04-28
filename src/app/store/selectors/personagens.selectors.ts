import { createSelector } from '@ngrx/store';
import { AppState } from '../states/app.state';

export const selectFavoritos = createSelector(
  (state: AppState) => state.favoritosProvider,
  (favoritos) => favoritos.favoritosState 
);
