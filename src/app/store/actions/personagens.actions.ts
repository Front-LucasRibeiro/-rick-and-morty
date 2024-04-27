import { createAction, props } from '@ngrx/store';
import { Person } from '../../interfaces/rickandmortyapi';

const createItemFavoritos = createAction(
  '[Favoritos] Adicionar item na lista de favoritos',
  props<{ card: Person }>()
);

export const personagemActions = {
  createItemFavoritos
}