import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { favoritoReducer } from './store/reducers/personagens.reducer';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideStore(),
    provideState({ name: 'favoritosProvider', reducer: favoritoReducer })
  ]
};
