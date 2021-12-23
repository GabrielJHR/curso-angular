import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
    `img {
      height: 20px;
      width: auto;
    }
    small{
      color : gray;
    }
    `
  ]
})
export class PaisTablaComponent{
  @Input() paises : Pais[] = []

  constructor() { }


}
