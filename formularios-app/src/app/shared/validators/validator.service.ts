import { Injectable } from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  patron : string = '([a-zA-Z]+) ([a-zA-Z]+)'
  patronEmail : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }
  
  noPuedeSerStrider(control : FormControl){
    const value = control.value

    if(value?.trim().toUpperCase() === 'strider'.toUpperCase()){
      return {
        strider: true
      }
    }

    return null
  }

  camposIguales(campo1 : string , campo2 : string){

    return ( formGroup: AbstractControl): ValidationErrors | null => {
      const valor1 = formGroup.get(campo1);
      const valor2 = formGroup.get(campo2);

      if(valor1?.value !== valor2?.value){
        const error = { 
          distintos: true,
          campos: [campo1, campo2],
          valores: [valor1?.value, valor2?.value]
        }

        return error      
      }

      return null;
    }

  }
}
