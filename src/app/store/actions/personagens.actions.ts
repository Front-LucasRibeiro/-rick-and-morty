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

const removerTodosFavoritos = createAction(
  '[Favoritos] Remover todos itens na lista de favoritos'
);

export const personagemActions = {
  createItemFavoritos,
  removerItemFavoritos,
  removerTodosFavoritos
}
