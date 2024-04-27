import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/personagens.reducer';


export const selectFavoritos = createSelector(
  (state: AppState) => state.favoritosProvider,
  (favoritos) => favoritos.favoritos 
);
