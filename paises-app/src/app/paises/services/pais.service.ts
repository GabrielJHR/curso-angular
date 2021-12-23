import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Pais} from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) {}

  public buscarPais(query: string): Observable<Pais[]> {
    const url = `${this._apiUrl}/name/${query}`
    return this.http.get<Pais[]>(url);
  }

  public buscarCapital(query: string): Observable<Pais[]> {
    const url = `${this._apiUrl}/capital/${query}`
    return this.http.get<Pais[]>(url);
  }
  
  public verPais(query: string): Observable<Pais[]> {
    const url = `${this._apiUrl}/alpha/${query}`
    return this.http.get<Pais[]>(url);
  }
}
