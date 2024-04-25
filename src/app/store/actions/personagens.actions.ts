import { createAction, props } from '@ngrx/store';

export const atualizarTermoBusca = createAction(
  '[Busca] Atualizar Termo de Busca',
  props<{ termo: string }>()
);
