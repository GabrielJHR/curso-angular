import { Component, OnInit } from '@angular/core';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {Heroe} from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {
  termino : string = "";
  heroes : Heroe[] = [];
  heroeSeleccionado! : Heroe;

  constructor( private heroesService : HeroesService) { }

  buscando() : void {
    this.heroesService.getSugerencias(this.termino)
      .subscribe( (res : Heroe[]) => {
        this.heroes = res;
      })
  }

  opcionSeleccionada(event : MatAutocompleteSelectedEvent) {
    const heroe : Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroe(heroe.id!)
      .subscribe((heroe : Heroe) => {
        this.heroeSeleccionado = heroe
      })
  }

}
