import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {delay, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(
    private http : HttpClient
  ) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        delay(1000),
        map(respuesta => {
          if(respuesta.length > 0){
            return { emailOcupado : true}
          }

          return null;
        })
    )
  }
}
