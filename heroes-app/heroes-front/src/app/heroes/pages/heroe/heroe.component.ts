import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs';
import {Heroe} from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img{
        width : 100%;
        height : auto;
      }
    `
  ]
})
export class HeroeComponent implements OnInit {
  heroe! : Heroe;

  constructor( private route : ActivatedRoute, private heroesServices : HeroesService) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(({id}) => this.heroesServices.getHeroe(id)),
      ).subscribe((heroe : Heroe) => {
        this.heroe = heroe
      })
  }

}
