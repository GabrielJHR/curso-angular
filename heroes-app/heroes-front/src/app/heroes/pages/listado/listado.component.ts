import { Component, OnInit } from '@angular/core';
import {Heroe} from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {
  listadoHeroes : Heroe[] = [];

  constructor( private heroesService : HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe((res : Heroe[]) => {
        this.listadoHeroes = res
      })
  }

}
