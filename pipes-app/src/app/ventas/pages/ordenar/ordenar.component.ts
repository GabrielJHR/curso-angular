import { Component } from '@angular/core';
import {Color, Heroe} from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent{
  heroes : Heroe[] = [
    {
      nombre : 'Superman',
      vuela : true,
      color : Color.rojo
    },
    {
      nombre : 'Batman',
      vuela : false,
      color : Color.azul
    },
    {
      nombre : 'Robin',
      vuela : false,
      color : Color.amarillo
    },
    {
      nombre : 'Linterna verde',
      vuela : true,
      color : Color.verde
    },
  ];

  ordenarPor : string = '';

  enMayusculas : boolean = true;

  toggleCase(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarCriterio(valor : string) : void {
    this.ordenarPor = valor;
  }
}
