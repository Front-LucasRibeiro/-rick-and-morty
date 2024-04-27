import { createReducer, on } from "@ngrx/store";
import { Person } from "../../interfaces/rickandmortyapi";
import { personagemActions } from "../actions/personagens.actions";

export interface AppState {
  favoritosProvider: FavoritosState;
}

export interface FavoritosState {
  favoritos: Person[];
}

const initialState: FavoritosState = {
  favoritos: []
};

export const favoritoReducer = createReducer(
  initialState,
  on(personagemActions.createItemFavoritos, (state, { card }) => {
    return {
      favoritos: [...state.favoritos, card]
    };
  }),
  on(personagemActions.removerItemFavoritos, (state, { id }) => {
    return {
      ...state,
      favoritos: state.favoritos.filter(item => item.id !== id)
    };
  }),
);
