import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person, Results } from './rickandmortyapi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyapiService {

  private readonly API = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  listar(): Observable<Results>{
    return this.http.get<Results>(this.API)
  }
}
