import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable, of, tap} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Usuario} from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl : string = environment.baseUrl;
  private _auth : Usuario | undefined;

  get auth(){
    return {...this._auth};
  }

  constructor(
    private http : HttpClient
  ) { }

  verificaAuth() : Observable<boolean>{
    if(!localStorage.getItem('token')) {
      return of(false);
    }
    else{
      return this.http.get<Usuario>(`${this.baseUrl}/usuarios/1`)
        .pipe(
          map( usuarioCorrecto => {
            if(usuarioCorrecto.id){
              this._auth = usuarioCorrecto;
              return true;
            }
            else{
              return false;
            }
          })
        )
    }
  }

  login() : Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap( usuario => this._auth = usuario),
        tap( usuario => localStorage.setItem('token', usuario.id))
      )
  }
}
