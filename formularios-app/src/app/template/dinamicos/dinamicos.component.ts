import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  nuevoJuego : string = '';
  persona : Persona = {
    nombre: 'Gabriel Ramos',
    favoritos: [
      { id: 1, nombre: 'GTA V' },
      { id: 2, nombre: 'Mario kart' },
      { id: 3, nombre: 'Terraria' },
      { id: 4, nombre: 'Dota 2' },
    ]
  }

  @ViewChild('miFormulario') miFormulario! : NgForm;

  guardar(){
    this.miFormulario.reset()
  }

  eliminar(indice : number){
    this.persona.favoritos.splice(indice, 1)
  }

  agregar(){
    const nuevoFavorito : Favorito = {
      id : this.persona.favoritos.length > 0? this.persona.favoritos[this.persona.favoritos.length - 1].id + 1 : 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push(nuevoFavorito);
    this.nuevoJuego = "";
  }

}
