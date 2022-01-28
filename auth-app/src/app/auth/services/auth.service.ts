import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, Observable, of, tap} from 'rxjs';


import {environment} from 'src/environments/environment';
import {Respuesta} from '../interfaces/respuesta.interface';
import {Usuario} from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _baseUrl : string = environment.baseUrl || '';
  private _usuario! : Usuario;

  constructor(
    private http : HttpClient
  ) { }

  get usuario() : Usuario{
    return {...this._usuario};
  }

  registro(name: string, email: string, password: string){
    const url = `${this._baseUrl}/auth/new`;
    return this.http.post<Respuesta>( url , {name, email, password})
      .pipe(
        tap((res : Respuesta) => {
          localStorage.setItem('token', res.token || '');
          if(res.ok) {
            this._usuario = {
              uid: res.uid,
              name : res.name
            }
          }
        }),
        map( valid => valid.ok),
        catchError(err => of(err.error.msg))
      )

  }

  login(email : string, password : string) {
    const url = `${this._baseUrl}/auth/`;
    return this.http.post<Respuesta>( url , {email, password})
      .pipe(
        tap((res : Respuesta) => {
          localStorage.setItem('token', res.token || '');
          if(res.ok) {
            this._usuario = {
              uid: res.uid,
              name : res.name
            }
          }
        }),
        map( valid => valid.ok),
        catchError(err => of(err.error.msg))
      )
  }

  validarToken() {
    const url = `${this._baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '')
    
      return this.http.get<Respuesta>(url, { headers })
        .pipe(
          map( res => {
            localStorage.setItem('token', res.token || '');
            if(res.ok) {
              this._usuario = {
                uid: res.uid,
                name : res.name
              }
            }
            return res.ok
          }),
          catchError(err => of(false))
        )
  }
}
