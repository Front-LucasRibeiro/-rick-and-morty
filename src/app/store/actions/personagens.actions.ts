import { createAction, props } from '@ngrx/store';
import { Person } from '../../interfaces/rickandmortyapi';

const createItemFavoritos = createAction(
  '[Favoritos] Adicionar item na lista de favoritos',
  props<{ card: Person }>()
);

const removerItemFavoritos = createAction(
  '[Favoritos] Remover item na lista de favoritos',
  props<{ id: number }>()
);

export const personagemActions = {
  createItemFavoritos,
  removerItemFavoritos
}
