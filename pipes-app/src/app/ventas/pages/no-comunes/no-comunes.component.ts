import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  
  // i18nSelect
  nombre: string = 'Camila';
  genero : string = 'femenino';

  invitacionMaps = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }
  
  bienvenidaMaps = {
    'masculino' : 'Bienvenido',
    'femenino' : 'Bienvenida'
  }

  // i18nPlural
  clientes: string[] = ["Gabriel", "Ciro", "Ricardo"];

  clientesMap = {
    '=0' : 'Actualmente no tenemos clientes.',
    '=1' : 'Actualmente tenemos un cliente.',
    'other' : 'Actualmente tenemos # clientes.'
  }

  public cambiarNombre(){
    this.nombre = 'Dario';
    this.genero = 'masculino';
  }

  public eliminarCliente(){
    if(this.clientes){
      this.clientes.pop();
    }
  }

  persona = {
    nombre: 'Gabriel',
    apellido: 'Ramos',
    edad: 26
  }

}
