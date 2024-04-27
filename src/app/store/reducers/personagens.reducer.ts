import { createReducer, on } from "@ngrx/store";
import { Person } from "../../interfaces/rickandmortyapi";
import { personagemActions } from "../actions/personagens.actions";



export interface FavoritosState {
  favoritosState: Person[];
}

const initialState: FavoritosState = {
  favoritosState: []
};

export const favoritoReducer = createReducer(
  initialState,
  on(personagemActions.createItemFavoritos, (state, { card }) => {
    return {
      favoritosState: [...state.favoritosState, card]
    };
  }),
  on(personagemActions.removerItemFavoritos, (state, { id }) => {
    return {
      ...state,
      favoritosState: state.favoritosState.filter(item => item.id !== id)
    };
  }),
);
