import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, Episode, Person, Results } from '../interfaces/rickandmortyapi';
import { Observable, map, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RickandmortyapiService {
  private API: string = environment.apiUrl
  private APIFilter: string = environment.apiUrlFilter

  constructor(private http: HttpClient) { }

  listar(page: string): Observable<Person[]> {
    return this.http.get<Results>(`${this.API}/?${page}`).pipe(
      map(res => res.results.map((result: Person) => (
        {
          id: result.id,
          name: result.name,
          status: result.status,
          image: result.image,
          gender: result.gender,
          type: result.type,
          species: result.species
        }
      ))),
      // tap(res => console.log(res))
    )
  }

  infoPages(page: string): Observable<number> {
    return this.http.get(`${this.API}/?${page}`).pipe(
      map((res: any) => res.info.pages), 
      // tap(res => console.log(res))
    )
  }

  listaDetalhesPersonagem(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.API}/${id}`);
  }

  listaEpisodiosPersonagem(linkApi: string): Observable<Episode> {
    return this.http.get<Episode>(linkApi);
  }

  buscar(term: string): Observable<Person[]> {
    return this.http.get<Results>(`${this.APIFilter}${term}`).pipe(
      map(res => res.results.map((result: Person) => (
        {
          id: result.id,
          name: result.name,
          status: result.status,
          image: result.image,
          gender: result.gender,
          type: result.type,
          species: result.species
        }
      ))),
    )
  }
}
