import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Results } from '../interfaces/rickandmortyapi';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RickandmortyapiService {
  private readonly API = 'https://rickandmortyapi.com/api/character';
  private readonly APIFilter = 'https://rickandmortyapi.com/api/character/?name=';

  constructor(private http: HttpClient) { }

  listar(): Observable<Results>{
    return this.http.get<Results>(this.API)
  }

  buscar(term:string):Observable<Results>{
    return this.http.get<Results>(this.APIFilter + term)
  }
}
