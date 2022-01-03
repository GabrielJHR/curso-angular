import { Pipe, PipeTransform } from '@angular/core';
import {Heroe} from '../interfaces/heroe.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[], ordenarPor : string = ''): Heroe[] {
    let heroes : Heroe[] = [...value];
    
    if(ordenarPor){
      
      if(ordenarPor === 'nombre'){
        heroes = value.sort((a,b) => {
          return a.nombre > b.nombre ? 1 : -1;
        })
      }

      if(ordenarPor === 'vuela'){
        heroes = value.sort((a,b) => {
          return a.vuela ? 1 : -1;
        })
      }

      if(ordenarPor === 'color'){
        heroes = value.sort((a,b) => {
          return a.color > b.color ? 1 : -1;
        })
      }

    }

    return heroes;
  }

}
