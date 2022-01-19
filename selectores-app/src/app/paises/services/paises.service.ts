import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Pais} from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private _apiUrl: string = 'https://restcountries.com/v3.1'
  private _filtros : string = 'fields=name,cca2'
  
  constructor(private http: HttpClient) {}

  public porRegion(query: string): Observable<Pais[]> {
    const url = `${this._apiUrl}/region/${query}?${this._filtros}`
    return this.http.get<Pais[]>(url);
  }

  public infoPais(query: string): Observable<Pais | null> {
    if(!query){
      return of(null)
    }

    const url = `${this._apiUrl}/alpha/${query}?fields=borders,cca2`
    return this.http.get<Pais>(url);
  }

  public infoPaisSmall(query: string): Observable<Pais> {
    const url = `${this._apiUrl}/alpha/${query}?fields=cca2,name`
    return this.http.get<Pais>(url);
  }
}
