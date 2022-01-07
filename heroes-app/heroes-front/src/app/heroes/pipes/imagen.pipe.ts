import { Pipe, PipeTransform } from '@angular/core';
import {Heroe} from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
// Retorna el url o path de la imagen dependiendo su origen (url, carpeta assets, no imagen)

  transform(value: Heroe): string {
    if(!value.alt_img){
      
      if(value.id){
        return `assets/heroes/${value.id}.jpg`
      }
      else {
        return 'assets/no-image.png'
      }

    } 

    else {
      return value.alt_img
    }
  }

}
